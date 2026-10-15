"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(range ? Math.min(100, (window.scrollY / range) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return <div id="scrollProgress" className="scroll-progress" aria-hidden="true" style={{ width: width + "%" }} />;
}
