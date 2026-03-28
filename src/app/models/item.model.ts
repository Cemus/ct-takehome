export interface RawItem {
  title: string;
  description: string;
  date: Date;
  titleHistory: string[];
}

export type Item = RawItem & { id: number };
