import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function JsonLd() {
  const url = getSiteUrl();
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: SITE_NAME,
        url,
        description: SITE_DESCRIPTION,
        logo: { "@type": "ImageObject", url: `${url}/icon` },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: SITE_NAME,
        url,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${url}/#organization` },
        inLanguage: "pt-BR",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}/#app`,
        name: SITE_NAME,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
        },
        url,
        description: SITE_DESCRIPTION,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
