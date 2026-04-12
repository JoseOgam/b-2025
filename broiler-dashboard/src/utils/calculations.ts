// src/utils/calculations.ts

import type { Record, Summary } from "../types";

export const calculateSummary = (
  records: Record[],
  initialBirds: number,
): Summary => {
  const totalFeed = records.reduce((sum, r) => sum + r.feedKg, 0);
  const totalDeaths = records.reduce((sum, r) => sum + r.deaths, 0);

  const finalBirds = initialBirds - totalDeaths;

  const lastWeight =
    records.length > 0 ? records[records.length - 1].avgWeight : 0;

  const totalLiveWeightKg = (finalBirds * lastWeight) / 1000;

  const fcr = totalFeed / (totalLiveWeightKg || 1);

  const mortalityRate = (totalDeaths / initialBirds) * 100;

  return {
    totalFeed,
    totalDeaths,
    fcr,
    mortalityRate,
  };
};
