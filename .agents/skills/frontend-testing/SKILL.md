---
name: frontend-testing
description: Planejar e executar testes essenciais de comportamento para este frontend usando somente ferramentas já compatíveis e disponíveis no projeto.
---

# Testes frontend

Use quando a tarefa pedir testes, cobertura, verificação automatizada ou proteção contra regressões em componentes e fluxos.

## Instruções

- Confira primeiro `package.json` e a configuração existente; este projeto não declara atualmente scripts de testes, lint ou biblioteca de testing.
- Não instale dependências nem crie uma infraestrutura de testes nova sem solicitação explícita. Se não houver ferramenta disponível, faça verificação manual objetiva e informe a limitação.
- Priorize comportamento observável: renderização por estado, interação do usuário, validação, submissão, loading/erro, navegação, persistência e atualização de store.
- Cubra o caminho feliz e os limites que podem regredir; evite testar detalhes internos, estilos exatos ou implementação que não seja contrato do componente.
- Para integrações HTTP, prefira verificar estados e tratamento de erro sem depender de rede real quando houver infraestrutura compatível.
- Mantenha testes pequenos, determinísticos, isolados e coerentes com a organização por feature. Não altere código-fonte de produção apenas para facilitar um teste sem necessidade.
- Execute as verificações aplicáveis e relate comandos, resultado, cobertura relevante e falhas preexistentes.

## Entrega

Resuma cenários cobertos, comandos executados e riscos que permanecem sem teste automatizado ou sem validação visual.
