// src/components/Dashboard.tsx

import { useState } from "react";
import RecordForm from "./RecordForm";
import StatsCards from "./ StatsCards";
import ChartView from "./ChartView";
import type { Record } from "../types";
import { calculateSummary } from "../utils/calculations";

const Dashboard = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const initialBirds = 330;

  const addRecord = (record: Record) => {
    setRecords([...records, record]);
  };

  const summary = calculateSummary(records, initialBirds);

  return (
    <div>
      <h1>Broiler Dashboard</h1>

      <RecordForm onAdd={addRecord} />

      <StatsCards summary={summary} />

      <ChartView data={records} />
    </div>
  );
};

export default Dashboard;
