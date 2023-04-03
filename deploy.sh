#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploy to https://<USERNAME>.github.io
git push -f git@github.com:{David-C-gd-y}/{David-C-gd-y}.github.io.git main

cd -
