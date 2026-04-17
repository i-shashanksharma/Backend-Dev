Write-Host "Deploying to Production IIS"
iisreset
Copy-Item -Recurse -Force .\backend\* C:\inetpub\wwwroot\