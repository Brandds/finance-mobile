---
name: frontend-debugging
description: Diagnosticar bugs em telas e fluxos Expo/React Native rastreando estado, props, efeitos, requisições, navegação e flags até a causa raiz.
---

# Debugging frontend

Use quando houver bug visual, comportamento inconsistente, falha de navegação, dados incorretos, erro de formulário ou problema de integração.

## Instruções

- Reproduza ou delimite o sintoma antes de editar; registre tela, ação, estado esperado e estado observado.
- Siga o fluxo de dados de ponta a ponta: props, estado local, selectors/stores Zustand, efeitos, reset de formulário, navegação, serviço Axios, resposta da API, persistência e feature flags.
- Use `rg` para localizar o símbolo e suas referências. Leia apenas a cadeia causal relevante, evitando varreduras extensas ou buscas repetidas.
- Diferencie causas de renderização, dependências de `useEffect`, valores iniciais, concorrência/loading, permissões, sessão expirada, transformação de resposta e layout responsivo.
- Faça a menor correção que elimina a causa raiz e preserve contratos públicos, comportamento de outras features e estados de erro.
- Verifique o cenário corrigido e pelo menos um caminho adjacente com risco de regressão. Não esconda o problema com valores fixos ou logs permanentes.

## Entrega

Explique causa raiz, correção, evidência da verificação e qualquer cenário não validado. Separe falhas preexistentes das introduzidas pela mudança.
