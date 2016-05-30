rem @echo off
rd /s /q dist tmp
call ember build -prod
cd dist
copy index.html 200.html
echo strike-cnm.surge.sh > CNAME
surge

cd ..