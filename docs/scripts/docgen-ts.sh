#!/usr/bin/env bash

set -eo pipefail

new_docs_dir="dev/nibijs"

# Fetch the nibijs markdown docs from the ts-sdk repo
git clone git@github.com:NibiruChain/ts-sdk.git

# Move the docs to new_docs_dir
mkdir --parents $new_docs_dir
cp -r ts-sdk/packages/nibijs/docs/** $new_docs_dir

# From inside the new_docs_dir, create README.md and nibijs.md
# README.md becomes the markdown for docs.nibiru.fi/dev/nibijs
# nibijs.md holds the content for both exports.md and functions.md
cp ts-sdk/packages/nibijs/README.md $new_docs_dir/README.md
cd $new_docs_dir
rm intro.md
egrep -lRZ 'intro.md' . | xargs -0 -l sed -i -e 's/intro.md/README.md/g'
mv modules.md nibijs.md
egrep -lRZ 'modules.md' . | xargs -0 -l sed -i -e 's/modules.md/nibijs.md/g'

cd ../.. # path back to the root
# The moveFunction.ts script creates functions.md and exports.md using nibijs.md
yarn run ts-node scripts/moveFunction.ts 
egrep -lRZ 'nibijs.md' $new_docs_dir/functions.md | xargs -0 -l sed -i -e 's/nibijs.md/functions.md/g'
egrep -lRZ 'nibijs.md' $new_docs_dir/exports.md | xargs -0 -l sed -i -e 's/nibijs.md/exports.md/g'

# Cleanup
rm -rf ts-sdk


# Q: How does the egrep xargs command work?
# 
# ```bash
# egrep -lRZ "\.jpg|\.png|\.gif" . \
#   | xargs -0 -l sed -i -e 's/\.jpg\|\.gif\|\.png/.bmp/g'
# ```
# The above example finds all instances of ".jpg", ".png", and ".gif" in any files at
# the current wording directory recursively and replaces them with ".bmp"
# 
# ### **`egrep`**: find matching lines using extended regular expressions
# * `-l`: only list matching filenames
# * `-R`: search recursively through all given directories
# * `-Z`: use `\0` as record separator
# * `"\.jpg|\.png|\.gif"`: match one of the strings `".jpg"`, `".gif"` or `".png"`
# * `.`: start the search in the current directory
# 
# 
# ### **`xargs`**: execute a command with the stdin as argument
# * `-0`: use `\0` as record separator. This is important to match the `-Z` of `egrep` and to avoid being fooled by spaces and newlines in input filenames.
# * `-l`: use one line per command as parameter
# 
# ### **`sed`**: the **s**tream **ed**itor
# * `-i`: replace the input file with the output without making a backup
# * `-e`: use the following argument as expression
# * `'s/\.jpg\|\.gif\|\.png/.bmp/g'`: replace all occurrences of the strings `".jpg"`, `".gif"` or `".png"` with `".bmp"`