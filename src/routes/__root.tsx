import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import brandLogoUrl from "../image/j7pf.svg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0E2659" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "JoeSeven" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: brandLogoUrl, type: "image/svg+xml" },
      { rel: "shortcut icon", href: brandLogoUrl },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <CookieConsentBanner />
        <Scripts />
      </body>
    </html>
  );
}

function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const savedConsent = readCookie("joeseven_cookie_consent");
    if (!savedConsent) {
      setVisible(true);
      return;
    }

    setConsent(savedConsent);
  }, []);

  const saveConsent = (value: "accepted" | "rejected") => {
    writeCookie("joeseven_cookie_consent", value, 60 * 60 * 24 * 180);
    setConsent(value);
    setVisible(false);
  };

  if (!visible || consent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="border-border/70 bg-background/95 shadow-[0_20px_60px_rgba(0,0,0,0.18)] mx-auto max-w-4xl rounded-2xl border backdrop-blur-xl">
        <div className="grid gap-4 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-2">
            <div className="font-display text-base font-semibold tracking-tight text-foreground">
              Usamos cookies para melhorar sua experiência
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Utilizamos cookies essenciais para funcionamento do site e para registrar sua
              preferência. Se você aceitar, poderemos usar também recursos analíticos e de
              medição para aprimorar a navegação. Consulte a nossa{' '}
              <Link to="/privacy" className="text-primary font-medium hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Somente essenciais
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors hover:opacity-90"
            >
              Aceitar cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function readCookie(name: string) {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.split("=")[1] ?? "") : null;
}

function writeCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") {
    return;
  }

  const secureAttribute = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax${secureAttribute}`;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
