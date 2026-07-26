"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { Project } from "@/content/site";

type ProjectCardProps = { project: Project; priority?: boolean; index: number };

export function ProjectCard({ project, priority = false, index }: ProjectCardProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultipleSlides = project.slides.length > 1;
  const sizes = project.layout === "feature" ? "(max-width: 719px) 92vw, 896px" : "(max-width: 719px) 92vw, 440px";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasMultipleSlides || paused || prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % project.slides.length);
    }, 4200 + index * 180);
    return () => window.clearInterval(interval);
  }, [hasMultipleSlides, index, paused, project.slides.length]);

  function changeSlide(direction: number) {
    setActiveSlide((current) => (current + direction + project.slides.length) % project.slides.length);
  }

  return (
    <article className={`project-card project-card--${project.layout}`} onBlur={() => setPaused(false)} onFocus={() => setPaused(true)} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="project-card__filebar">
        <span><i aria-hidden="true">▤</i> project-{String(index).padStart(2, "0")}.md</span>
        <span>[source: behance]</span>
      </div>
      <div className={`project-card__media project-card__media--${project.tone}`}>
        <Image
          alt={`${project.alt} — imagem ${activeSlide + 1} de ${project.slides.length}`}
          className="project-card__image"
          fill
          key={project.slides[activeSlide]}
          priority={priority && activeSlide === 0}
          sizes={sizes}
          src={project.slides[activeSlide] ?? project.image}
          unoptimized={project.title === "SOUNDFY" && project.slides[activeSlide]?.endsWith("/slide-14.jpg")}
        />
        <a className="project-card__media-link" href={project.url} rel="noreferrer" target="_blank" aria-label={`Abrir ${project.title} no Behance`} />
        {hasMultipleSlides && (
          <div className="project-card__slideshow">
            <span>{String(activeSlide + 1).padStart(2, "0")} / {String(project.slides.length).padStart(2, "0")}</span>
            <div>
              <button aria-label={`Imagem anterior de ${project.title}`} onClick={() => changeSlide(-1)} type="button">[←]</button>
              <button aria-label={`Próxima imagem de ${project.title}`} onClick={() => changeSlide(1)} type="button">[→]</button>
            </div>
          </div>
        )}
        {hasMultipleSlides && <div className="project-card__progress" aria-hidden="true"><span key={`${activeSlide}-progress`} /></div>}
      </div>
      <div className="project-card__caption">
        <div className="project-card__text">
          <span className="project-card__path">{String(index).padStart(2, "0")} · {project.label}</span>
          <h3><span aria-hidden="true">###</span> <a href={project.url} rel="noreferrer" target="_blank">{project.title}</a></h3>
          <p className="project-card__description">{project.description}</p>
          <span className="project-card__destination">![slideshow]({project.slides.length}-{project.slides.length === 1 ? "imagem" : "imagens"})</span>
        </div>
        <a className="project-card__stamp" href={project.url} rel="noreferrer" target="_blank">
          <span>external</span><strong>OPEN.md ↗</strong>
        </a>
      </div>
    </article>
  );
}
