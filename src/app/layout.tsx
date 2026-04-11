import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Footer, Navbar } from "@/components/global";
import "./globals.css";

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // URL oficial do blog
  metadataBase: new URL("https://soberanotricolor.com.br"),

  title: {
    default: "Soberano Tricolor | Notícias, Jogos e Bastidores do São Paulo FC",
    template: "%s | Soberano Tricolor"
  },

  description: "Acompanhe tudo sobre o São Paulo FC no Soberano Tricolor. Notícias atualizadas, análise tática, mercado da bola e o dia a dia do nosso Tricolor Paulista.",

  keywords: [
    "São Paulo FC",
    "Notícias do São Paulo",
    "Soberano Tricolor",
    "Tricolor Paulista",
    "SPFC",
    "Jogos do São Paulo",
    "Mercado da bola SPFC",
    "Bastidores do São Paulo",
    "Análise tática São Paulo"
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Soberano Tricolor - O Coração do São Paulo FC",
    description: "Fique por dentro de todas as novidades do Tricolor Paulista com análises profundas e notícias em tempo real.",
    type: "website",
    locale: "pt_BR",
    url: "https://soberanotricolor.com.br",
    siteName: "Soberano Tricolor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soberano Tricolor - Notícias do SPFC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Soberano Tricolor | Notícias do SPFC",
    description: "Tudo sobre o São Paulo Futebol Clube em um só lugar.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2827166560948178"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <meta name="google-site-verification" content="BQ3BsKxQv9wmjdsELFbZEa887IFYp_9gIOeMQ_mgnZc" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
