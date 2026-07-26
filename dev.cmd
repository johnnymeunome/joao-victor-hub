@echo off
setlocal

set "CODEX_NODE=C:\Users\euvic\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if not exist "%CODEX_NODE%" (
  echo [erro] O runtime Node.js do Codex nao foi encontrado.
  echo Instale Node.js 22 ou superior e execute: npm run dev
  exit /b 1
)

if not exist "%~dp0node_modules\next\dist\bin\next" (
  echo [erro] As dependencias do projeto nao foram encontradas.
  echo Abra este projeto no Codex e solicite a reinstalacao das dependencias.
  exit /b 1
)

cd /d "%~dp0"
"%CODEX_NODE%" node_modules\next\dist\bin\next dev
