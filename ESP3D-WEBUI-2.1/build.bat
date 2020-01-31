cd %~dp0
echo "Install dependencis"
cmd.exe /c npm install
echo "Suppression cache"
rmdir fr
rm index.html.gz
echo "FR pakage"
mkdir /Q /S fr
cmd.exe /c gulp package --lang fr
copy index.html.gz fr

