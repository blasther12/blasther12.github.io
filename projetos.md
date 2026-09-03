---
layout: default
title: Projetos
description: Projetos pessoais de Rafael Oliveira, com contexto sobre as decisões técnicas de cada um.
permalink: /projetos/
---
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Projetos</span>
    <h1>Projetos pessoais que uso para estudar e experimentar.</h1>
    <p>Além do código, deixei um pouco do raciocínio por trás de cada projeto: o problema que eu queria resolver, a decisão que tomei e o preço dessa escolha.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="case-study-grid">
      <article class="case-study">
        <div class="case-study__head">
          <div>
            <span class="eyebrow">Finanças</span>
            <h2>Finora</h2>
            <p class="case-study__summary">Comecei o Finora para organizar finanças pessoais sem tratar cartão, fatura, recorrência e projeção como cadastros independentes.</p>
          </div>
          <a class="button button--ghost" href="https://github.com/blasther12/finora">GitHub</a>
        </div>
        <div class="case-study__details">
          <div><strong>O problema</strong><p>Representar o que já aconteceu e o que ainda vai acontecer sem perder coerência entre lançamentos, faturas e orçamento.</p></div>
          <div><strong>O caminho</strong><p>Usei Next.js, NestJS e PostgreSQL em um monorepo, mantendo as regras financeiras no domínio em vez de espalhá-las pela interface.</p></div>
          <div><strong>O preço</strong><p>Há mais modelagem no começo, mas isso evita que regras importantes acabem duplicadas em telas, controllers e jobs.</p></div>
        </div>
        <div class="card__tags"><span>Next.js</span><span>NestJS</span><span>PostgreSQL</span><span>Prisma</span><span>DDD</span><span>Docker</span></div>
      </article>

      <article class="case-study">
        <div class="case-study__head">
          <div>
            <span class="eyebrow">Estudos · Engenharia</span>
            <h2>Alexandria</h2>
            <p class="case-study__summary">A Alexandria nasceu porque minhas referências de estudo estavam espalhadas demais. A ideia foi montar um lugar em que assuntos se conectam e o estudo produz evidência, não apenas páginas marcadas como lidas.</p>
          </div>
          <div class="hero__actions">
            <a class="button button--primary" href="https://blasther12.github.io/alexandria/">Explorar</a>
            <a class="button button--ghost" href="https://github.com/blasther12/alexandria">GitHub</a>
          </div>
        </div>
        <div class="case-study__details">
          <div><strong>O problema</strong><p>Uma lista enorme de ferramentas não ajuda muito quando falta contexto sobre mecanismos, dependências e por que aprender determinado assunto.</p></div>
          <div><strong>O caminho</strong><p>Organizei o acervo por temas conectados, com trade-offs, laboratórios, projetos, referências e mapas para navegar por problema.</p></div>
          <div><strong>O preço</strong><p>Quanto maior a biblioteca, maior a necessidade de curadoria e de boas portas de entrada para não transformar profundidade em ruído.</p></div>
        </div>
        <div class="card__tags"><span>Open source</span><span>Architecture</span><span>Distributed Systems</span><span>Cloud</span><span>AI Engineering</span></div>
      </article>

      <article class="case-study">
        <div class="case-study__head">
          <div>
            <span class="eyebrow">Estudos · História</span>
            <h2>Cliofera</h2>
            <p class="case-study__summary">Uma faculdade livre de História para estudar de forma sistemática, com currículo, cronologia, fontes, historiografia, literatura, debates e produção autoral.</p>
          </div>
          <div class="hero__actions">
            <a class="button button--primary" href="https://blasther12.github.io/cliofera/">Estudar</a>
            <a class="button button--ghost" href="https://github.com/blasther12/cliofera">GitHub</a>
          </div>
        </div>
        <div class="case-study__details">
          <div><strong>O problema</strong><p>Estudar História por curiosidades isoladas deixa lacunas cronológicas, regionais e metodológicas difíceis de perceber.</p></div>
          <div><strong>O caminho</strong><p>Montei quatro anos de formação autodirigida, conectando aulas, bibliografia, fontes, grandes debates, cronologia e progresso local.</p></div>
          <div><strong>O preço</strong><p>Uma formação ampla exige revisão constante para evitar eurocentrismo, simplificações e a falsa sensação de que cobertura extensa substitui leitura crítica.</p></div>
        </div>
        <div class="card__tags"><span>História</span><span>Historiografia</span><span>Fontes</span><span>PWA</span><span>Open source</span></div>
      </article>
    </div>

    <div class="project-labs">
      <header class="section-header">
        <div><span class="eyebrow">Outros</span><h2>Projetos menores</h2></div>
        <p>Alguns repositórios que usei para testar ideias, bibliotecas ou tecnologias específicas.</p>
      </header>

      <div class="grid grid--projects">
        <article class="card card--featured">
          <span class="card__number">API & TESTES</span>
          <h3>Products Service</h3>
          <p>Uma API de produtos em .NET com PostgreSQL, documentação e testes automatizados.</p>
          <div class="card__tags"><span>.NET 8</span><span>EF Core</span><span>PostgreSQL</span><span>Docker</span></div>
          <a class="card__link" href="https://github.com/blasther12/products" aria-label="Abrir Products Service no GitHub"></a>
        </article>

        <article class="card card--featured">
          <span class="card__number">FRONTEND</span>
          <h3>Chronos Pomodoro</h3>
          <p>Um Pomodoro feito com React e TypeScript para explorar componentes, estado e uma interface responsiva.</p>
          <div class="card__tags"><span>React</span><span>TypeScript</span><span>Vite</span></div>
          <a class="card__link" href="https://github.com/blasther12/chronos-pomodoro" aria-label="Abrir Chronos Pomodoro no GitHub"></a>
        </article>
      </div>
    </div>
  </div>
</section>
