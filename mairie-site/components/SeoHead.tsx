import Head from "next/head";
import { useRouter } from "next/router";

interface SeoHeadProps {
  title?: string;
  description?: string;
  image?: string;
  robots?: string;
}

export default function SeoHead({
  title = "Les 5 villages",
  description = "Site officiel de la communauté des 5 villages : agenda, SIVOS et informations sur chaque mairie.",
  image = "https://localhost:3000/og-image.jpg", //à remplacer par l'URL de prod
  robots = "index, follow",
}: SeoHeadProps) {
  const router = useRouter();
  const currentUrl = `https://localhost:3000${router.asPath}`; //à remplacer par l'URL de prod
  const canonical = currentUrl.split("?")[0]; // sans query params

  const defaultTitleMap: Record<string, string> = {
    "/": "Accueil – Les 5 villages",
    "/agenda": "Agenda des 5 villages",
    "/sivos": "SIVOS – Services intercommunaux",
  };

  const resolvedTitle = title || defaultTitleMap[router.pathname] || "Les 5 villages";

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
