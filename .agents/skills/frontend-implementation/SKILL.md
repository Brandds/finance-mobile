---
name: frontend-implementation
description: Implementar mudanças em componentes, hooks, telas e integrações deste app Expo/React Native com reutilização e escopo mínimo.
---

# Implementação frontend

Use quando a tarefa pedir uma nova tela, componente, hook, integração, fluxo de navegação ou alteração funcional no frontend.

## Instruções

- Leia somente os arquivos diretamente relacionados à mudança e consulte `package.json`, a configuração relevante e a documentação da feature quando necessário.
- Respeite a arquitetura por feature em `src/features`; use `src/components` apenas para componentes realmente compartilhados.
- Reutilize componentes, hooks, serviços, tipos, schemas e tokens de `src/theme` existentes antes de criar novos.
- Preserve o alias `@/`, as rotas tipadas em `src/navigation`, o cliente Axios de `src/services/api.ts` e as stores Zustand existentes.
- Faça alterações incrementais, compatíveis com o padrão local e limitadas ao escopo solicitado. Não faça refatorações oportunistas nem duplique lógica.
- Para UI, preserve estados de carregamento, erro e vazio; use layout flexível, acessibilidade básica, áreas de toque adequadas e suporte aos temas claro/escuro.
- Verifique o fluxo afetado com a checagem disponível e, quando aplicável, execução visual no Expo. Não instale dependências sem solicitação.

## Entrega

Resuma arquivos e comportamento alterados, verificações executadas e riscos ou limitações restantes.
