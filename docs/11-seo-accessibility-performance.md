# Lançamento: SEO, acessibilidade e performance

**Status:** implementado para o MVP  
**Última revisão:** 26 de julho de 2026

## Objetivo

Preparar o hub para ser encontrado, compartilhado e usado com confiança sem aumentar a dependência de JavaScript ou introduzir integrações externas no carregamento da página.

## Decisões

- O LinkedIn será o contato profissional temporário. Nenhum e-mail será inventado; a troca para `mailto:` fica centralizada em `content/site.ts` quando João fornecer um endereço público.
- A URL canônica virá de `NEXT_PUBLIC_SITE_URL`, com suporte ao domínio de produção da Vercel e fallback local apenas para desenvolvimento.
- O preview social será gerado pelo próprio Next.js a partir da identidade do site e da imagem humana/digital já existente.
- Dados estruturados usarão `Person`, apenas com informações e perfis públicos confirmados.
- Projetos open source usam apenas informações verificáveis nos repositórios públicos. Não serão criadas métricas, contribuições ou atividade fictícia.
- Analytics permanece fora do escopo até existir uma pergunta de medição e uma decisão de privacidade.

## Checklist implementado

- metadata global, canonical, Open Graph e Twitter Card;
- imagem social própria em 1200 × 630;
- sitemap, robots, favicon e manifest coerentes;
- dados estruturados de pessoa e perfis oficiais;
- página 404 autoral;
- contato com alvo de toque confortável;
- link de salto para teclado;
- data visível de atualização;
- respeito a `prefers-reduced-motion` no slideshow;
- imagens responsivas com prioridade limitada ao conteúdo realmente inicial.

## Configuração de publicação

Definir antes do deploy:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Sem essa variável, a Vercel usa automaticamente o domínio de produção do projeto. Em desenvolvimento, o fallback é `http://localhost:3000`.

## Pendências reais

- fornecer um e-mail público, caso LinkedIn não deva permanecer como CTA;
- manter estágio, releases, testes e limites de segurança sincronizados com os repositórios públicos;
- validar a imagem social no LinkedIn Post Inspector e em um compartilhamento de WhatsApp após o domínio existir;
- executar Lighthouse na URL publicada, porque métricas locais não representam rede, CDN e cache de produção.
