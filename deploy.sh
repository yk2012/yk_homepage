#!/usr/bin/env sh
set -e
npm run docs:build
cd dist
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:yk2012/yk2012.github.io.git master

cd - 