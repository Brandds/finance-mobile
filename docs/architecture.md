# Arquitetura do projeto

## Visão geral

O aplicativo usa Expo com React Native e TypeScript. A organização principal é orientada a funcionalidades: cada domínio de negócio fica em `src/features/`, enquanto recursos reutilizáveis ficam em diretórios compartilhados de `src/`.

```text
src/
├── components/   componentes reutilizáveis de interface
├── constants/    constantes compartilhadas
├── contexts/     contextos React
├── features/     funcionalidades de negócio
├── navigation/   rotas e navegadores
├── providers/    providers globais
├── services/     clientes e integrações externas
├── storage/      persistência local
├── store/        estado global
├── theme/        tema, cores, espaçamentos e tipografia
├── types/        tipos compartilhados
└── utils/        utilitários gerais
```

## Principais camadas

### `src/features`

Contém os domínios da aplicação, como autenticação, categorias, despesas, dashboard, perfil, notificações e resumo mensal. Uma feature pode conter telas, componentes específicos, hooks, serviços, schemas, tipos e estilos.

### `src/components`

Contém componentes reutilizáveis entre diferentes features, como botões, inputs, cards, headers, skeletons e componentes de layout.

### `src/navigation`

Define a navegação da aplicação. `auth.routes.tsx` atende usuários não autenticados e `app.routes.tsx` atende usuários autenticados. As tabs e opções de navegação ficam organizadas em subdiretórios próprios.

### `src/services`

Centraliza integrações externas. `src/services/api.ts` cria o cliente Axios, define a URL base, adiciona o token Bearer nas requisições e encerra a sessão em erros de autenticação reconhecidos.

### `src/store`

Mantém estado global com stores independentes, incluindo autenticação e tema. A store de autenticação também é usada para carregar a sessão persistida antes de renderizar as rotas.

### `src/storage`

Encapsula persistência local, como os dados de autenticação usados para restaurar a sessão do usuário.

### `src/theme`

Define o sistema visual da aplicação: cores claras e escuras, espaçamento, radius, sombras, tipografia, provider e hooks de tema.

### `src/providers` e `src/contexts`

Disponibilizam comportamentos globais para a árvore React, como notificações toast e contextos compartilhados.

## Fluxo de autenticação e navegação

1. O ponto de entrada renderiza o componente de rotas.
2. A store de autenticação carrega a sessão persistida.
3. Enquanto o carregamento está ativo, a navegação não é exibida.
4. Usuários autenticados recebem `AppRoutes`.
5. Usuários não autenticados recebem `AuthRoutes`.
6. O tema e o provider de toast envolvem a navegação.

## Fluxo de chamadas HTTP

1. Uma feature chama seu serviço específico.
2. O serviço utiliza o cliente compartilhado `api`.
3. O Axios usa `URL_BASE` como endereço base.
4. O interceptor de requisição adiciona o token da store de autenticação.
5. O interceptor de resposta encerra a sessão quando a API retorna um erro de autenticação reconhecido.

## Alias de imports

O projeto utiliza o alias `@/` para imports a partir da raiz de `src`, por exemplo:

```ts
import { URL_BASE } from "@/constants/url_base_constants";
```

## Domínios atuais

- `auth`: login, cadastro, logout e autenticação;
- `category`: categorias e busca de categorias;
- `dashboard`: visão geral;
- `expense`: criação, consulta, filtros e detalhes de despesas;
- `home`: tela inicial e seções de resumo;
- `monthly-summary`: resumo mensal por categoria;
- `notification`: notificações;
- `profile`: perfil, dados pessoais e segurança;
- `changePassword`: alteração de senha.
