"use client";

import type { AnchorHTMLAttributes } from "react";
import { setCategory } from "@/lib/gallery-store";
import type { Category } from "@/lib/portfolio";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { filter: Exclude<Category, "all"> };

/** Link catre portofoliu care seteaza si filtrul galeriei (data-filter-link in designul original). */
export default function FilterLink({ filter, children, ...rest }: Props) {
  return (
    <a {...rest} data-filter-link={filter} onClick={() => setCategory(filter)}>
      {children}
    </a>
  );
}
