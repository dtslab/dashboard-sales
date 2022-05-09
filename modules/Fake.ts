import type { Product } from './Product';
import type { Statistic } from './Stats';

export const stats: Statistic[] = [
  { name: 'Total Sales', stat: '10,142', percentageChange: 10.2, percentageImpact: "GOOD"},
  { name: 'Gross Revenue', stat: '$202,840', percentageChange: 14.9, percentageImpact: "GOOD" },
  { name: 'Net Profit', stat: '$50,710', percentageChange: 11.5, percentageImpact: "GOOD" },
  { name: 'Reviews', stat: '127' },
  { name: 'Returns', stat: '250', percentageChange: 21.2, percentageImpact: "BAD" },
];

export const products: Product[] = [
  {
    upc: '00008129',
    name: 'Foo',
    active: true,
    currentPrice: 30.00,
    sales: {
      oneDay: 5,
      tenDays: 10,
      thirtyDays: 30
    }
  },
  {
    upc: '00008130',
    name: 'Bar',
    active: true,
    currentPrice: 10.00,
    sales: {
      oneDay: 1,
      tenDays: 3,
      thirtyDays: 5
    }
  },
  {
    upc: '00008131',
    name: 'Baz',
    active: false,
    currentPrice: null,
    sales: {
      oneDay: 0,
      tenDays: 0,
      thirtyDays: 0
    }
  }
];