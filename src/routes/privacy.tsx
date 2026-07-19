import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import brandLogoUrl from "../image/j7pf.svg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | JoeSeven" },
      {
        name: "description",
        content:
          "Saiba como a JoeSeven coleta, usa, armazena e protege os dados enviados por visitantes e clientes.",
      },
      { property: "og:title", content: "Política de Privacidade | JoeSeven" },
      {
        property: "og:description",
        content:
          "Entenda quais dados podem ser coletados no site da JoeSeven, para que são usados e quais são os seus direitos.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.joeseven.com.br/privacy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Informações que coletamos",
      items: [
        "Dados enviados voluntariamente por formulário, e-mail, WhatsApp ou outros canais de contato.",
        "Informações técnicas como IP, navegador, dispositivo, páginas visitadas e data/hora de acesso.",
        "Dados de navegação coletados por ferramentas analíticas e de segurança, quando ativadas.",
      ],
    },
    {
      title: "2. Como usamos os dados",
      items: [
        "Responder solicitações e prestar suporte comercial ou técnico.",
        "Preparar propostas, apresentações, orçamentos e acompanhamento de relacionamento.",
        "Melhorar a experiência do site, desempenho, segurança e comunicação.",
        "Cumprir obrigações legais, regulatórias ou contratuais quando aplicável.",
      ],
    },
    {
      title: "3. Compartilhamento",
      items: [
        "Não vendemos dados pessoais.",
        "Podemos compartilhar dados com serviços necessários para operação do site, como hospedagem, análise, segurança e comunicação.",
        "Quando exigido por lei, ordem judicial ou autoridade competente, os dados podem ser fornecidos aos órgãos responsáveis.",
      ],
    },
    {
      title: "4. Cookies e tecnologias semelhantes",
      items: [
        "Usamos um cookie de consentimento para registrar sua escolha sobre o uso de cookies no site.",
        "Podemos usar cookies essenciais para funcionamento do site e cookies analíticos para entender o uso da página.",
        "Você pode bloquear ou apagar cookies nas configurações do navegador, mas isso pode afetar algumas funcionalidades.",
      ],
    },
    {
      title: "5. Armazenamento e segurança",
      items: [
        "Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda, alteração ou divulgação indevida.",
        "Mantemos os dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou exigências legais.",
      ],
    },
    {
      title: "6. Seus direitos",
      items: [
        "Você pode solicitar acesso, correção, atualização, portabilidade ou exclusão dos seus dados, quando aplicável.",
        "Também pode revogar consentimentos concedidos e solicitar esclarecimentos sobre o tratamento de dados.",
      ],
    },
    {
      title: "7. Contato",
      items: [
        "Para dúvidas relacionadas à privacidade, entre em contato pelo e-mail joesevenn7@gmail.com.",
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
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
              Esta política descreve como a JoeSeven trata dados pessoais coletados por meio deste
              site e dos canais de contato vinculados à landing page.
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