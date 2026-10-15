import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StylePage from "@/components/StylePage";
import { styleBySlug, stylePages } from "@/lib/styles";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return stylePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = styleBySlug(slug);
  if (!p) return {};
  return pageMetadata(p.title, p.description, `/stiluri/${p.slug}`, `/assets/${p.image}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = styleBySlug(slug);
  if (!p) notFound();
  return <StylePage page={p} />;
}
