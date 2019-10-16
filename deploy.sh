npm run build
git checkout master
mv dist/* ./
git add .
git commit -m 'publish ++'
git push origin master
git checkout dev