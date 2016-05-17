rem @echo off
rd /s /q dist tmp
call ember build -prod
cd dist
echo strike-cnm.surge.sh > CNAME
surge 