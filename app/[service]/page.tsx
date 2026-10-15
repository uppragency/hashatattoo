import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getService, services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return pageMetadata(s.title, s.description, `/${s.slug}`, `/assets/${s.heroImage}`);
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();
  return <ServicePage service={s} />;
}
