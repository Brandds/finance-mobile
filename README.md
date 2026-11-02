# finance-mobile

Aplicativo mobile de controle financeiro construído com Expo, React Native e TypeScript.

## Início rápido

### Requisitos

- Node.js `20.20.2`, conforme o arquivo `.nvmrc`;
- Node.js `20.x` e npm `10.x`, conforme o `package.json`;
- npm disponível no PATH;
- Expo CLI executado pelos scripts do projeto.

### Instalação

No PowerShell do Windows, prefira `npm.cmd` caso a política de execução bloqueie `npm.ps1`:

```powershell
npm.cmd install
```

### Executar o projeto

```powershell
npm.cmd start
```

Comandos específicos:

```powershell
npm.cmd run android
npm.cmd run ios
npm.cmd run web
```

Consulte o [guia de configuração](docs/setup.md) para configurar o Node.js, resolver problemas de PATH e corrigir bloqueios do PowerShell.

## Documentação

- [Configuração e execução](docs/setup.md)
- [Arquitetura do projeto](docs/architecture.md)
- [Convenções de desenvolvimento](docs/conventions.md)

## Estrutura resumida

O código principal fica em `src/` e é organizado por funcionalidades de negócio em `src/features/`, com componentes, navegação, serviços, estado e tema compartilhados.

Consulte a [visão geral da arquitetura](docs/architecture.md) para entender as responsabilidades de cada diretório.

## Documentação futura

Ainda devem ser formalizados em documentos específicos:

- estratégia e cobertura de testes;
- pipeline de CI/CD;
- variáveis de ambiente por ambiente;
- processo de build, publicação e release;
- observabilidade e tratamento de erros em produção.
