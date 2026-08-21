---
layout: post
title: "Observabilidade é uma propriedade do sistema"
description: "Logs, métricas e traces só geram valor quando ajudam a formular e responder perguntas sobre o comportamento real do software."
date: 2026-08-21 08:00:00 -0300
tags:
  - observabilidade
  - opentelemetry
  - confiabilidade
reading_time: 5
---

Adicionar uma ferramenta de monitoramento não torna um sistema observável. A ferramenta coleta sinais; a observabilidade nasce quando o software produz contexto suficiente para que alguém consiga entender estados que não foram previstos antecipadamente.

Essa diferença parece semântica, mas muda a forma como instrumentamos e operamos aplicações.

## Monitorar confirma; observar investiga

Monitoramento responde perguntas conhecidas: a taxa de erro passou do limite? A fila está crescendo? O tempo de resposta aumentou?

Observabilidade também precisa apoiar perguntas que surgem durante o incidente:

- Quais clientes foram afetados?
- Em que etapa o fluxo ficou mais lento?
- A falha está associada a uma versão específica?
- Existe relação com uma dependência externa?
- O problema acontece apenas em determinada combinação de atributos?

Para isso, cada sinal precisa carregar contexto e manter relações com os demais.

## Os três sinais precisam conversar

Logs, métricas e traces cumprem papéis diferentes:

- **Métricas** mostram tendências e ajudam a detectar alterações de comportamento.
- **Traces** revelam o caminho de uma operação e onde o tempo foi gasto.
- **Logs** registram detalhes relevantes de eventos específicos.

Separados, eles produzem pistas. Correlacionados por trace IDs, atributos consistentes e convenções compartilhadas, produzem uma narrativa operacional.

O OpenTelemetry é valioso justamente por criar uma linguagem comum de instrumentação e reduzir o acoplamento entre a aplicação e uma ferramenta específica.

## Contexto com responsabilidade

Mais dados não significam necessariamente mais entendimento. Instrumentação sem critérios aumenta custo, ruído e risco de exposição de informações sensíveis.

Algumas perguntas ajudam a selecionar bons atributos:

1. Este dado ajuda a segmentar impacto ou investigar uma hipótese?
2. A cardinalidade é compatível com o tipo de sinal?
3. Existe informação pessoal, segredo ou payload sensível?
4. O atributo segue a mesma convenção nos diferentes serviços?
5. Alguém sabe que decisão tomará quando este sinal mudar?

A telemetria deve ser intencional como qualquer outra interface do sistema.

## Métricas técnicas e métricas de produto

CPU, memória e latência são importantes, mas nem sempre descrevem impacto. Um serviço pode estar saudável do ponto de vista da infraestrutura e ainda assim falhar em concluir uma operação central do negócio.

Por isso, gosto de conectar sinais técnicos a eventos de produto: processamentos concluídos, operações rejeitadas, itens atrasados, tempo de ciclo e volume por resultado. Essa camada aproxima engenharia e negócio durante a análise de incidentes.

## O ciclo de melhoria

Observabilidade funciona melhor como um ciclo:

1. instrumentar os fluxos mais importantes;
2. operar e registrar perguntas difíceis de responder;
3. melhorar atributos, spans e métricas;
4. revisar alertas ruidosos ou sem ação;
5. incorporar o aprendizado ao desenho do sistema.

O objetivo não é coletar tudo. É reduzir o tempo entre perceber um comportamento inesperado, compreendê-lo e agir com segurança.

Quando a observabilidade é tratada como propriedade do sistema, confiabilidade deixa de ser apenas reação a incidentes e passa a influenciar a maneira como o software é construído.
