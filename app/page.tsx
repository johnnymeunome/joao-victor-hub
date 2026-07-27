import Image from "next/image";

import { ExternalArrow } from "@/components/external-arrow";
import { ProjectCard } from "@/components/project-card";
import { projects, site } from "@/content/site";

const openSourceProjects = [
  {
    number: "01",
    name: "MyVault",
    status: "M0 · product shell",
    kind: "Desktop · local-first",
    description:
      "Um gerenciador de credenciais que começa pela experiência e pela arquitetura: interface desktop completa, dados apenas em memória e um caminho explícito para um núcleo seguro em Rust.",
    image: "/images/code/myvault-dashboard.png",
    alt: "Dashboard final do MyVault com lista de credenciais, detalhes, gerador de senhas e indicadores de integridade",
    url: "https://github.com/johnnymeunome/MyVault",
    stack: ["Tauri 2", "React 19", "TypeScript", "Rust", "Zustand"],
    facts: ["Interface navegável", "CI e testes públicos", "Arquitetura KDBX planejada"],
    note: "Protótipo M0 — ainda não deve armazenar credenciais reais.",
    featured: true,
    portraitPreview: false,
  },
  {
    number: "02",
    name: "Mail Link Defender",
    status: "v0.2.3 · release",
    kind: "Chrome extension · segurança",
    description:
      "Uma extensão que analisa links localmente no Gmail, explica sinais de phishing e interrompe cliques de alto risco antes da navegação.",
    image: "/images/code/mail-link-defender-popup.png",
    alt: "Popup do Mail Link Defender no Chrome com proteção do Gmail ativa e análise local de links",
    url: "https://github.com/johnnymeunome/mail-link-defender",
    stack: ["Manifest V3", "TypeScript", "Vite", "Vitest"],
    facts: ["42 testes automatizados", "Análise 100% local", "Release instalável"],
    note: "Detecção explicável por regras — sem enviar URLs ou e-mails para servidores.",
    featured: false,
    portraitPreview: true,
  },
];

function BriefcaseMark() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 7V5.8c0-1 .8-1.8 1.8-1.8h2.4c1 0 1.8.8 1.8 1.8V7m-11 3.5h16M5.5 7h13A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9A1.5 1.5 0 0 1 5.5 7Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>;
}

const socialLinks = [
  { name: "Behance", handle: "joovictor437", url: site.behanceUrl, icon: "/icons/social/behance.svg", platform: "behance" },
  { name: "GitHub", handle: "johnnymeunome", url: site.githubUrl, icon: "/icons/social/github.svg", platform: "github" },
  { name: "LinkedIn", handle: "joão-cabral", url: site.linkedinUrl, icon: "/icons/social/linkedin.svg", platform: "linkedin" },
  { name: "Pinterest", handle: "euvictorj", url: site.pinterestUrl, icon: "/icons/social/pinterest.svg", platform: "pinterest" },
  { name: "Playlists", handle: "jaumdp", url: site.spotifyUrl, icon: "/icons/social/spotify.svg", platform: "spotify" },
  { name: "Instagram", handle: "interlinked_cells", url: site.instagramUrl, icon: "/icons/social/instagram.svg", platform: "instagram" },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}/images/profile/joao-victor.jpg`,
    jobTitle: "Desenvolvedor Pleno AI Augmented",
    address: { "@type": "PostalAddress", addressLocality: "Rio de Janeiro", addressCountry: "BR" },
    worksFor: { "@type": "Organization", name: "LOG4 Full Commerce" },
    sameAs: [site.behanceUrl, site.githubUrl, site.linkedinUrl, site.pinterestUrl, site.spotifyUrl, site.instagramUrl],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <main id="top">
      <a className="skip-link" href="#perfil">Pular para o conteúdo</a>
      <section className="opening-art" aria-label="Encontro entre criação humana e inteligência artificial">
        <Image alt="Uma mão humana se aproximando de uma mão formada por pontos digitais" fill priority sizes="100vw" src="/images/hero/human-ai-hands.png" />
        <div className="opening-art__meta" aria-hidden="true"><span>HUMAN × MACHINE</span><span>DESIGN / CODE / AI</span></div>
      </section>

      <header className="repo-header">
        <div className="shell repo-header__row">
          <a className="personal-mark" href="#top" aria-label="João Victor, início">
            <Image alt="" fill priority sizes="44px" src="/images/profile/hal-eye.png" />
          </a>
          <div className="repo-path" aria-label="Localização atual">
            <span>joao-victor</span><span>/</span><strong>workspace</strong><span className="visibility">público</span>
          </div>
          <a className="header-link" href={site.githubUrl} rel="noreferrer" target="_blank">código <ExternalArrow /></a>
        </div>
        <nav className="shell repo-tabs" aria-label="Seções da página">
          <a className="repo-tab repo-tab--active" href="#perfil">Perfil</a>
          <a className="repo-tab" href="#design">Design</a>
          <a className="repo-tab" href="#codigo">Open source</a>
        </nav>
      </header>

      <div className="shell readme">
        <div className="readme__bar">
          <div className="readme__file"><span aria-hidden="true">◫</span> README.md</div>
          <span className="readme__branch">agora</span>
        </div>

        <article className="readme__body">
          <span className="code-ambient code-ambient--top" aria-hidden="true">&lt;profile data-mode=&quot;design + code&quot;&gt;</span>
          <section className="profile" id="perfil" aria-labelledby="profile-name">
            <div className="profile__intro">
              <Image alt="João Victor" className="profile__avatar" height={104} priority src="/images/profile/joao-victor.jpg" width={104} />
              <div>
                <h1 id="profile-name">João Victor</h1>
                <p className="profile__role">Designer &amp; Developer · Rio de Janeiro</p>
                <div className="career-inline" aria-label="Empresa atual: LOG4 Full Commerce"><BriefcaseMark /><span>LOG4 Full Commerce</span></div>
              </div>
            </div>
            <blockquote>Eu desenho marcas e interfaces. Aos poucos, também transformo ideias em código aberto.</blockquote>
            <div className="profile__readme-copy">
              <h2><span>##</span> Sobre este README</h2>
              <p>Este é meu ponto de encontro entre duas frentes: o design que já ganhou forma e o código que estou começando a colocar no mundo. Um índice pessoal, sempre em construção.</p>
            </div>
            <div className="profile-socials" aria-label="Perfis e plataformas">
              {socialLinks.map((social) => social.url ? (
                <a href={social.url} key={social.name} rel="noreferrer" target="_blank">
                  <span className={`profile-socials__icon profile-socials__icon--${social.platform}`}><Image alt="" height={20} src={social.icon} width={20} /></span>
                  <span><strong>{social.name}</strong><small>@{social.handle}</small></span><i>↗</i>
                </a>
              ) : (
                <span className="profile-socials__pending" key={social.name}>
                  <span className={`profile-socials__icon profile-socials__icon--${social.platform}`}><Image alt="" height={20} src={social.icon} width={20} /></span>
                  <span><strong>{social.name}</strong><small>{social.handle}</small></span><i>·</i>
                </span>
              ))}
            </div>
            <a className="profile-contact" href={site.contactUrl} rel="noreferrer" target="_blank">
              <span><small>contact.ts</small><strong><code><b>await</b> conversar();</code></strong></span>
              <span>[ produto · design · código ] <ExternalArrow /></span>
            </a>
            <div className="readme-badges" aria-label="Informações rápidas"><span>pt-BR</span><span>Rio de Janeiro</span><span>design × code</span></div>
            <div className="profile__note"><span>agora</span> dois produtos open source publicados <time dateTime={site.updatedAt}>· atualizado {site.updatedLabel}</time></div>
            <div className="readme-snippet" aria-label="Resumo do workspace em formato de código">
              <ol>
                <li><code><b>const</b> workspace = &#123;</code></li>
                <li><code>design: <em>&quot;publicado&quot;</em>,</code></li>
                <li><code>code: <em>&quot;publicado&quot;</em>,</code></li>
                <li><code>mode: <em>&quot;aprender em público&quot;</em></code></li>
                <li><code>&#125;;</code></li>
              </ol>
            </div>
          </section>

          <div className="code-divider" aria-hidden="true"><span>&lt;/profile&gt;</span><span>const arquivo = [design, marcas, sistemas];</span></div>

          <section className="design-section" id="design" aria-labelledby="design-title">
            <div className="design-heading">
              <p className="design-kicker">Arquivo visual · seleção 2025—2026</p>
              <h2 id="design-title">Marcas com<br /><em>vida própria.</em></h2>
              <div className="design-heading__aside">
                <p>Identidades, sistemas e experimentos visuais publicados por inteiro no Behance.</p>
                <a href={site.behanceUrl} rel="noreferrer" target="_blank">abrir meu Behance <ExternalArrow /></a>
              </div>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard index={index + 1} key={project.url} project={project} />)}
            </div>
          </section>

          <div className="code-divider code-divider--right" aria-hidden="true"><span>&lt;/selected-work&gt;</span><span>npm run próximo-capítulo</span></div>

          <section className="code-section" id="codigo" aria-labelledby="code-title">
            <div className="code-heading">
              <p className="code-kicker">Repositórios públicos · produto e engenharia</p>
              <h2 id="code-title">Ideias que<br />saíram do papel.</h2>
              <p>Dois produtos construídos em público, com decisões documentadas, limites honestos e espaço real para evolução.</p>
            </div>

            <div className="code-projects">
              {openSourceProjects.map((project) => (
                <article className={`code-project${project.featured ? " code-project--featured" : ""}${project.portraitPreview ? " code-project--portrait" : ""}`} key={project.name}>
                  <div className="code-project__filebar">
                    <span><i aria-hidden="true">└─</i> projects/{project.name.toLowerCase().replaceAll(" ", "-")}</span>
                    <span>{project.status}</span>
                  </div>
                  <a className="code-project__media" href={project.url} rel="noreferrer" target="_blank">
                    <Image alt={project.alt} fill sizes={project.featured ? "(min-width: 976px) 880px, 100vw" : "(min-width: 640px) 50vw, 100vw"} src={project.image} />
                    <span className="code-project__media-label">preview / final-ui.png</span>
                  </a>
                  <div className="code-project__body">
                    <div className="code-project__identity">
                      <p>{project.number} · {project.kind}</p>
                      <h3>{project.name}</h3>
                      <span className="code-project__status"><i aria-hidden="true" />{project.status}</span>
                    </div>
                    <div className="code-project__content">
                      <p>{project.description}</p>
                      <div className="code-project__stack" aria-label={`Tecnologias do ${project.name}`}>
                        {project.stack.map((item) => <span key={item}>{item}</span>)}
                      </div>
                      <ul>{project.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                      <small>{project.note}</small>
                    </div>
                    <a className="code-project__link" href={project.url} rel="noreferrer" target="_blank">
                      <span>abrir repositório</span><ExternalArrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <a className="code-profile-link" href={site.githubUrl} rel="noreferrer" target="_blank">
              <span><strong>johnnymeunome</strong><small>código, releases e próximos experimentos</small></span>
              <ExternalArrow />
            </a>
          </section>
        </article>
        <div className="readme__endbar" aria-hidden="true"><span>README.md</span><span>EOF · arquivo em construção</span></div>
      </div>

      <footer className="site-footer" id="footer">
        <div className="shell site-footer__statement">
          <p>&lt;!-- EOF não significa o fim --&gt;</p>
          <h2>Fim do arquivo.<br /><em>Início do próximo commit.</em></h2>
          <div className="site-footer__icon-grid" aria-label="Perfis sociais">
            {socialLinks.map((social) => social.url ? (
              <a aria-label={social.name} className={`footer-icon--${social.platform}`} href={social.url} key={social.name} rel="noreferrer" target="_blank"><Image alt="" height={18} src={social.icon} width={18} /></a>
            ) : (
              <span aria-label={`${social.name}, link pendente`} className={`footer-icon--pending footer-icon--${social.platform}`} key={social.name}><Image alt="" height={18} src={social.icon} width={18} /></span>
            ))}
          </div>
          <div className="site-footer__bottomline">
            <span>2026 — RJ</span>
            <a className="built-with" href="https://openai.com/codex/" rel="noreferrer" target="_blank">
              <small>BUILT WITH</small>
              <span className="built-with__logo">
                <Image alt="" height={24} src="/icons/openai-mark.svg" width={24} />
                <span className="built-with__wordmark"><b>OpenAI</b> <strong>Codex</strong></span>
              </span>
            </a>
            <a href="#top"><span>voltar ao topo</span> ↑</a>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
