cd %~dp0
cmd.exe /c npm install
echo "FR pakage"
mkdir fr
cmd.exe /c gulp package --lang fr
copy index.html.gz fr

