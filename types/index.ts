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

// 기술 파트너 대시보드 타입
export interface Partner {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  coreTechnology: string; // 핵심 기술
  projectCount: number; // 한화 계열 수행 건수
  totalProjectCount: number; // 전체 수행 건수
  technologyScore: number;
  marketScore: number;
  // 기본 정보 확장 필드 (thevc.kr 참고)
  website?: string; // 홈페이지
  foundedYear?: number; // 설립년도
  location?: string; // 본사 위치
  ceo?: string; // 대표자
  employeeCount?: number; // 임직원 수
  status?: string; // 상태 (상장/비상장)
  businessYears?: number; // 업력
  patents?: number; // 특허 수
  similarCompanies?: string[]; // 유사 기업
  keywords?: string[]; // 연관 키워드
  products?: Array<{
    name: string;
    description?: string;
  }>; // 주요 제품/서비스
  recentNews?: Array<{
    title: string;
    date: string;
    source?: string;
  }>; // 최근 뉴스
  investmentRounds?: Array<{
    round: string;
    date: string;
    amount?: string;
  }>; // 투자 유치
  rndProjects?: Array<{
    title: string;
    category: string;
    period: string;
  }>; // 국가 R&D
}

export interface TechnologyIntelligence {
  latestPartners: Array<{
    name: string;
    description: string;
  }>;
  marketTrends: Array<{
    title: string;
    url: string;
    date?: string;
    source?: string;
  }>; // 시장 동향 - 실제 기사 링크
  conferenceTrends: Array<{
    title: string;
    url: string;
    date?: string;
  }>; // 컨퍼런스 동향 - 실제 컨퍼런스 링크
}
