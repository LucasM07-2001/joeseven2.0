import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import brandLogoUrl from "../image/j7pf.svg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | JoeSeven" },
      {
        name: "description",
        content:
          "Leia os termos de uso do site da JoeSeven, incluindo regras de navegação, propriedade intelectual e limitações de responsabilidade.",
      },
      { property: "og:title", content: "Termos de Uso | JoeSeven" },
      {
        property: "og:description",
        content:
          "Termos aplicáveis ao uso do site e dos canais de contato da JoeSeven.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.joeseven.com.br/terms" }],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  const sections = [
    {
      title: "1. Aceitação dos termos",
      items: [
        "Ao acessar este site, você concorda com estes Termos de Uso e com a Política de Privacidade.",
        "Se não concordar com qualquer condição, recomendamos que não utilize o site.",
      ],
    },
    {
      title: "2. Uso permitido",
      items: [
        "O conteúdo da landing page tem finalidade informativa e comercial.",
        "É proibido tentar comprometer a segurança, a integridade ou o funcionamento do site.",
        "Você não deve usar o site para fins ilícitos, abusivos, fraudulentos ou que violem direitos de terceiros.",
      ],
    },
    {
      title: "3. Propriedade intelectual",
      items: [
        "Textos, identidade visual, elementos gráficos, código e demais conteúdos pertencem à JoeSeven ou a seus licenciadores.",
        "Não é permitido copiar, reproduzir, distribuir ou criar obras derivadas sem autorização prévia e por escrito.",
      ],
    },
    {
      title: "4. Informações e disponibilidade",
      items: [
        "Nos esforçamos para manter as informações atualizadas, mas não garantimos ausência total de erros, omissões ou desatualizações.",
        "Podemos alterar, suspender ou remover conteúdos do site a qualquer momento, sem aviso prévio.",
      ],
    },
    {
      title: "5. Limitação de responsabilidade",
      items: [
        "A JoeSeven não se responsabiliza por danos decorrentes de uso indevido do site, indisponibilidade temporária, ataques de terceiros ou fatores fora de seu controle razoável.",
        "O uso de links externos, quando houver, é de responsabilidade do usuário.",
      ],
    },
    {
      title: "6. Comunicação",
      items: [
        "Ao enviar mensagens por formulário, e-mail ou WhatsApp, você declara que as informações fornecidas são verdadeiras e está autorizado a compartilhá-las.",
      ],
    },
    {
      title: "7. Alterações destes termos",
      items: [
        "Estes Termos de Uso podem ser revisados a qualquer momento para refletir mudanças legais, operacionais ou comerciais.",
      ],
    },
    {
      title: "8. Contato",
      items: [
        "Em caso de dúvidas sobre estes termos, escreva para joesevenn7@gmail.com.",
      ],
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/60 bg-background/75 backdrop-blur-xl"
            : "border-b border-border/60 bg-background/90 backdrop-blur"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="JoeSeven - Início">
            <img src={brandLogoUrl} alt="JoeSeven" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-bold tracking-tight">JoeSeven</span>
          </Link>
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Voltar para a home
          </Link>
        </div>
      </header>

      {/* Espaçador para compensar o header agora fixo */}
      <div className="h-16" aria-hidden="true" />

      <section className="border-b border-border/60 bg-surface/40">
        <div className="container-page py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest">
              Jurídico
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
              Estes termos definem as condições de uso do site da JoeSeven e dos canais de contato
              associados à landing page.
            </p>
            <div className="text-muted-foreground mt-6 text-sm">
              Última atualização: 13 de julho de 2026
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto grid max-w-3xl gap-8">
            {sections.map((section) => (
              <article key={section.title} className="surface-card p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <ul className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                to="/"
                className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:opacity-90"
              >
                Voltar para a home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}