---
name: form-validation
description: Criar ou ajustar formulários React Hook Form/Zod com regras condicionais, campos obrigatórios, fluxos de criação/edição e mensagens de erro consistentes.
---

# Validação de formulários

Use quando a tarefa alterar campos, regras de validação, submissão, mensagens, valores iniciais ou estados de um formulário.

## Instruções

- Localize o formulário, schema Zod, tipos, definição de fields, componente de campo e hook/serviço de submissão antes de editar.
- Preserve o padrão React Hook Form com `zodResolver`; mantenha tipos inferidos ou explícitos coerentes com o schema e com o payload da API.
- Modele obrigatoriedade, formato, limites e regras condicionais no schema quando forem regras de dados; trate visibilidade, permissões e feature flags na camada de UI sem perder a validação.
- Diferencie criação e edição: valores padrão, dados carregados, `reset`, campos imutáveis, permissões, carregamento, prevenção de duplo envio e retorno após sucesso.
- Mostre mensagens claras, próximas ao campo e compatíveis com o idioma e os componentes existentes; cubra erro de validação local e erro retornado pela API.
- Considere teclado, foco, acessibilidade, campos desabilitados e estados loading/sucesso/erro. Não remova validações existentes sem justificativa.
- Verifique casos válidos, inválidos, condicionais, criação e edição quando aplicável. Não instale bibliotecas nem reescreva formulários fora do escopo.

## Entrega

Liste regras alteradas, cenários verificados e limitações, incluindo qualquer diferença entre validação local e resposta do backend.
