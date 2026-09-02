# Manual global de conteúdo

Este documento é a referência editorial para os três espaços publicados em `blasther12.github.io`:

- **Blog** — artigos e ensaios sobre engenharia, tecnologia e trabalho;
- **Cliofera** — formação autodirigida em História;
- **Alexandria** — biblioteca temática de engenharia, sistemas, cloud, dados e IA.

A regra geral é simples: **conteúdo novo precisa ser encontrável, verificável, revisável e conectado ao restante do acervo**.

---

## 1. Status editorial comum

Todo conteúdo relevante deve ter um estado editorial:

- `draft` — rascunho em construção;
- `reviewed` — estrutura, referências e coerência revisadas;
- `verified` — referências conferidas e conteúdo tecnicamente/historiograficamente validado.

Quando o formato permitir, registre também:

```yaml
status: reviewed
last_reviewed: 2026-09-02
```

Conteúdos técnicos sujeitos a mudanças rápidas, como Kubernetes, OpenTelemetry, MCP, APIs de IA e cloud, devem ser revisados com mais frequência do que textos conceituais estáveis.

---

# Blog

## 2. Adicionar um artigo

Crie:

```text
_posts/AAAA-MM-DD-slug-do-artigo.md
```

Front matter recomendado:

```yaml
---
layout: post
title: "Título do artigo"
description: "Resumo curto e específico."
date: 2026-09-02 09:00:00 -0300
tags:
  - arquitetura
  - engenharia
reading_time: 8
status: reviewed
last_reviewed: 2026-09-02
---
```

### Estrutura editorial recomendada

1. problema ou pergunta real;
2. contexto suficiente para entender por que importa;
3. argumento principal;
4. exemplos ou evidências;
5. contrapontos e limites;
6. conclusão sem repetir mecanicamente o texto;
7. referências quando houver afirmações técnicas, históricas ou quantitativas.

### Antes do merge

- conferir título e descrição;
- evitar links quebrados;
- testar em mobile;
- verificar se imagens têm texto alternativo;
- evitar imagens sem origem/licença conhecida;
- marcar `last_reviewed`.

---

# Cliofera

## 3. Adicionar uma disciplina

Uma disciplina precisa aparecer em duas camadas:

1. **catálogo curricular**;
2. **conteúdo acadêmico detalhado**.

O catálogo principal e as extensões ficam em `docs/data.json` e arquivos `docs/extra-courses*.json`.

Exemplo mínimo:

```json
{
  "id": "historia-exemplo",
  "title": "História do Exemplo",
  "year": 2,
  "semester": 4,
  "area": "Exemplo",
  "summary": "Recorte, período, problemas e escala da disciplina.",
  "modules": ["Tema 1", "Tema 2", "Tema 3"],
  "readings": ["Autor — Obra"],
  "debates": []
}
```

O conteúdo aprofundado fica em `docs/content/*.json`.

Cada disciplina deve possuir:

- introdução;
- objetivos;
- no mínimo cinco aulas;
- explicação por aula;
- conceitos-chave;
- leitura orientada;
- perguntas;
- exercício;
- guia bibliográfico;
- projeto final;
- literatura quando pertinente;
- relações com outras disciplinas;
- status editorial e data de revisão.

## 4. Adicionar uma aula

Uma aula não deve ser apenas um título. Estrutura recomendada:

```json
{
  "title": "Título da aula",
  "explanation": [
    "Parágrafo explicativo 1.",
    "Parágrafo explicativo 2."
  ],
  "concepts": ["conceito A", "conceito B"],
  "reading": {
    "work": "Autor — Obra",
    "focus": "O que observar na leitura.",
    "why": "Por que essa leitura ajuda nesta aula."
  },
  "questions": ["Pergunta historiográfica?"],
  "exercise": "Produção ou análise esperada."
}
```

### Regra historiográfica

Sempre distinguir:

- fonte primária;
- historiografia;
- literatura/representação;
- hipótese;
- opinião.

Uma fonte deve ser apresentada com contexto de produção, autoria, público, finalidade, silêncios e limites.

## 5. Adicionar relações e caminhos

Quando uma disciplina for criada ou alterada, revise:

- pré-requisitos;
- disciplinas relacionadas;
- cronologia mestra;
- eixos transversais;
- trilhas de estudo;
- debates que dependem daquele conteúdo.

Não criar uma disciplina isolada como uma ilha.

---

# Alexandria

## 6. Adicionar um tema

O catálogo fica em `docs/data.json`.

Exemplo:

```json
{
  "id": "tema-exemplo",
  "title": "Tema Exemplo",
  "category": "Categoria",
  "summary": "O problema técnico que esse tema ajuda a compreender.",
  "source": "caminho/do/codex.md",
  "focus": [
    "Tópico aprofundado 1",
    "Tópico aprofundado 2"
  ],
  "decisions": [
    "Trade-off que precisa ser justificado."
  ],
  "labs": [
    "Experimento reproduzível."
  ],
  "references": [
    "Documentação oficial",
    "Livro ou paper"
  ]
}
```

Um tema deve possuir no mínimo:

- oito tópicos;
- quatro decisões/trade-offs;
- quatro laboratórios;
- quatro referências;
- um Codex fonte.

## 7. Adicionar ou aprofundar um tópico

Um tópico precisa responder:

1. **o que é**;
2. **como funciona internamente**;
3. **por que importa**;
4. **como falha**;
5. **como observar/medir**;
6. **qual decisão técnica está associada**;
7. **qual laboratório demonstra o mecanismo**;
8. **onde continuar estudando**.

Tópicos centrais podem receber perfis específicos em `docs/assets/chapters-v2.js` com:

- internals próprios;
- diagrama;
- exemplo de código;
- failure modes específicos.

## 8. Laboratórios

Laboratórios reproduzíveis devem ficar em `labs/` sempre que possível.

Estrutura recomendada:

```text
labs/<tema>/<lab>/
├── README.md
├── docker-compose.yml   # quando necessário
├── src/                 # implementação mínima
├── scripts/             # carga, falha, replay etc.
└── expected/            # evidências esperadas
```

O README do lab precisa descrever:

- objetivo;
- pré-requisitos;
- como executar;
- como provocar a falha;
- o que observar;
- como recuperar;
- perguntas para análise.

Um laboratório bom não prova apenas que algo funciona. Ele também permite **quebrar e recuperar**.

## 9. Referências

Prioridade:

1. documentação oficial;
2. especificação/RFC;
3. paper original ou relevante;
4. livro de referência;
5. artigo técnico de alta qualidade;
6. vídeo/aula apenas quando acrescentar algo que texto/diagrama não entrega bem.

Evitar transformar a bibliografia em lista sem propósito. Quando possível, registre por que ler e que seção consultar.

---

# Portal principal

## 10. Adicionar um novo espaço

Inclua em `spaces.json`:

```json
{
  "id": "novo-espaco",
  "name": "Novo Espaço",
  "category": "Categoria",
  "description": "Descrição curta.",
  "href": "https://exemplo.com/",
  "action": "Abrir",
  "iconImage": "/assets/icons/novo.svg",
  "accent": "green",
  "tags": ["Tema A", "Tema B"]
}
```

O portal deve continuar funcionando como **hub**, não como catálogo codificado no HTML.

---

# Checklist global de publicação

Antes de publicar qualquer conteúdo novo:

- [ ] o título é claro e específico;
- [ ] o conteúdo está conectado a algo já existente;
- [ ] referências importantes foram conferidas;
- [ ] links internos existem;
- [ ] imagens têm origem e licença identificáveis;
- [ ] o conteúdo funciona em mobile;
- [ ] não há informação duplicada desnecessariamente;
- [ ] o status editorial foi definido;
- [ ] `last_reviewed` foi atualizado;
- [ ] o CI passou;
- [ ] a versão publicada foi aberta pelo menos uma vez após o deploy.

## Filosofia comum

**Blog:** argumente.

**Cliofera:** investigue historicamente.

**Alexandria:** compreenda o mecanismo e prove com evidência.

O objetivo não é acumular páginas. É construir um acervo no qual cada nova peça melhora a capacidade de navegar, aprender, comparar e produzir algo próprio.
