# Convenções de desenvolvimento

## Organização por feature

Código específico de um domínio deve permanecer dentro de `src/features/<feature>`. Evite colocar uma implementação de negócio em `src/components` apenas porque ela renderiza uma interface.

Use diretórios internos conforme a responsabilidade:

```text
feature/
├── components/   componentes usados somente pela feature
├── hooks/        lógica reutilizável da feature
├── screens/      telas principais
├── services/     chamadas da API do domínio
├── styles/       estilos específicos
├── types/        tipos do domínio
└── schema/       validações de formulários
```

Nem toda feature precisa ter todos esses diretórios. Crie apenas os necessários.

## Componentes compartilhados

Coloque em `src/components` somente componentes reutilizáveis por duas ou mais áreas da aplicação. Mantenha a implementação, os tipos e os estilos próximos ao componente sempre que possível.

Exemplos existentes incluem `Button`, `Input`, `Card`, `Screen`, `Header`, `BottomSheet` e componentes de skeleton.

## Telas, hooks e serviços

- **Telas:** coordenam layout, navegação e composição da feature.
- **Componentes:** cuidam da apresentação e das interações locais.
- **Hooks:** encapsulam lógica reutilizável, carregamento e ações do domínio.
- **Serviços:** encapsulam chamadas HTTP e transformação relacionada à API.
- **Schemas:** validam dados de formulários antes do envio.
- **Stores:** devem ser usadas para estado global, não para valores temporários de uma única tela.

## Tipos e estilos

Prefira tipos próximos da responsabilidade que representam. Tipos de uma feature ficam em sua própria pasta `types`; tipos amplamente compartilhados podem ficar em `src/types` ou `src/shared/types`.

Estilos específicos devem permanecer próximos à tela ou componente. Valores visuais recorrentes devem ser extraídos para `src/theme`.

## Nomenclatura

O projeto possui padrões históricos mistos, portanto novas contribuições devem seguir estas regras:

- componentes React: `PascalCase`;
- hooks: prefixo `use`, em `camelCase`;
- funções e variáveis: `camelCase`;
- tipos e interfaces: `PascalCase`;
- arquivos de estilos: usar `styles.ts` quando o arquivo pertence diretamente a um componente;
- telas: usar nomes terminados em `Screen` quando representarem uma tela principal;
- constantes: nomes descritivos em `camelCase` ou `UPPER_SNAKE_CASE` conforme o padrão do módulo.

Ao editar um módulo existente, preserve o padrão local para evitar mudanças de nomenclatura sem necessidade.

## Imports

Use o alias `@/` para importar a partir de `src`:

```ts
import { useAuthStore } from "@/store/auth/auth.store";
```

Evite cadeias extensas de imports relativos quando o alias tornar a dependência mais clara.

## Adicionando uma nova tela

1. Identifique a feature responsável.
2. Crie a tela dentro de `src/features/<feature>/screens` ou no diretório equivalente já usado pela feature.
3. Separe componentes específicos da tela em `components`.
4. Crie hooks, schemas, tipos e serviços apenas se a tela precisar deles.
5. Registre a tela no navegador apropriado em `src/navigation`.
6. Reutilize componentes e tokens de tema existentes antes de criar novos.

## Adicionando uma nova feature

1. Crie `src/features/<feature>` com o menor conjunto de subdiretórios necessário.
2. Mantenha regras de negócio e serviços dentro da feature.
3. Promova um componente para `src/components` somente quando houver reutilização real entre features.
4. Adicione tipos e validações próximos ao domínio.
5. Conecte a feature à navegação ou à tela consumidora.

## Estado e API

- Use a store global para autenticação, tema e outros estados compartilhados.
- Use estado local para controles exclusivos de uma tela ou componente.
- Utilize o cliente Axios compartilhado em `src/services/api.ts`.
- Não duplique a lógica de inclusão do token Bearer em serviços individuais.
