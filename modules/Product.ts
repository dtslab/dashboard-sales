export interface Product {
  upc: string;
  name: string;
  active: boolean;
  currentPrice: number | null;
  sales: {
    oneDay: number;
    tenDays: number;
    thirtyDays: number;
  }
}