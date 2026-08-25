---
layout: post
title: "Observabilidade é uma propriedade do sistema"
description: "Ter logs, métricas e traces não basta. O que importa é conseguir responder perguntas quando o sistema se comporta de um jeito que ninguém esperava."
date: 2026-08-21 08:00:00 -0300
tags:
  - observabilidade
  - opentelemetry
  - confiabilidade
reading_time: 5
---

Instalar uma ferramenta de monitoramento não torna um sistema observável.

Parece óbvio quando escrito assim, mas é uma confusão comum. Colocamos dashboards, logs centralizados e tracing no ambiente e damos o assunto como resolvido. A diferença aparece no primeiro incidente em que alguém pergunta “isso está acontecendo com todo mundo ou só com um tipo de operação?” e ninguém consegue responder.

É aí que observabilidade deixa de ser uma lista de ferramentas.

## O teste acontece durante o incidente

Monitoramento é ótimo para perguntas que já conhecemos. A taxa de erro subiu? A fila aumentou? A latência passou do limite?

O problema é que incidentes têm o hábito desagradável de trazer perguntas que ninguém pensou em colocar no dashboard.

Por exemplo:

- o erro começou depois de uma versão específica?
- acontece só com um canal ou cliente?
- o tempo está sendo gasto no nosso serviço ou numa dependência?
- a mensagem chegou atrasada ou foi processada duas vezes?
- o fluxo falhou ou só ficou lento?

Se os sinais não carregam contexto suficiente, a investigação vira uma sequência de palpites.

## Logs, métricas e traces têm trabalhos diferentes

Eu prefiro pensar nos três sinais como peças diferentes da mesma investigação.

**Métricas** mostram que alguma coisa mudou. São boas para tendência, volume e alerta.

**Traces** mostram por onde uma operação passou e onde o tempo foi gasto. Em sistemas com várias dependências, isso economiza bastante adivinhação.

**Logs** ajudam quando precisamos olhar um evento específico com mais detalhe.

O ganho aparece quando eles se conectam. Um alerta aponta uma anomalia, o trace mostra onde ela acontece e o log traz o contexto que faltava. Sem correlação, você acaba com três ferramentas abertas e três histórias diferentes sobre o mesmo problema.

É uma das razões pelas quais gosto do OpenTelemetry. Além de evitar acoplamento desnecessário com um vendor, ele ajuda a criar uma forma comum de instrumentar serviços diferentes.

## Colocar tudo na telemetria também é um problema

Existe o extremo oposto: já que contexto ajuda, vamos mandar tudo.

Isso fica caro rápido e ainda cria risco de expor dados que nunca deveriam ter ido para uma plataforma de observabilidade.

Antes de adicionar um atributo, costumo pensar em algumas coisas: ele ajuda alguém a investigar ou segmentar impacto? A cardinalidade faz sentido? Tem dado pessoal ou segredo ali? Outros serviços usam o mesmo nome para a mesma coisa?

Uma regra simples ajuda bastante: se ninguém consegue explicar para que aquele campo serviria numa investigação, talvez ele não precise estar na telemetria.

## Infraestrutura saudável não significa produto saudável

CPU, memória e latência continuam importantes, mas elas contam só uma parte da história.

Um serviço pode responder rápido, consumir pouca memória e ainda falhar completamente naquilo que interessa para o usuário. Por isso, gosto de ter métricas que representem o fluxo de negócio junto das métricas técnicas.

Quantas operações terminaram? Quantas foram rejeitadas? Quantas ficaram presas? Quanto tempo o processo inteiro levou, e não apenas uma chamada HTTP?

Isso muda bastante uma investigação. Em vez de perguntar apenas “o serviço está no ar?”, começamos a perguntar “o sistema está conseguindo fazer o que deveria?”.

## Observabilidade melhora usando o sistema

É difícil acertar toda instrumentação no desenho inicial. Algumas das melhores melhorias aparecem depois de um incidente ou de uma investigação demorada.

Se uma pergunta importante levou duas horas para ser respondida, vale perguntar por que. Faltou um atributo? Um span? Uma métrica de negócio? O log existia, mas não tinha correlação?

Esse aprendizado deveria voltar para o código.

Para mim, é aí que observabilidade vira realmente parte do sistema. Não quando existem muitos dashboards, mas quando a aplicação foi construída de um jeito que permite entender o que ela está fazendo quando alguma coisa sai do roteiro.