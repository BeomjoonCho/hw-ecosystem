// 공통 타입 정의

export interface Statistic {
  label: string;
  value: string | number;
  change?: number; // 전년 대비 변화율 (%)
  trend?: 'up' | 'down' | 'neutral';
}

export interface TableData {
  id: string | number;
  [key: string]: any;
}

export interface FilterOption {
  label: string;
  value: string | number;
}

export interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}
