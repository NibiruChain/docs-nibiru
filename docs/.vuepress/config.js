const REPO = "NibiruChain/docs-nibiru"
module.exports = {
  theme: "@nibiruchain/vuepress-theme-cosmos",
  title: "Nibiru Chain",
  locales: {
    "/": {
      lang: "en-US"
    },
  },
  base: process.env.VUEPRESS_BASE || "/",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/site.webmanifest" }],
    ['meta', { name: "msapplication-TileColor", content: "#2e3148" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
    ['link', { rel: "icon", type: "image/svg+xml", href: "/favicon-svg.svg" }],
    ['link', { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }],
    ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
    ["link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    ["link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
  themeConfig: {
    repo: REPO,
    docsRepo: REPO,
    docsDir: "docs",
    editLinks: true,
    label: "hub", // options: sdk, ibc, hub
    // TODO
    //algolia: {
    //  id: "BH4D9OD16A",
    //  key: "ac317234e6a42074175369b2f42e9754",
    //  index: "ibc-go"
    //},
    // Logo in the top left corner, file in .vuepress/public/
    logo: {
      src: "/nibi-logo-on-white-pink.svg",
    },
    versions: [
      // {
      //   "label": "main",
      //   "key": "main"
      // },
    ],
    topbar: {
      banner: true
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: "Nibiru Ecosystem",
          children: [
            {
              title: "Overview",
              path: "/",
            },
            {
              title: "Nibi-Perps",
              directory: false,
              path: "/ecosystem/nibi-perps.html"
            },
            {
              title: "Nibi-Swap AMM",
              directory: false,
              path: "/ecosystem/nibi-swap.html"
            },
            {
              title: "NUSD Stablecoin",
              directory: false,
              path: "/ecosystem/nusd-stablecoin.html"
            },
            {
              title: "Price Feed Oracles",
              directory: false,
              path: "/ecosystem/price-feed-oracles.html"
            },
            {
              title: "Governance",
              directory: true,
              path: "/ecosystem/gov"
            },
            {
              title: "Nibiru Blog",
              path: "https://blog.nibiru.fi/"
            },
            {
              title: "Block Explorer",
              path: "https://explorer.testnet.nibiru.fi/"
            },
          ]
        },
        {
          title: "Protocol Development",
          path: "dev",
          children: [
            {
              title: "Development Overview",
              directory: false,
              path: "/dev/"
            },
            {
              title: "Nibid CLI",
              directory: true,
              path: "/dev/cli"
            },
            {
              title: "TypeScript SDK — nibijs",
              directory: true,
              path: "/dev/nibijs"
            },
            {
              title: "Module Reference",
              directory: true,
              path: "/dev/x",
            },
            {
              title: "Nibiru Protobuf",
              directory: true,
              path: "/dev/protobuf",
            },
            {
              title: "Python SDK",
              directory: false,
              path: "/dev/py-sdk.html"
            },
          ]
        },
        {
          title: "Running Nodes",
          children: [
            {
              title: "Running a Full Node",
              directory: true,
              path: "/run-nodes/testnet"
            },
            {
              title: "For Validators",
              directory: true,
              path: "/run-nodes/validators"
            },
          ]
        },
        {
          title: "Learn More",
          path: "learn",
          children: [
            {
              title: "Tokenomics",
              directory: false,
              path: "/learn/tokenomics.html"
            },
            {
              title: "FAQ",
              directory: false,
              path: "/learn/faq.html"
            },
            {
              title: "Glossary",
              directory: false,
              path: "/learn/GLOSSARY.html"
            },
          ]
        }
      ]
    },
    gutter: {
      title: "Help & Support",
      editLink: true,
      chat: {
        title: "Discord",
        text: "Chat with Nibiru developers on Discord.",
        url: "https://discord.gg/sgPw8ZYfpQ",
        bg: "linear-gradient(225.11deg, #2E3148 0%, #161931 95.68%)"
      },
      github: {
        title: "Found an Issue?",
        text: "Help us improve this page POGGERS by suggesting edits on GitHub."
      }
    },
    footer: {
      logo: "/nibi-logo-on-white-pink.svg",
      question: {
        text: "Chat with Nibiru developers on <a href='https://discord.gg/sgPw8ZYfpQ' target='_blank'>Discord</a>."
      },
      textLink: {
        text: "nibiru.fi",
        url: "https://nibiru.fi"
      },
      services: [
        {
          service: "twitter",
          url: "https://twitter.com/NibiruChain"
        },
        {
          service: "medium",
          url: "https://blog.nibiru.fi/"
        },
        {
          service: "linkedin",
          url: "https://www.linkedin.com/company/nibiruchain"
        },
        {
          service: "github",
          url: "https://github.com/NibiruChain"
        },
        {
          service: "discord",
          url: "https://discord.gg/sgPw8ZYfpQ"
        },
        // {
        //   service: "reddit",
        //   url: "https://reddit.com/r/cosmosnetwork"
        // },
        // {
        //   service: "telegram",
        //   url: "https://t.me/cosmosproject"
        // },
        // {
        //   service: "youtube",
        //   url: "https://www.youtube.com/c/CosmosProject"
        // }
      ],
      smallprint:
        "[Terms and Conditions](/terms-and-conditions-nibiru.pdf) | [Privacy Policy](/privacy-policy-nibiru.pdf) | The development of [Nibiru](https://github.com/NibiruChain) is led primarily by Nibi, Inc.",
      links: [
        {
          title: "Documentation",
          children: [
            {
              title: "Tendermint Core",
              url: "https://docs.tendermint.com"
            },
            {
              title: "Cosmos SDK",
              url: "https://docs.cosmos.network"
            },
            {
              title: "Inter-Blockchain Communication (IBC)",
              url: "https://ibc.cosmos.network/"
            },
          ]
        },
        {
          title: "Community",
          children: [
            {
              title: "🌴 Link Tree",
              url: "https://linktr.ee/nibiruchain"
            },
            {
              title: "Discord Chat",
              url: "https://discord.gg/sgPw8ZYfpQ"
            },
            {
              title: "Nibiru blog",
              url: "https://blog.nibiru.fi/"
            },
            {
              title: "Twitter",
              url: "https://twitter.com/NibiruChain"
            },
          ]
        },
        {
          title: "Contributing",
          children: [
            {
              title: "Contributing to the docs",
              url:
                `https://github.com/${REPO}/docs/blob/main/docs/DOCS_README.md`
            },
            {
              title: "Source code on GitHub",
              url: `https://github.com/${REPO}/docs/`
            }
          ]
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-51029217-2"
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://docs.nibiru.fi"
      }
    ]
  ]
};
