# Rafael Oliveira — Portal, Portfolio & Blog

Código-fonte de [blasther12.github.io](https://blasther12.github.io), que agora funciona como um **portal de entrada** para dois espaços principais:

- **Blog / Portfólio**: [blasther12.github.io/blog/](https://blasther12.github.io/blog/), com projetos e textos sobre arquitetura de software, sistemas distribuídos, observabilidade, cloud, developer experience e IA.
- **Cliofera**: [blasther12.github.io/cliofera/](https://blasther12.github.io/cliofera/), uma faculdade livre e autodirigida de História.

As URLs existentes de artigos, projetos e páginas do blog continuam preservadas, como `/artigos/...`, `/projetos/` e `/sobre/`.

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

Acesse `http://localhost:4000` para o portal e `http://localhost:4000/blog/` para o blog.

## Estrutura

- `index.html` — portal de escolha entre Blog e Cliofera
- `blog/index.html` — homepage do blog e portfólio
- `_posts/` — artigos em Markdown
- `_layouts/` — layouts do site e dos artigos
- `_includes/` — navegação e rodapé
- `assets/css/` — sistema visual
- `assets/js/` — interações
- `sobre.md` — apresentação e trajetória
- `projetos.md` — projetos selecionados

## Licença

Conteúdo autoral © Rafael Oliveira. O código do site pode ser reutilizado com atribuição.
