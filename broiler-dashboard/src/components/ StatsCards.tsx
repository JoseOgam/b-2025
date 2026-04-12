// src/components/StatsCards.tsx

import type { Summary } from "../types";

const StatsCards = ({ summary }: { summary: Summary }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>Total Feed: {summary.totalFeed.toFixed(2)} kg</div>
      <div>Deaths: {summary.totalDeaths}</div>
      <div>FCR: {summary.fcr.toFixed(2)}</div>
      <div>Mortality: {summary.mortalityRate.toFixed(2)}%</div>
    </div>
  );
};

export default StatsCards;
