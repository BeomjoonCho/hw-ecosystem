"use client";

import { Header } from "@/components/layout/Header";
import { PartnerGrid } from "@/components/dashboard/PartnerGrid";
import { TechnologyIntelligence } from "@/components/dashboard/TechnologyIntelligence";
import { Partner, TechnologyIntelligence as TechnologyIntelligenceType } from "@/types";

// 샘플 데이터 (상세 페이지에서 사용할 확장 데이터는 /app/partners/[id]/page.tsx에 정의됨)
const samplePartners: Partner[] = [
  {
    id: "1",
    name: "Cohere",
    description: "Enterprise LLM - RAG Platform",
    technologies: ["LLM", "RAG", "Embeddings"],
    coreTechnology: "엔터프라이즈급 대규모 언어 모델 및 RAG 플랫폼",
    projectCount: 2,
    totalProjectCount: 208,
    technologyScore: 4.3,
    marketScore: 5,
    keywords: ["AI통합솔루션", "OCR", "OCR기술", "기계학습", "자연어처리", "대형언어모델", "AI솔루션", "인공지능"],
  },
  {
    id: "2",
    name: "Databricks",
    description: "Manufacturing Data Platform",
    technologies: ["Lakehouse", "AI Data Points"],
    coreTechnology: "통합 데이터 레이크하우스 아키텍처",
    projectCount: 5,
    totalProjectCount: 342,
    technologyScore: 4.7,
    marketScore: 5,
    keywords: ["데이터레이크", "빅데이터", "AI/ML", "데이터플랫폼", "Spark"],
  },
  {
    id: "3",
    name: "Hexagon",
    description: "Digital Twin - Smart Factory",
    technologies: ["3D Twin", "Manufacturing Analysis"],
    coreTechnology: "실시간 디지털 트윈 시뮬레이션",
    projectCount: 5,
    totalProjectCount: 89,
    technologyScore: 4.4,
    marketScore: 5,
    keywords: ["디지털트윈", "스마트팩토리", "제조업", "3D시뮬레이션"],
  },
  {
    id: "4",
    name: "KOPENS",
    description: "Industrial IIoT - Digital Twin Platform",
    technologies: ["IIoT Platform", "Edge Computing", "Digital Twin"],
    coreTechnology: "플랜트펄스® 산업용 IoT 플랫폼",
    projectCount: 3,
    totalProjectCount: 129,
    technologyScore: 4.7,
    marketScore: 5,
    keywords: ["IIoT", "스마트팩토리", "엣지컴퓨팅", "디지털트윈", "산업IoT"],
  },
];

const sampleIntelligence: TechnologyIntelligenceType = {
  latestPartners: [
    {
      name: "Cohere",
      description: "Enterprise LLM - RAG Platform",
    },
    {
      name: "Databricks",
      description: "Manufacturing Data Platform",
    },
    {
      name: "Hexagon",
      description: "Digital Twin - Smart Factory",
    },
    {
      name: "KOPENS",
      description: "Industrial IIoT - Digital Twin Platform",
    },
  ],
  marketTrends: [
    {
      title: "AI Investment Boom to Lift U.S. Corporate Bond Issuance to $2.46 Trillion in 2026",
      url: "https://m.economictimes.com/markets/bonds/ai-investment-boom-to-lift-us-corporate-bond-issuance-to-2-46-trillion-in-2026/articleshow/126557684.cms",
      date: "2026.01",
      source: "Economic Times",
    },
    {
      title: "Onix 2026 AI Trends: Multi-agent Systems Redefine Enterprise Workflows",
      url: "https://timesofindia.indiatimes.com/technology/tech-news/onix-2026-ai-trends-multi-agent-systems-redefine-enterprise-workflows/articleshow/126487254.cms",
      date: "2026.01",
      source: "Times of India",
    },
    {
      title: "VCs Predict Tiny Teams, Personal Agents, ROI-Focus as Key Tech Trends in 2026",
      url: "https://www.businessinsider.com/tech-trends-to-watch-in-startups-venture-capital-2026",
      date: "2026.01",
      source: "Business Insider",
    },
    {
      title: "South Korea's Push for a Native AI Model Faces Controversy",
      url: "https://www.wsj.com/tech/ai/the-row-over-south-koreas-push-for-a-native-ai-model-chinese-code-4c047a6f",
      date: "2026.01",
      source: "Wall Street Journal",
    },
  ],
  conferenceTrends: [
    {
      title: "NVIDIA GTC 2026",
      url: "https://www.nvidia.com/gtc/",
      date: "2026.03",
    },
    {
      title: "AI Impact Summit 2026",
      url: "https://www.aibmag.com/top-10-ai-conferences-summits/top-ai-conferences-summits-2026/",
      date: "2026.02",
    },
    {
      title: "Gartner Data & Analytics Summit 2026",
      url: "https://www.gartner.com/en/conferences/na/data-analytics-us",
      date: "2026.03",
    },
    {
      title: "All Things AI 2026",
      url: "https://2026.allthingsai.org/",
      date: "2026.03",
    },
    {
      title: "HumanX 2026",
      url: "https://www.humanx.ai/",
      date: "2026.04",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12 max-w-7xl">
        <PartnerGrid partners={samplePartners} />
        <TechnologyIntelligence data={sampleIntelligence} />
      </main>
    </div>
  );
}
