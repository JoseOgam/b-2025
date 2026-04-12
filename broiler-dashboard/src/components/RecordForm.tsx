// src/components/RecordForm.tsx

import { useState } from "react";
import type { Record } from "../types";

interface Props {
  onAdd: (record: Record) => void;
}

const RecordForm = ({ onAdd }: Props) => {
  const [form, setForm] = useState<Record>({
    day: 1,
    feedKg: 0,
    deaths: 0,
    avgWeight: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: Number(e.target.value),
    });
  };

  return (
    <div className="p-4 border rounded">
      <h3>Add Daily Record</h3>

      <input name="day" placeholder="Day" onChange={handleChange} />
      <input name="feedKg" placeholder="Feed (kg)" onChange={handleChange} />
      <input name="deaths" placeholder="Deaths" onChange={handleChange} />
      <input
        name="avgWeight"
        placeholder="Avg Weight (g)"
        onChange={handleChange}
      />

      <button onClick={() => onAdd(form)}>Add</button>
    </div>
  );
};

export default RecordForm;
