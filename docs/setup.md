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

## Conectar à finance-api

A URL central fica em `src/constants/url_base_constants.ts`. `EXPO_PUBLIC_API_URL`,
quando preenchida, tem prioridade sobre os fallbacks. Configure-a na sessão do
PowerShell ou em `.env.local` (ignorado pelo Git). Use `.env.example` como referência;
nenhum token ou senha deve ser colocado nessa variável, pois ela é pública no bundle.

| Ambiente | Sem variável | Configuração explícita |
| --- | --- | --- |
| Android | `http://10.0.2.2:8082/api/v1` (fallback para Android Emulator) | Obrigatória em aparelho físico |
| Expo Web | `http://localhost:8082/api/v1` | Opcional |
| iOS/outro ambiente | Erro de configuração | Obrigatória |

Não há detecção de aparelho físico versus emulador nem descoberta automática do IP LAN.
Sem variável, todo Android usa o fallback acima, que foi destinado ao Android Emulator.
Em dispositivo físico, configure explicitamente `EXPO_PUBLIC_API_URL` com o IP LAN
da máquina que executa a API; `10.0.2.2` e `localhost` não apontam para essa máquina.
Uma URL configurada tem prioridade em qualquer plataforma.

A URL deve usar `http://` ou `https://`, conter um hostname ou IPv4 válido e terminar
em `/api/v1` (um prefixo de proxy antes de `/api/v1` é permitido). Credenciais, query
e fragmentos são rejeitados. Barras repetidas no caminho e barras finais são removidas.
O endereço configurado não é substituído com base no tipo de dispositivo.
Depois de mudar a variável, encerre o Expo e inicie-o novamente.

### Android Emulator no Windows

Com a API acessível na porta `8082` do Windows, remova qualquer override da sessão
e deixe a variável vazia/ausente em `.env.local` para manter o comportamento original:

```powershell
Remove-Item Env:EXPO_PUBLIC_API_URL -ErrorAction SilentlyContinue
npm.cmd run android
```

### Expo Web no Windows

Sem override, o navegador usa `http://localhost:8082/api/v1`:

```powershell
Remove-Item Env:EXPO_PUBLIC_API_URL -ErrorAction SilentlyContinue
npm.cmd run web
```

A API deve permitir a origem exata exibida pelo Expo, incluindo a porta, na sua
configuração `APP_CORS_ALLOWED_ORIGINS`. Por exemplo, para Expo em
`http://localhost:8081`, essa é a origem permitida; não inclua `/api/v1` na origem CORS.
Configurar a URL no mobile não altera o CORS da API.

O projeto ainda não declara `react-dom`, `react-native-web` e `@expo/metro-runtime`
para execução web. Se o Expo solicitar esses pacotes, a instalação das versões
compatíveis com o SDK 54 precisa ser autorizada antes de validar o navegador.

### Dispositivo físico com Expo Go

Mantenha o aparelho e o Windows na mesma rede. Consulte o IPv4 da interface ativa
com `ipconfig` e substitua o placeholder abaixo pelo IP LAN dessa máquina:

```powershell
$env:EXPO_PUBLIC_API_URL = "http://<IP_LAN_DO_COMPUTADOR>:8082/api/v1"
npm.cmd start -- --lan
```

Abra o QR code no Expo Go. A porta `8082` precisa estar publicada pelo Docker e
liberada pelo firewall do Windows, assim como o acesso ao servidor Expo. VPNs e
isolamento de clientes Wi-Fi podem impedir a conexão. O modo tunnel do Expo não
publica automaticamente a API; a URL da API continua precisando ser acessível pelo aparelho.
Também é possível salvar a mesma variável em `.env.local`, mantendo esse arquivo fora do Git.

### Contratos usados pelos serviços

- `POST /auth/change-password` envia `currentPassword`, `newPassword` e `confirmPassword`
  e recebe `{ data: null, message }`. Exige autenticação. A senha atual é obrigatória;
  a nova senha tem de 8 a 72 caracteres, no máximo 72 bytes UTF-8, deve ser diferente
  da atual e coincidir com a confirmação. Contas sem senha local recebem erro de negócio.
- `GET /expenses/filter` envia `categoryIds=1,2`, `periodType`, datas ISO (`YYYY-MM-DD`),
  `minAmount`, `maxAmount`, `page`, `size` e `sort` quando informados. Recebe
  `{ data: { content, totalElements, totalPages, ... }, message }` e exige autenticação.
  `CUSTOM` exige ambas as datas. `TODAY`, `LAST_7_DAYS` (hoje e seis dias anteriores)
  e `CURRENT_MONTH` usam o calendário do servidor e substituem datas explícitas.
  Datas e valores são inclusivos; mínimo não pode superar máximo.

Os caminhos relativos e o cliente HTTP compartilhado permanecem os mesmos.
O interceptor existente adiciona o JWT e mantém o tratamento de sessão expirada.

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
