import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPage from "@/components/AreaPage";
import { areaBySlug, areas } from "@/lib/areas";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ zona: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ zona: string }> }): Promise<Metadata> {
  const { zona } = await params;
  const a = areaBySlug(zona);
  if (!a) return {};
  return pageMetadata(a.title, a.description, `/zone/${a.slug}`, `/assets/${a.image}`);
}

export default async function Page({ params }: { params: Promise<{ zona: string }> }) {
  const { zona } = await params;
  const a = areaBySlug(zona);
  if (!a) notFound();
  return <AreaPage area={a} />;
}
