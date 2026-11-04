# Instruções para agentes

## Contexto do projeto

- Aplicativo mobile em Expo SDK 54, React Native `0.81.5`, React `19.1` e TypeScript `~5.9.2`.
- Use Node.js `20.20.2` (`.nvmrc`) e npm; no PowerShell do Windows, prefira `npm.cmd`.
- O código é organizado por domínio em `src/features`. Código compartilhado fica em `src/components`, `src/theme`, `src/navigation`, `src/services`, `src/storage`, `src/store`, `src/providers` e `src/utils`.
- O alias `@/` aponta para `src/`; preserve-o em imports novos.

## Arquitetura e implementação

- Mantenha regras de negócio, telas, hooks, serviços, schemas, tipos e estilos dentro da feature responsável. Só promova algo para `src/components` quando houver reutilização real entre features.
- Reutilize componentes existentes como `Button`, `Input`, `Card`, `Screen`, `Header`, `BottomSheet`, `Typography` e skeletons antes de criar variantes.
- Preserve o fluxo de rotas: `src/navigation` separa autenticação e área autenticada, com stacks e bottom tabs tipados.
- Use `src/services/api.ts` para chamadas HTTP e não replique a inclusão do token Bearer. Mantenha persistência de autenticação em `src/storage` e estado compartilhado em Zustand.
- Prefira mudanças incrementais e compatíveis com o padrão local. Evite duplicação, renomeações amplas e refatorações fora do escopo.
- Ao editar módulos antigos, preserve sua nomenclatura e organização; para código novo, use PascalCase em componentes, `useCamelCase` em hooks e tipos PascalCase.

## Tema, UI e responsividade

- Use `useTheme` e os tokens de `src/theme` (`colors`, `spacing`, `radius`, `shadows`, `typography`) em vez de valores visuais espalhados.
- Mantenha estilos próximos à tela/componente, normalmente em `styles.ts`, e considere os temas claro e escuro.
- Componentes interativos devem ter área de toque adequada, rótulos/feedback compreensíveis, contraste suficiente e estados de carregamento, erro, vazio e desabilitado.
- Prefira layouts flexíveis e componentes nativos que funcionem em telas pequenas e tablets; evite dimensões fixas sem necessidade.
- Evite renderizações e chamadas desnecessárias, listas sem otimização ou trabalho pesado durante renderização. Preserve skeletons e feedbacks já existentes quando aplicável.

## Formulários e estados

- Use React Hook Form com `zodResolver` e schemas Zod existentes; mantenha mensagens e regras de validação consistentes.
- Ao alterar um formulário, considere se ele serve para criação, edição ou ambos: valores iniciais, `reset` após carregamento, campos editáveis, permissões, feature flags e estados de loading/erro/sucesso.
- Submissões devem respeitar o hook/serviço da feature, evitar chamadas duplicadas e refletir alterações relevantes na store ou no armazenamento persistido.
- Mantenha estado local para controles da tela; use Zustand apenas para estado compartilhado, como autenticação e tema.

## Qualidade e verificação

- Não há scripts de testes, lint ou formatação definidos em `package.json`; não invente uma ferramenta sem necessidade. Valide manualmente os fluxos afetados no Expo quando possível.
- Antes de entregar, execute pelo menos `npm.cmd` com o comando aplicável e uma checagem TypeScript quando compatível. Registre falhas preexistentes separadamente.
- Teste visualmente Android/iOS ou web quando a mudança afetar layout, navegação, teclado, acessibilidade ou responsividade.
- Para mudanças de API/autenticação, verifique estados de sucesso, erro, sessão expirada e dados persistidos.

## Uso de contexto e tokens

- Investigue primeiro apenas arquivos diretamente relacionados à tarefa: `package.json`, configuração relevante, documentação da feature, tela, componentes, hook, serviço, schema e tipos afetados.
- Prefira `rg` para localizar símbolos e referências; não leia árvores inteiras nem repita buscas já concluídas.
- Consulte documentação existente em `docs/` antes de propor convenções novas. Evite criar documentação adicional para mudanças locais simples.

## Entrega

- Resuma arquivos e comportamento alterados, comandos/checagens executados e riscos ou limitações restantes.
- Informe explicitamente quando testes/lint não puderem ser executados ou quando houver falhas preexistentes.
- Não altere arquivos fora do escopo solicitado e preserve mudanças não relacionadas já presentes no working tree.
