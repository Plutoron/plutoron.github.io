npm run update
git add .
git commit -m 'deploy'
git push origin dev
npm run build
git checkout master
rm -rf index.html
rm -rf *.js
rm -rf *.css
rm -rf images
mv dist/* ./
git add .
git commit -m 'publish ++'
git push origin master
git checkout dev