"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { PartnerGrid } from "@/components/dashboard/PartnerGrid";
import { Partner } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

// 모든 파트너 데이터 (실제로는 API나 데이터베이스에서 가져와야 함)
const getAllPartners = (): Partner[] => {
  return [
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
};

// 키워드로 파트너 필터링
const filterPartnersByKeyword = (partners: Partner[], keyword: string): Partner[] => {
  if (!keyword) return partners;

  const lowerKeyword = keyword.toLowerCase();
  return partners.filter((partner) => {
    // technologies 배열에서 검색
    const techMatch = partner.technologies.some(
      (tech) => tech.toLowerCase().includes(lowerKeyword)
    );
    
    // keywords 배열에서 검색
    const keywordMatch = partner.keywords?.some(
      (kw) => kw.toLowerCase().includes(lowerKeyword)
    );

    return techMatch || keywordMatch;
  });
};

function PartnersContent() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const allPartners = getAllPartners();
  const filteredPartners = filterPartnersByKeyword(allPartners, keyword);

  return (
    <>
      {/* 헤더 섹션 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로
              </Button>
            </Link>
            {keyword && (
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">
                  키워드: <span className="text-primary">{keyword}</span>
                </h1>
                <Link href="/partners">
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
            {!keyword && (
              <h1 className="text-2xl font-bold">전체 파트너</h1>
            )}
          </div>
        </div>
        
        {keyword && (
          <div className="mb-4">
            <p className="text-muted-foreground">
              "{keyword}" 키워드를 가진 파트너 {filteredPartners.length}개를 찾았습니다.
            </p>
          </div>
        )}
      </div>

      {/* 파트너 그리드 */}
      {filteredPartners.length > 0 ? (
        <PartnerGrid partners={filteredPartners} />
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            "{keyword}" 키워드를 가진 파트너를 찾을 수 없습니다.
          </p>
          <Link href="/partners">
            <Button>전체 파트너 보기</Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Suspense fallback={<div>로딩 중...</div>}>
          <PartnersContent />
        </Suspense>
      </main>
    </div>
  );
}
