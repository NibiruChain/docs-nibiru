# deploy.sh - Production deployment

BUILD_PATH=".vuepress/dist"
ORG_NAME="NibiruChain"
REPO_NAME="docs-nibiru"

REPO_URL="https://github.com/$ORG_NAME/$REPO_NAME"

set -e

yarn build
echo docs.nibiru.fi > $BUILD_PATH/CNAME

cd $BUILD_PATH
touch .nojekyll
git init
git add .
git commit -am "deploy"
git checkout -b gh-pages
git push -u $REPO_URL gh-pages --force
rm -rf .git
cd ..

# Template: See https://stackoverflow.com/a/65733058/13305627
# git push <remote> `git subtree split --prefix <local-folder> <local-branch>`:<remote-branch> --force
# git push origin `git subtree split --prefix dist deploy`:gh-pages --force
