export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tattvaplatform.org";

export type SchemaType =
    | "Organization"
    | "WebSite"
    | "WebPage"
    | "Article"
    | "Person"
    | "ContactPage";

interface SchemaProps {
    type: SchemaType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
}

export function Schema({ type, data }: SchemaProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export const defaultOpenGraph = {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Tattva Platform",
    images: [
        {
            url: `${SITE_URL}/images/og-default.jpg`,
            width: 1200,
            height: 630,
            alt: "Tattva Platform - Learn. Act. Defend.",
        },
    ],
};
