---
layout: default
title: Projetos
description: Estudos de caso e projetos selecionados de Rafael Oliveira.
permalink: /projetos/
---
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Projetos</span>
    <h1>Decisões de engenharia transformadas em sistemas.</h1>
    <p>Mais do que stacks, estes projetos exploram domínio, arquitetura, trade-offs, qualidade e evolução de software.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="case-study-grid">
      <article class="case-study">
        <div class="case-study__head">
          <div>
            <span class="eyebrow">Produto & domínio</span>
            <h2>Finora</h2>
            <p class="case-study__summary">Gerenciador financeiro pessoal que modela orçamento, cartões, faturas, recorrências e projeções como partes de um mesmo domínio, evitando a abordagem de CRUD desconectado.</p>
          </div>
          <a class="button button--ghost" href="https://github.com/blasther12/finora">GitHub</a>
        </div>
        <div class="case-study__details">
          <div><strong>Problema</strong><p>Representar estado financeiro atual e futuro sem perder precisão monetária ou coerência entre lançamentos.</p></div>
          <div><strong>Decisão</strong><p>Monorepo com contratos compartilhados e regras de domínio explícitas entre Next.js, NestJS e PostgreSQL.</p></div>
          <div><strong>Trade-off</strong><p>Manter uma arquitetura simples de operar, mas com fronteiras suficientes para o domínio crescer sem espalhar regras pelo frontend.</p></div>
        </div>
        <div class="card__tags"><span>Next.js</span><span>NestJS</span><span>PostgreSQL</span><span>Prisma</span><span>DDD</span><span>Docker</span></div>
      </article>

      <article class="case-study">
        <div class="case-study__head">
          <div>
            <span class="eyebrow">Conhecimento & arquitetura</span>
            <h2>Alexandria</h2>
            <p class="case-study__summary">Uma biblioteca open source de Engenharia de Software em português, construída para conectar fundamentos, prática deliberada, decisões arquiteturais e referências confiáveis.</p>
          </div>
          <a class="button button--ghost" href="https://github.com/blasther12/alexandria">GitHub</a>
        </div>
        <div class="case-study__details">
          <div><strong>Problema</strong><p>Evitar que estudos de tecnologia virem listas de ferramentas sem contexto, dependências ou critérios de progressão.</p></div>
          <div><strong>Decisão</strong><p>Organizar o conhecimento em Atlas, trilhas, níveis, projetos e referências, conectando conceitos antes de tecnologias.</p></div>
          <div><strong>Trade-off</strong><p>Priorizar profundidade e curadoria em vez de cobertura superficial de toda novidade que surge no ecossistema.</p></div>
        </div>
        <div class="card__tags"><span>Open source</span><span>Architecture</span><span>Distributed Systems</span><span>Cloud</span><span>AI Engineering</span></div>
      </article>
    </div>

    <div class="project-labs">
      <header class="section-header">
        <div><span class="eyebrow">Laboratório</span><h2>Outros projetos públicos</h2></div>
        <p>Projetos menores usados para exercitar implementação, qualidade, interface e diferentes ecossistemas.</p>
      </header>

      <div class="grid grid--projects">
        <article class="card card--featured">
          <span class="card__number">API & TESTES</span>
          <h3>Products Service</h3>
          <p>API de produtos com validações de domínio, persistência relacional, documentação e cobertura de testes.</p>
          <div class="card__tags"><span>.NET 8</span><span>EF Core</span><span>PostgreSQL</span><span>Docker</span></div>
          <a class="card__link" href="https://github.com/blasther12/products" aria-label="Abrir Products Service no GitHub"></a>
        </article>

        <article class="card card--featured">
          <span class="card__number">INTERFACE & FOCO</span>
          <h3>Chronos Pomodoro</h3>
          <p>Aplicação de produtividade para explorar componentes, estado, experiência de uso e interface responsiva.</p>
          <div class="card__tags"><span>React</span><span>TypeScript</span><span>Vite</span></div>
          <a class="card__link" href="https://github.com/blasther12/chronos-pomodoro" aria-label="Abrir Chronos Pomodoro no GitHub"></a>
        </article>
      </div>
    </div>
  </div>
</section>
