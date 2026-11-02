# Configuração e execução

## Requisitos

O projeto utiliza:

- Node.js `20.20.2`, definido em `.nvmrc`;
- Node.js `20.x` e npm `10.x`, definidos em `package.json`;
- Expo SDK `54`;
- PowerShell, Prompt de Comando ou outro terminal compatível.

## Node.js

Se você utiliza um gerenciador de versões, selecione a versão do arquivo `.nvmrc`:

```powershell
nvm use 20.20.2
```

O comando pode variar conforme o gerenciador instalado. Confirme a versão ativa:

```powershell
node --version
npm.cmd --version
```

O Node deve retornar `v20.20.2`.

### Instalação portátil no Windows

Quando não houver `nvm` ou outro gerenciador disponível, o Node pode ser mantido em `.tools/node-v20.20.2-win-x64`. Essa pasta é local, não faz parte do código-fonte e está ignorada pelo Git.

Para ativá-la na sessão atual do PowerShell:

```powershell
$nodeDir = "$PWD\.tools\node-v20.20.2-win-x64"
$env:Path = "$nodeDir;" + (($env:Path -split ';' | Where-Object {
  $_ -and $_ -notmatch 'node-v20.20.2-win-x64'
}) -join ';')
```

Se o PATH também contiver uma pasta `node_modules\npm\bin`, mantenha a raiz `node-v20.20.2-win-x64` antes dela para que o wrapper local do npm seja encontrado.

## Instalar dependências

No Windows, use `npm.cmd` quando o PowerShell bloquear `npm.ps1`:

```powershell
npm.cmd install
```

O erro abaixo indica apenas a política de execução do PowerShell:

```text
npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada
```

As alternativas são usar `npm.cmd` ou liberar scripts somente na sessão atual:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

## Executar o Expo

Inicie o servidor de desenvolvimento:

```powershell
npm.cmd start
```

Ou execute diretamente em uma plataforma:

```powershell
npm.cmd run android
npm.cmd run ios
npm.cmd run web
```

Os comandos disponíveis são definidos nos scripts de `package.json`.

## Solução de problemas

### `node` ou `npm` não encontrados

Confirme se a pasta correta está no PATH:

```powershell
Get-Command node
Get-Command npm -All
```

Ative novamente o Node portátil ou abra um novo terminal após alterar o PATH.

### `npm.ps1` bloqueado

Use:

```powershell
npm.cmd install
npm.cmd start
```

### O npm procura arquivos em `node_modules\npm\bin\node_modules`

Isso normalmente indica que o PATH aponta diretamente para `node_modules\npm\bin`. Remova essa pasta do início do PATH e coloque a raiz da instalação do Node primeiro:

```powershell
$nodeDir = "$PWD\.tools\node-v20.20.2-win-x64"
$env:Path = "$nodeDir;" + (($env:Path -split ';' | Where-Object {
  $_ -and $_ -notmatch 'node-v20.20.2-win-x64'
}) -join ';')
```

### Expo não inicia

Confirme a instalação das dependências e tente iniciar limpando o cache:

```powershell
npm.cmd install
npm.cmd start -- --clear
```
