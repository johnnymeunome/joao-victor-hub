import type { Metadata } from "next";
import Link from "next/link";

import { ExternalArrow } from "@/components/external-arrow";

export const metadata: Metadata = {
  title: "Arquivo não encontrado",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <section className="not-found__card" aria-labelledby="not-found-title">
        <div className="not-found__bar">error.md · arquivo não encontrado</div>
        <h1 id="not-found-title">4<span>0</span>4</h1>
        <p>Este caminho não existe — ou ainda não entrou no próximo commit.</p>
        <Link href="/">voltar ao README <ExternalArrow /></Link>
      </section>
    </main>
  );
}
