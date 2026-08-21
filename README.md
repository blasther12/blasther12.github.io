# Rafael Oliveira — Portfolio & Blog

Código-fonte de [blasther12.github.io](https://blasther12.github.io), meu espaço para compartilhar projetos e escrever sobre arquitetura de software, sistemas distribuídos, observabilidade, cloud, developer experience e IA.

## Publicar um artigo

Crie um arquivo em `_posts` seguindo o formato:

```text
_posts/AAAA-MM-DD-titulo-do-artigo.md
```

Use este cabeçalho:

```yaml
---
layout: post
title: "Título do artigo"
description: "Resumo curto para listagens e mecanismos de busca."
date: 2026-08-21 09:00:00 -0300
tags:
  - arquitetura
  - engenharia
reading_time: 5
---
```

Escreva o conteúdo em Markdown abaixo do cabeçalho. Ao enviar a alteração para a branch `main`, o GitHub Actions constrói e publica o site automaticamente.

## Executar localmente

Pré-requisitos: Ruby e Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Acesse `http://localhost:4000`.

## Estrutura

- `_posts/` — artigos em Markdown
- `_layouts/` — layouts do site e dos artigos
- `_includes/` — navegação e rodapé
- `assets/css/` — sistema visual
- `assets/js/` — interações
- `index.html` — página inicial
- `sobre.md` — apresentação e trajetória
- `projetos.md` — projetos selecionados

## Licença

Conteúdo autoral © Rafael Oliveira. O código do site pode ser reutilizado com atribuição.
