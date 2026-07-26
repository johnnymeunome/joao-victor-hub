# ADR 0001 — Arquitetura do MVP da home

**Status:** aceito  
**Data:** 26 de julho de 2026

## Contexto

O produto foi definido como um hub pessoal mobile-first. O Behance concentra a prova visual e deve receber o tráfego dos projetos de design. O GitHub será o segundo eixo de credibilidade, mas ainda não possui uma URL confirmada nem repositórios públicos a apresentar.

## Problema

É necessário publicar uma home com identidade própria rapidamente, sem criar páginas internas, integrações externas, dependências ou estruturas editoriais que não têm uso real no MVP.

## Opções consideradas

1. Next.js com Server Components e CSS nativo.
2. Next.js com Tailwind, Framer Motion e biblioteca de componentes.
3. Site estático sem framework.

## Decisão

Adotar Next.js 16, App Router, TypeScript estrito, Server Components e CSS nativo organizado por tokens e componentes sem estado.

- Imagens dos projetos são locais e otimizadas por `next/image`.
- Projetos são dados tipados em `content/site.ts`.
- Todos os cards de design apontam diretamente para o Behance.
- O bloco do GitHub comunica honestamente o estágio atual e só vira link após confirmação da URL.
- Não adotar Tailwind, Framer Motion, shadcn/ui ou biblioteca de ícones no MVP.
- Não consumir APIs do Behance ou GitHub no carregamento.

## Consequências

### Positivas

- pouco JavaScript no navegador;
- menor superfície de manutenção;
- carregamento previsível sem dependência de APIs externas;
- conteúdo e links podem ser alterados em um único arquivo;
- base compatível com páginas e conteúdo futuros.

### Negativas

- estilos não contam com utilitários ou componentes prontos;
- atualizações do Behance são manuais;
- o GitHub fica sem link até o identificador ser confirmado;
- uma futura expansão poderá exigir reorganização dos estilos.

## Riscos

- imagens copiadas do Behance podem não ser os arquivos-fonte ideais para produção;
- ausência de domínio impede canonical e sitemap definitivos;
- o posicionamento técnico ainda depende de projetos open source futuros.
