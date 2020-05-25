npm run update
git add .
git commit -m 'deploy'
git push origin dev
npm run build
git checkout master
rm -rf `ls  |egrep -v dist`   
mv dist/* ./
git add .
git commit -m 'publish ++'
git push origin master
git checkout dev