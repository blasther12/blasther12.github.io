---
layout: post
title: "Sistemas distribuídos começam pelos trade-offs"
description: "Antes de escolher filas, eventos ou microsserviços, vale tornar explícito o problema que a distribuição precisa resolver."
date: 2026-08-21 09:00:00 -0300
tags:
  - arquitetura
  - sistemas-distribuidos
  - trade-offs
reading_time: 6
---

Distribuir um sistema pode aumentar sua capacidade de escala e permitir que diferentes partes evoluam de forma independente. Também cria novas formas de falhar. A rede passa a fazer parte do comportamento da aplicação, estados ficam temporariamente divergentes e operações que pareciam atômicas deixam de ser.

Por isso, a primeira pergunta não deveria ser “qual tecnologia vamos usar?”, mas **“qual problema justifica adicionar distribuição?”**

## Comece pelo contexto

Separar um sistema em serviços pode ser uma boa resposta quando existem limites de domínio claros, necessidades de escala distintas ou equipes que precisam evoluir partes do produto com autonomia. Sem essas condições, a divisão tende a transformar dependências locais em dependências de rede sem reduzir o acoplamento real.

Antes de desenhar componentes, procuro responder:

- Qual capacidade precisa evoluir de maneira independente?
- Onde estão os limites de consistência?
- Qual atraso é aceitável para o negócio?
- Quem será responsável por operar cada parte?
- Como saberemos que algo falhou?

Essas respostas orientam a arquitetura com mais precisão do que a escolha antecipada de um broker ou framework.

## Síncrono e assíncrono não são rivais

Chamadas síncronas são diretas e facilitam fluxos que exigem uma resposta imediata. Comunicação assíncrona absorve picos, reduz acoplamento temporal e permite reprocessamento. Em troca, exige lidar com duplicidade, ordenação, atraso e observabilidade do fluxo.

A decisão pode ser resumida assim:

> Use sincronismo quando o consumidor precisa da resposta agora. Use assincronismo quando o produtor precisa registrar uma intenção com segurança e seguir adiante.

Na prática, arquiteturas maduras costumam combinar os dois modelos. O importante é que a fronteira seja consciente.

## Idempotência deixa de ser detalhe

Em sistemas distribuídos, mensagens podem ser entregues mais de uma vez e requisições podem ser repetidas após um timeout. Se repetir uma operação produz efeitos extras, a confiabilidade do sistema depende de uma suposição frágil: entrega exatamente uma vez.

Projetar operações idempotentes — ou proteger os efeitos com chaves de idempotência, versionamento e restrições de banco — costuma ser mais seguro do que tentar impedir toda repetição.

## Observabilidade faz parte do desenho

Logs isolados raramente explicam um fluxo que atravessa vários serviços. É necessário conseguir acompanhar uma operação entre fronteiras por meio de correlação, métricas e traces.

Uma base útil inclui:

1. identificadores de correlação propagados entre serviços;
2. métricas orientadas ao comportamento do negócio;
3. traces para entender latência e dependências;
4. logs estruturados com contexto suficiente;
5. alertas associados a impacto, não apenas consumo de recurso.

Instrumentar depois significa descobrir tarde demais quais perguntas o sistema não consegue responder.

## Quando não distribuir

Um monólito modular pode ser a escolha mais evolutiva quando o domínio ainda está sendo descoberto, o time é pequeno ou a escala não exige isolamento operacional. Bons limites internos preservam a possibilidade de extração futura sem pagar antecipadamente o custo de uma arquitetura distribuída.

Distribuição não é um nível de maturidade. É uma ferramenta com benefícios e custos.

## A arquitetura como decisão explícita

Sistemas distribuídos começam pelos trade-offs porque não existe uma solução que maximize simultaneamente consistência, disponibilidade, simplicidade operacional, autonomia e velocidade de mudança.

O trabalho de arquitetura é tornar essas escolhas visíveis, conectar cada uma ao contexto e criar mecanismos para revisá-las quando o contexto mudar.
