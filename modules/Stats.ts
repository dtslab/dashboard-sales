export type Impact = "GOOD" | "BAD" | "NEUTRAL";

export interface Statistic {
  name: string;
  stat: string | number;
  percentageChange?: number;
  percentageImpact?: Impact;
};