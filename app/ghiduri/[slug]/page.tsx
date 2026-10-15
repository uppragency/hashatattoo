import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { guideContent } from "@/lib/guides-content";
import { guideBySlug, publishedGuides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g || !g.published) return {};
  const m = pageMetadata(g.metaTitle, g.metaDescription, `/ghiduri/${g.slug}`, `/assets/${g.image}`);
  return {
    ...m,
    openGraph: { ...m.openGraph, type: "article", publishedTime: g.date, authors: ["Hasha Tattoo"] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  const content = guideContent[slug];
  if (!g || !g.published || !content) notFound();
  return <GuideArticle guide={g} content={content} />;
}
