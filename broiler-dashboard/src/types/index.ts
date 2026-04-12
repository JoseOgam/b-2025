export interface Record {
  day: number;
  feedKg: number;
  deaths: number;
  avgWeight: number; // in grams
}

export interface Summary {
  totalFeed: number;
  totalDeaths: number;
  fcr: number;
  mortalityRate: number;
}
export interface RecordProps {
  onAdd?: (record: Record) => void;
}
