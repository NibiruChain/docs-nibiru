import fs from "fs";
import readline from "readline";
import path from "path";

const PATH_LIST_IN_FILE: string[] = ["dev", "nibijs", "nibijs.md"];
const PATH_LIST_DIR: string[] = PATH_LIST_IN_FILE.slice(0, 2);
const CONFIG = {
  functionsHeaderTitle: "# NibiJS - Functions",
  functionsBodyTitle: "## NibiJS - Functions",
};

// Verifies that the expected files are present before script execution:
// dev/nibijs
// dev/nibijs/nibijs.md
function checkForDirectoryAndFiles() {
  const assertPath = (p: string) => {
    if (!fs.existsSync(p)) console.error("missing path: %s", p);
  };

  const dirPath = path.join(...PATH_LIST_DIR);
  assertPath(dirPath);

  const filePath = path.join(...PATH_LIST_IN_FILE);
  assertPath(filePath);

  console.info("Paths %s and %s are present", dirPath, filePath);
}

interface MainDocInfo {
  /** linesMain is an array of lines of text for the main section. */
  linesMain: string[];
  /** linesToc is an array of lines of text for the table of contents section. */
  linesToc: string[];
  /** lineMainStart is the line index at which the main section starts */
  lineMainStart: number;
  /** lineMainEnd is the line index at which the main section ends */
  lineMainEnd: number;
  /** lineTocStart is the line index at which the table of contents section starts */
  lineTocStart: number;
  /** lineTocEnd is the line index at which the table of contents section ends */
  lineTocEnd: number;
}

function printLineNumbers(docInfo: MainDocInfo) {
  console.log("lineMainStart: %s", docInfo.lineMainStart);
  console.log("lineMainEnd: %s", docInfo.lineMainEnd);
  console.log("lineTocStart: %s", docInfo.lineTocStart);
  console.log("lineTocEnd: %s", docInfo.lineTocEnd);
}

/**
 * findLineNumberForFunctionsSection is a method that reads through the main
 * documentation generated by the docgen-md script of @nibiruchain/nibijs.
 *
 * @async
 * @returns {Promise<MainDocInfo>}
 */
async function findLineNumberForFunctionsSection(): Promise<MainDocInfo> {
  const rl = readline.createInterface({
    input: fs.createReadStream(path.join(...PATH_LIST_IN_FILE)),
    crlfDelay: Infinity,
  });

  let lineMainStart: number = -1;
  let linesMain: string[] = [];
  let lineTocStart: number = -1;
  let lineTocEnd: number = -1;
  let linesToc: string[] = [];
  let idx: number = 0;
  for await (let line of rl) {
    // Mark the line numbers where the sections start
    if (line.includes("## Functions")) {
      if (line.includes("### Functions")) {
        lineTocStart = idx;
        line = CONFIG.functionsHeaderTitle;
      } else {
        lineMainStart = idx;
        line = CONFIG.functionsBodyTitle;
      }
    }

    // Grab the lines for the Table of Contents
    if (lineTocStart !== -1 && lineTocEnd === -1) {
      if (line.includes("## Type Aliases")) {
        lineTocEnd = idx;
      } else {
        linesToc.push(line);
      }
    }

    // Grab lines for the content
    if (lineMainStart !== -1) {
      linesMain.push(line);
    }

    idx += 1;
  }
  const lineMainEnd: number = idx;
  rl.close();

  return {
    linesMain,
    lineMainStart,
    lineMainEnd,
    lineTocStart,
    lineTocEnd,
    linesToc,
  };
}

function functionsFilePath(): string {
  const newFilePathList = PATH_LIST_DIR.concat(["functions.md"]);
  const newFilePath = path.join(...newFilePathList);
  return newFilePath;
}

function createToc(lines: string[]) {
  const newFilePath = functionsFilePath();
  const stream = fs.createWriteStream(newFilePath, {
    flags: "w",
    encoding: "utf-8",
  }); // a for append, w for (over)write
  stream.on("error", (err) => {
    console.error(err);
  });
  lines.forEach((line, idx) => {
    if (idx !== 0) line = "\n" + line;
    stream.write(line);
  });
  stream.close();
  console.log("Created table of contents for %s", newFilePath);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function appendMainContent(lines: string[]) {
  const newFilePath = functionsFilePath();
  const stream = fs.createWriteStream(newFilePath, {
    flags: "a",
    encoding: "utf-8",
  }); // a for append, w for (over)write

  await sleep(300);
  stream.write("\n");

  stream.on("error", (err) => {
    console.error(err);
  });

  lines.forEach(async (line, idx) => {
    if (idx !== 0) line = "\n" + line;
    stream.write(line);
  });
  console.log("Added main content to %s", newFilePath);
  stream.close();
}

async function copyOriginalToTempFile(args: {
  lineMainStart: number;
  lineTocStart: number;
  lineTocEnd: number;
}): Promise<{ tempPath: string }> {
  const { lineMainStart, lineTocStart, lineTocEnd } = args;
  const rl = readline.createInterface({
    input: fs.createReadStream(path.join(...PATH_LIST_IN_FILE)),
    crlfDelay: Infinity,
  });

  const tempPath = path.join(...PATH_LIST_DIR.concat("temp.md"));
  const writeStream = fs.createWriteStream(tempPath, {
    flags: "w",
  });

  let idx = 0;
  for await (const line of rl) {
    const isBeforeMain = idx < lineMainStart;
    const isNotToc = idx < lineTocStart || idx > lineTocEnd;

    if (isBeforeMain && isNotToc) {
      writeStream.write(line + "\n");
    }
    idx += 1;
  }
  return { tempPath };
}

/**
 * replaceOriginalWithTemp moves the contents of nibijs.md to exports.md
 * @param {string} tempPath
 */
function replaceOriginalWithTemp(tempPath: string) {
  const inFilePath: string = path.join(...PATH_LIST_IN_FILE);
  fs.unlinkSync(inFilePath);
  const outFilePath: string = path.join(
    ...PATH_LIST_DIR.concat(["exports.md"])
  );
  fs.renameSync(tempPath, outFilePath);
}

async function addTitleToReadme() {
  // Read the first line of the in-file
  const rl = readline.createInterface({
    input: fs.createReadStream(path.join(...PATH_LIST_IN_FILE)),
    crlfDelay: Infinity,
  });

  // Make it the title
  let titleLine: string = "# NibiJS Documentation";
  for await (let line of rl) {
    if (line.includes(titleLine)) {
      titleLine = line;
      break;
    }
  }

  // Write title to the top of README.md
  const pathReadme: string = path.join(...PATH_LIST_DIR.concat(["README.md"]));
  let linesReadme: string[] = fs
    .readFileSync(pathReadme)
    .toString()
    .split("\n");
  // Make 'titleLine' the beginning of the array
  linesReadme = ["---", "order: 1", "---", "", titleLine, ""].concat(
    linesReadme
  );
  fs.writeFileSync(pathReadme, linesReadme.join("\n"));
}

function changeExportsTitle() {
  const pathExports: string = path.join(
    ...PATH_LIST_DIR.concat(["exports.md"])
  );
  let linesExports: string[] = fs
    .readFileSync(pathExports)
    .toString()
    .split("\n");
  linesExports = linesExports.map((line, idx) => {
    return line.includes("# NibiJS") ? "# NibiJS - Exports" : line;
  });
  fs.writeFileSync(pathExports, linesExports.join("\n"));
}

function addOrderHeaders() {
  const orders: { [key: string]: number } = {
    "exports.md": 2,
    "functions.md": 5,
  };

  const writeOrderToTopOfFile = (fname: string, order: number) => {
    const filePath: string = path.join(...PATH_LIST_DIR.concat([fname]));
    let lines: string[] = fs.readFileSync(filePath).toString().split("\n");
    lines = ["---", `order: ${order}`, "---", ""].concat(lines);
    fs.writeFileSync(filePath, lines.join("\n"));
  };

  for (const fname in orders) {
    const order = orders[fname];
    writeOrderToTopOfFile(fname, order);
  }
}

async function main() {
  checkForDirectoryAndFiles();
  const docInfo: MainDocInfo = await findLineNumberForFunctionsSection();
  printLineNumbers(docInfo);
  createToc(docInfo.linesToc);
  await appendMainContent(docInfo.linesMain);
  console.log("linesToc: %s", docInfo.linesToc.slice(0, 5));
  console.log("linesMain: %s", docInfo.linesMain.slice(0, 5));
  const { tempPath } = await copyOriginalToTempFile(docInfo);
  replaceOriginalWithTemp(tempPath);
  await addTitleToReadme();
  changeExportsTitle();
  addOrderHeaders();
}

main();
