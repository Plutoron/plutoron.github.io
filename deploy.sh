npm run build
git checkout master
rm -rf main.js
rm -rf index.html
rm -rf *.*.js
rm -rf *.*.css
mv dist/* ./
git add .
git commit -m 'publish ++'
git push origin master
git checkout dev