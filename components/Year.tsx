"use client";

import { useEffect, useState } from "react";

export default function Year() {
  const [year, setYear] = useState(() => String(new Date().getFullYear()));
  useEffect(() => setYear(String(new Date().getFullYear())), []);
  return (
    <span className="year" suppressHydrationWarning>
      {year}
    </span>
  );
}
