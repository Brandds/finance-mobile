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

A configuração central em `src/constants/url_base_constants.ts` exige
`EXPO_PUBLIC_API_URL` em todas as plataformas. Não há URL padrão no código.
Copie `.env.example` para `.env.local` (ignorado pelo Git) e preencha a URL completa,
incluindo `/api/v1`. Nunca inclua credenciais: variáveis `EXPO_PUBLIC_*` ficam
visíveis no bundle. Um valor ausente ou inválido impede a inicialização.

### Desenvolvimento, homologação e produção

Selecione o ambiente fornecendo a URL correspondente antes de iniciar ou gerar o
bundle. Não use `NODE_ENV` para selecionar arquivos de ambiente. Uma variável
exportada na sessão tem prioridade sobre o arquivo `.env.local`.

```powershell
# Desenvolvimento: confirme a porta publicada da API; os endereços são exemplos.
$env:EXPO_PUBLIC_API_URL = "http://10.0.2.2:<PORTA_PUBLICADA>/api/v1"
npm.cmd run android

# Aparelho físico: mesma rede, IP LAN do computador e porta acessível no firewall.
$env:EXPO_PUBLIC_API_URL = "http://<IP_LAN>:<PORTA_PUBLICADA>/api/v1"
npm.cmd start -- --lan

# Homologação: substitua pelo endereço fornecido para esse ambiente.
$env:EXPO_PUBLIC_API_URL = "https://<HOST_HOMOLOGACAO>/api/v1"
npm.cmd start

# Produção: forneça a URL real no ambiente de build/exportação.
$env:EXPO_PUBLIC_API_URL = "https://<HOST_PRODUCAO>/api/v1"
```

Substitua os placeholders antes de executar; eles não são URLs válidas. Confirme
porta e host no deploy da finance-api, sem presumir `8082` ou `8083`. No emulador
iOS ou web local, use o endereço acessível à plataforma, por exemplo `localhost`
com a porta publicada. No Android Emulator, `10.0.2.2` acessa o computador host;
em aparelhos físicos é necessário IP LAN ou endereço público acessível.

A URL deve usar HTTP/HTTPS, hostname ou IPv4 válido, e terminar em `/api/v1`.
Credenciais, query e fragmento são rejeitados. Barras duplicadas no caminho e
barras finais são normalizadas. Use HTTPS em homologação e produção.
Reinicie o Expo e gere um novo bundle/update após mudar a variável; ela não é
uma configuração remota em tempo de execução. Builds devem receber a variável
pelo ambiente de CI/EAS utilizado, sem necessidade de editar arquivos TypeScript.

Na web, configure `APP_CORS_ALLOWED_ORIGINS` na finance-api com a origem exata do
Expo, incluindo a porta e sem `/api/v1`. O mobile não altera o CORS do backend.
O projeto não declara as dependências web `react-dom`, `react-native-web` e
`@expo/metro-runtime`; não foram adicionadas por esta mudança.

### Sessão e armazenamento seguro — Issue #5

No Android/iOS, o JWT fica no `expo-secure-store` (versão compatível com SDK 54),
sem biometria obrigatória. AsyncStorage guarda somente metadados da sessão e
perfil, sem token. A store Zustand mantém o token em memória para o interceptor
Bearer existente. Atualização de perfil preserva o token seguro.

A sessão legada `@finance:user` é validada e migrada na primeira restauração.
Sua cópia antiga só é removida depois de persistir o token e os metadados novos.
Como o formato legado não identifica o ambiente, a migração inicial associa essa
sessão à API configurada: faça a primeira execução no ambiente original ou saia
da conta antes de mudar a URL. Sessões novas só são restauradas na mesma URL;
a mudança de host, porta ou caminho exige novo login.

Logout limpa a memória imediatamente e tenta remover o token seguro e a sessão
legada. Um marcador no AsyncStorage impede restauração se a exclusão segura falhar.
Falhas são informadas pelo fluxo de logout. Se todos os mecanismos de armazenamento
falharem simultaneamente, não é possível garantir a remoção persistente; tente o
logout novamente antes de encerrar o aplicativo. Dados corrompidos não autenticam
o usuário; falhas de leitura encerram o loading e mantêm a tela de login.

Na web, a sessão existe somente em memória: recarregar a página exige novo login.
Tokens legados são removidos do AsyncStorage; não há fallback para localStorage.
Persistência web segura exigiria contrato próprio com a API (por exemplo cookies
HttpOnly), fora desta implementação. O SecureStore não garante preservação após
desinstalação; reinstalação não é critério de login persistente.

A API continua retornando `{ data: { token, user }, message }` em `POST /auth/login`.
Nenhum endpoint novo, refresh token ou revogação remota foi implementado. Erros
`401` com códigos de autenticação mantêm o encerramento de sessão existente.

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

## Notificações — Issue #8

A tela usa os contratos existentes da API, com o envelope `{ data, message }`:

- `GET /notifications?page=0&size=20`: lista paginada, ordenada pelo backend.
- `GET /notifications/unread-count`: contador real de não lidas.
- `PATCH /notifications/{id}/read`: persiste a leitura individual.
- `PATCH /notifications/read-all`: persiste a leitura de todas as notificações.

As chamadas usam o cliente autenticado compartilhado. O contador é consultado
novamente após as mutações; falhas exibem erro e permitem tentar novamente. A tela
recarrega ao ganhar foco, permite atualização manual e carregamento de mais páginas.
Tocar em uma notificação não lida marca sua leitura; não há navegação inferida pelo
título, mensagem ou tipo do alerta.

### Dependência da API para destinos relacionados

O [contrato atual](https://github.com/Brandds/finance-api/blob/main/docs/notifications.md)
oferece lista, contador e leitura, sem necessidade de novos endpoints para essas
operações. Porém, o payload contém apenas `id`, `type`, `title`, `message`, `read`,
`createdAt` e `readAt`: não identifica um recurso relacionado.

Para atender ao critério de navegação da
[Issue mobile #8](https://github.com/Brandds/finance-mobile/issues/8), é necessário
definir e implementar na API um destino opcional estruturado (tipo de recurso e
identificador), propagado pelos eventos, persistência e resposta. O contrato ainda
precisa ser acordado; esses campos não são consumidos pelo aplicativo atualmente.
A API deve preservar autorização ao acessar o recurso. Depois disso, o mobile
precisará mapear os destinos suportados para rotas tipadas e tratar recursos
removidos, inacessíveis ou tipos desconhecidos. Alertas sem recurso devem continuar
permitindo leitura sem navegação. Esse critério permanece pendente.

## Pendências de autenticação — Issue #9

A [Issue mobile #9](https://github.com/Brandds/finance-mobile/issues/9) está
parcialmente implementada. O cadastro direciona para uma tela de orientação para
confirmar o e-mail pelo link recebido, com retorno ao login. Essa tela não confirma
o e-mail por conta própria e não oferece reenvio.

Na consulta à branch principal da API, foi encontrado somente o contrato
`GET /auth/verify-email?token=...` para confirmação; o controller Google não
expunha operações. Não foram encontrados contratos de reenvio ou recuperação e
redefinição de senha. As dependências estão registradas na
[Issue finance-api #16](https://github.com/Brandds/finance-api/issues/16).

Para concluir a integração, a API precisa disponibilizar e documentar:

- Reenvio de verificação, incluindo limites e tratamento de conta já confirmada.
- Solicitação de recuperação e redefinição por token, incluindo validade, uso
  único, erros, política de senha e invalidação de sessões.
- Google OAuth compatível com Expo, com validação da credencial e retorno de
  token e usuário para a sessão do aplicativo.
- Métodos, caminhos, payloads, respostas, configuração e URLs de retorno dos
  fluxos de e-mail e OAuth.

Recuperação de senha, Google e Apple foram removidos da interface de login por
não terem integração funcional. Não foram criados endpoints presumidos nem
sessões simuladas. Após a entrega dos contratos, ainda será necessário implementar
reenvio, recuperação/redefinição e Google no mobile e validar sucesso, erro,
tokens expirados, navegação e persistência. Apple depende de suporte próprio.

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
