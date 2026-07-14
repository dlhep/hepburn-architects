import Link from "next/link";

export function Breadcrumbs({
  items
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://www.hepburnarchitects.net${item.href}`
        : undefined
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        {items.map((item, index) => (
          <span key={item.label}>
            {index > 0 && <span aria-hidden="true"> / </span>}
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          </span>
        ))}
      </nav>
    </>
  );
}
