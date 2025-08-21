"use client";
import { useState, useEffect } from "react";

export function Year() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
