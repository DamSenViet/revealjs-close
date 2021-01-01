#!/bin/sh

set -e

cd "${GITHUB_WORKSPACE}"

echo "DEPENDENCIES: INSTALLING..."
npm install
echo "DEPENDENCIES: COMPLETE"

echo "BUILD: BUILDING..."
npm run build
echo "BUILD: COMPLETE"

cd tests/manual

echo "GIT: INSTALLING..."
apk add git
echo "GIT: INSTALLED"


echo "GIT: CONFIGURING..."
git init
git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"
echo "GIT: CONFIGURED"

echo "GIT: COMMITTING..."
git add .
git commit -m "Auto deploy from GitHub Actions"
echo "GIT: COMITTED"

echo "GIT: PUSHING..."
git push -f "https://${ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git" master:gh-pages
echo "GIT: PUSHED"