---
layout: post
title: "Sistemas distribuídos começam pelos trade-offs"
description: "Antes de colocar filas, eventos ou novos serviços no desenho, vale entender qual problema realmente precisa de distribuição."
date: 2026-08-21 09:00:00 -0300
tags:
  - arquitetura
  - sistemas-distribuidos
  - trade-offs
reading_time: 6
---

Distribuir um sistema resolve alguns problemas e cria outros na mesma hora.

Você ganha possibilidades de escala, isolamento e evolução independente. Em troca, a rede passa a fazer parte do comportamento da aplicação. Um timeout deixa de significar necessariamente que nada aconteceu. Duas partes do sistema podem enxergar estados diferentes por algum tempo. Uma operação que era uma transação local pode virar uma sequência de passos com retry, compensação e observabilidade no meio.

Por isso, eu tento evitar começar uma discussão de arquitetura pela tecnologia.

Antes de perguntar “Kafka ou SQS?”, a pergunta mais útil costuma ser: **por que esse fluxo precisa ser distribuído?**

## Separar serviços não reduz acoplamento automaticamente

Um sistema pode ter dez serviços e continuar extremamente acoplado.

Se toda mudança em um serviço exige alterar outros três, coordenar deploy e sincronizar regras de negócio, a fronteira existe no repositório e na infraestrutura, mas não necessariamente no domínio.

Separação costuma fazer mais sentido quando há uma razão concreta: uma parte precisa escalar de forma diferente, existe um limite de domínio razoavelmente claro, o ciclo de mudança é independente ou o isolamento operacional realmente traz benefício.

Sem isso, é fácil trocar uma chamada de função por uma chamada de rede e chamar o resultado de arquitetura.

Antes de separar alguma coisa, gosto de entender quem é dono daquela capacidade, qual consistência o negócio exige, quanto atraso é aceitável e o que acontece quando uma das partes fica indisponível.

Essas respostas dizem mais sobre o desenho do que a escolha do broker.

## Síncrono e assíncrono resolvem problemas diferentes

Não vejo muito sentido em tratar sincronismo e assincronismo como rivais.

Uma chamada síncrona é ótima quando quem chamou realmente precisa da resposta agora. É simples de entender e deixa o fluxo explícito.

Uma mensagem assíncrona faz sentido quando o produtor precisa registrar uma intenção e seguir adiante, quando queremos absorver picos ou quando consumidores diferentes podem reagir ao mesmo evento sem bloquear o fluxo principal.

O custo vem junto: duplicidade, atraso, ordenação, reprocessamento e mais dificuldade para enxergar o caminho completo.

Um exemplo simples: criar um pedido e validar uma regra necessária para responder ao cliente pode pedir sincronismo. Disparar comunicação, atualizar uma projeção ou alimentar outro processo pode funcionar muito melhor de forma assíncrona.

Não é uma regra universal. É só um lembrete de que a escolha depende do que o fluxo precisa garantir.

## Timeout não é resposta

Esse é um detalhe que costuma parecer pequeno até causar problema em produção.

Imagine que um serviço envia uma requisição para outro criar uma operação. O segundo serviço processa tudo corretamente, mas a resposta se perde e o primeiro recebe timeout.

O que ele faz?

Se repetir a chamada, pode executar o efeito duas vezes. Se não repetir, pode deixar o usuário sem resposta para algo que já aconteceu.

É aí que idempotência deixa de ser uma palavra de arquitetura e vira uma necessidade prática.

Chaves de idempotência, restrições no banco, versionamento ou algum mecanismo equivalente normalmente são mais confiáveis do que assumir que uma operação será executada exatamente uma vez.

Em mensageria, o raciocínio é parecido. Duplicidade não é uma exceção exótica que podemos ignorar. É algo que o consumidor precisa saber tratar.

## Se o fluxo atravessa serviços, a investigação também atravessa

Outro custo da distribuição aparece quando alguma coisa quebra.

Num processo que passa por cinco serviços, olhar o log de cada um separadamente é uma ótima maneira de perder tempo.

Correlação, traces e métricas do fluxo ajudam a reconstruir a história: onde começou, por onde passou, quanto demorou e em qual ponto desviou do esperado.

Isso precisa entrar cedo no desenho. Se a primeira vez em que pensamos em correlação é durante um incidente, já estamos atrasados.

Também gosto de ter métricas do resultado do processo, não apenas dos recursos de cada serviço. Um cluster pode estar saudável enquanto uma fila de negócio acumula operações há quarenta minutos.

## Às vezes um monólito é a escolha mais simples

Existe uma ansiedade parecida com a de escolher tecnologia “moderna”: a sensação de que um sistema sério precisa ser distribuído.

Não precisa.

Se o domínio ainda está mudando bastante, o time é pequeno e não existe necessidade real de isolamento operacional ou escala independente, um monólito modular pode dar muito menos trabalho.

Fronteiras internas bem definidas ainda permitem separar partes no futuro. A diferença é que você não paga desde o primeiro dia por service discovery, rede, tracing distribuído, contratos remotos, retries e todos os outros detalhes que vêm no pacote.

Distribuição não é prêmio por maturidade. É custo que precisa comprar alguma coisa em troca.

## O desenho pode mudar depois

Arquitetura não precisa acertar o formato final do sistema no primeiro desenho.

Contexto muda. Volume muda. Times mudam. Uma fronteira que parecia boa pode se mostrar ruim depois de alguns meses de operação.

O mais importante, para mim, é conseguir explicar por que uma escolha foi feita e quais sinais fariam a gente revisá-la.

Se ninguém sabe responder isso, o problema provavelmente apareceu antes de Kafka, SQS, REST ou gRPC entrarem na conversa.