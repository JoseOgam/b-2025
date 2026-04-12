// src/components/ChartView.tsx

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import type { Record } from "../types";

const ChartView = ({ data }: { data: Record[] }) => {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="avgWeight" />
    </LineChart>
  );
};

export default ChartView;
