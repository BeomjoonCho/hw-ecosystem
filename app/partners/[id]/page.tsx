"use client";

import { use } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Partner } from "@/types";
import { 
  Star, 
  Building2, 
  Calendar, 
  Users, 
  Globe, 
  Award, 
  MapPin,
  User,
  FileText,
  TrendingUp,
  ArrowLeft,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

// 임시 데이터 - 실제로는 API나 데이터베이스에서 가져와야 함
const getPartnerData = (id: string): Partner | null => {
  const partners: Partner[] = [
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
      website: "https://cohere.com",
      foundedYear: 2019,
      location: "캐나다, 토론토",
      ceo: "Aidan Gomez",
      employeeCount: 200,
      status: "비상장",
      businessYears: 5.2,
      patents: 12,
      similarCompanies: ["OpenAI", "Anthropic", "AI21 Labs"],
      keywords: ["AI통합솔루션", "OCR", "OCR기술", "기계학습", "자연어처리", "대형언어모델", "AI솔루션", "인공지능"],
      products: [
        { name: "Cohere Platform", description: "엔터프라이즈 LLM 플랫폼" },
        { name: "RAG API", description: "검색 증강 생성 API" },
        { name: "Embeddings", description: "텍스트 임베딩 서비스" },
      ],
      recentNews: [
        { title: "Cohere, Series C 투자 유치로 2억 7천만 달러 확보", date: "2024-06-27", source: "TechCrunch" },
        { title: "엔터프라이즈 LLM 시장에서 Cohere의 경쟁력 강화", date: "2024-05-15", source: "VentureBeat" },
      ],
      investmentRounds: [
        { round: "Series C", date: "2024-06", amount: "$270M" },
        { round: "Series B", date: "2023-02", amount: "$125M" },
      ],
      rndProjects: [
        { title: "대규모 언어모델 기반 엔터프라이즈 AI 플랫폼", category: "인공지능", period: "2023-2025" },
      ],
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
      website: "https://databricks.com",
      foundedYear: 2013,
      location: "미국, 샌프란시스코",
      ceo: "Ali Ghodsi",
      employeeCount: 5500,
      status: "상장",
      businessYears: 11.2,
      patents: 45,
      similarCompanies: ["Snowflake", "AWS", "Microsoft Azure"],
      keywords: ["데이터레이크", "빅데이터", "AI/ML", "데이터플랫폼", "Spark"],
      products: [
        { name: "Databricks Lakehouse", description: "통합 데이터 플랫폼" },
        { name: "Delta Lake", description: "오픈소스 레이크하우스 포맷" },
        { name: "MLflow", description: "머신러닝 라이프사이클 관리" },
      ],
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
      website: "https://hexagon.com",
      foundedYear: 1992,
      location: "스웨덴, 스톡홀름",
      ceo: "Ola Rollén",
      employeeCount: 24000,
      status: "상장",
      businessYears: 32.2,
      patents: 1200,
      similarCompanies: ["Autodesk", "Dassault Systèmes", "PTC"],
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
      website: "https://kopens.com",
      foundedYear: 2010,
      location: "한국, 경상남도 창원시",
      ceo: "이상부",
      employeeCount: 500,
      status: "비상장",
      businessYears: 14.2,
      patents: 25,
      similarCompanies: ["PTC ThingWorx", "Siemens MindSphere", "GE Predix"],
      keywords: ["IIoT", "스마트팩토리", "엣지컴퓨팅", "디지털트윈", "산업IoT"],
      products: [
        { name: "플랜트펄스", description: "산업용 IoT 플랫폼" },
        { name: "엣지 게이트웨이", description: "OPC-UA 엣지 게이트웨이" },
        { name: "무선 센서", description: "모넷 무선 센서" },
      ],
      recentNews: [
        { title: "[국책과제] AX 실증 산단 과제 선정", date: "2026-01-16" },
        { title: "[한화오션] IIoT 대용량 데이터 파이프라인 아키텍처 컨설팅 수주", date: "2026-01-16" },
        { title: "[삼성전자] 차세대 물류센터 엣지/IIoT 플랫폼 프로젝트 수주", date: "2026-01-16" },
      ],
      rndProjects: [
        { title: "산업용 IoT 플랫폼 기술 개발", category: "산업IoT", period: "2020-2023" },
        { title: "디지털 트윈 기반 스마트 팩토리 구축", category: "스마트제조", period: "2023-2025" },
      ],
    },
  ];

  return partners.find((p) => p.id === id) || null;
};

export default function PartnerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const partner = getPartnerData(id);

  if (!partner) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">파트너를 찾을 수 없습니다</h1>
            <Link href="/">
              <Button>홈으로 돌아가기</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // 수행 목록 샘플 데이터
  const projectList = [
    {
      id: "1",
      name: "스마트 팩토리 구축 프로젝트",
      company: "한화솔루션",
      period: "2024.01 - 2024.06",
      status: "완료",
    },
    {
      id: "2",
      name: "제조 데이터 플랫폼 구축",
      company: "한화케미칼",
      period: "2023.07 - 2024.03",
      status: "완료",
    },
    {
      id: "3",
      name: "디지털 트윈 시스템 도입",
      company: "한화에어로스페이스",
      period: "2024.03 - 2024.12",
      status: "진행중",
    },
    {
      id: "4",
      name: "AI 기반 예측 정비 시스템",
      company: "한화파워시스템",
      period: "2024.06 - 2025.03",
      status: "진행중",
    },
    {
      id: "5",
      name: "엣지 컴퓨팅 인프라 구축",
      company: "한화시스템",
      period: "2024.09 - 2025.06",
      status: "계획중",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* 뒤로가기 버튼 */}
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            목록으로
          </Button>
        </Link>

        {/* 헤더 섹션 */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{partner.name}</h1>
              <p className="text-lg text-muted-foreground">{partner.description}</p>
            </div>
            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                홈페이지
              </a>
            )}
          </div>

          {/* 주요 정보 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">상태</div>
              <div className="text-lg font-semibold">{partner.status || "비상장"}</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">업력</div>
              <div className="text-lg font-semibold">{partner.businessYears?.toFixed(1) || "N/A"}년</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">임직원 수</div>
              <div className="text-lg font-semibold">{partner.employeeCount?.toLocaleString() || "N/A"}명</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">특허</div>
              <div className="text-lg font-semibold">{partner.patents || 0}개</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">기본 정보</TabsTrigger>
            <TabsTrigger value="projects">수행 목록</TabsTrigger>
            <TabsTrigger value="technology">기술 점수</TabsTrigger>
            <TabsTrigger value="market">시장 점수</TabsTrigger>
          </TabsList>

          {/* 기본 정보 탭 - thevc.kr 스타일로 확장 */}
          <TabsContent value="basic" className="space-y-8 mt-6">
            {/* 기업 개요 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">기업 개요</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">회사명</span>
                    <span className="text-muted-foreground">{partner.name}</span>
                  </div>
                  {partner.foundedYear && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">설립년도</span>
                      <span className="text-muted-foreground">{partner.foundedYear}년</span>
                    </div>
                  )}
                  {partner.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">본사 위치</span>
                      <span className="text-muted-foreground">{partner.location}</span>
                    </div>
                  )}
                  {partner.ceo && (
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">대표자</span>
                      <span className="text-muted-foreground">{partner.ceo}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  {partner.similarCompanies && partner.similarCompanies.length > 0 && (
                    <div>
                      <span className="font-semibold">유사 기업</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {partner.similarCompanies.map((company, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 연관 키워드 */}
            {partner.keywords && partner.keywords.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">연관 키워드</h2>
                <div className="flex flex-wrap gap-2">
                  {partner.keywords.map((keyword, index) => (
                    <Link
                      key={index}
                      href={`/partners?keyword=${encodeURIComponent(keyword)}`}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {keyword}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 주요 제품/서비스 */}
            {partner.products && partner.products.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">주요 제품/서비스</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {partner.products.map((product, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-1">{product.name}</h3>
                      {product.description && (
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 핵심 기술 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">핵심 기술</h2>
              <div className="border rounded-lg p-6">
                <p className="text-lg">{partner.coreTechnology}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {partner.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 수행 건수 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">수행 건수</h2>
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>한화 계열 수행</span>
                  <span>/</span>
                  <span>전체 수행</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="text-4xl font-bold">{partner.projectCount}</div>
                    <div className="text-lg text-muted-foreground">건</div>
                  </div>
                  <span className="text-2xl text-muted-foreground">/</span>
                  <div className="flex items-center gap-2">
                    <div className="text-4xl font-bold">{partner.totalProjectCount}</div>
                    <div className="text-lg text-muted-foreground">건</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 최근 뉴스 */}
            {partner.recentNews && partner.recentNews.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">최근 뉴스</h2>
                <div className="space-y-3">
                  {partner.recentNews.map((news, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-accent transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{news.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {news.date}
                            </span>
                            {news.source && <span>{news.source}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 투자 유치 */}
            {partner.investmentRounds && partner.investmentRounds.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">투자 유치</h2>
                <div className="space-y-3">
                  {partner.investmentRounds.map((round, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold">{round.round}</span>
                          <span className="text-sm text-muted-foreground ml-2">{round.date}</span>
                        </div>
                        {round.amount && (
                          <span className="font-semibold text-primary">{round.amount}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 국가 R&D */}
            {partner.rndProjects && partner.rndProjects.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">국가 R&D</h2>
                <div className="space-y-3">
                  {partner.rndProjects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="px-2 py-1 bg-secondary rounded">{project.category}</span>
                        <span>{project.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 종합 평가 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">종합 평가</h2>
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-3 text-lg">
                  <span className="font-semibold">기술 점수</span>
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{partner.technologyScore}/10</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="font-semibold">시장 점수</span>
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{partner.marketScore}/10</span>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 수행 목록 탭 */}
          <TabsContent value="projects" className="space-y-4 mt-6">
            <div className="space-y-4">
              {projectList.map((project) => (
                <div
                  key={project.id}
                  className="border rounded-lg p-4 hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{project.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {project.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.period}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        project.status === "완료"
                          ? "bg-green-500/20 text-green-500"
                          : project.status === "진행중"
                          ? "bg-blue-500/20 text-blue-500"
                          : "bg-gray-500/20 text-gray-500"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* 기술 점수 탭 - 기술 우수성 */}
          <TabsContent value="technology" className="space-y-6 mt-6">
            <div className="space-y-6">
              {/* A: 기술 완성도 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">A. 기술 완성도</h3>
                
                <div className="space-y-4 pl-4">
                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">A1. 기능 충족도</h4>
                    <p className="text-sm text-muted-foreground">
                      계열사 사업 수행을 위한 필요 기능 보유 여부
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">9.0/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">A2. 커스터마이징 용이성</h4>
                    <p className="text-sm text-muted-foreground">
                      업무 요건 변화/추가에 따른 기존 기능 개선 및 추가 기능 구현 가능 여부
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">8.6/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "86%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">A3. 신뢰성/보안성</h4>
                    <p className="text-sm text-muted-foreground">
                      인증/수상 여부, 권한에 따른 기능 제한 등 보안 기능 지원 여부
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">8.0/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* B: 비즈니스 적합성 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">B. 비즈니스 적합성</h3>
                
                <div className="space-y-4 pl-4">
                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">B1. 서비스 다양성/혁신성</h4>
                    <p className="text-sm text-muted-foreground">
                      차별화된 서비스 제공 가능 여부 (생산/공정관리 등)
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">9.4/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">B2. 글로벌 지원</h4>
                    <p className="text-sm text-muted-foreground">
                      다국어 지원 등 해외 사업장 확대/적용을 위한 Globalization 기능 지원 여부
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">8.4/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "84%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">B3. 적용 사례</h4>
                    <p className="text-sm text-muted-foreground">
                      대규모 사업장 및 계열사 유사산업 대상 적용 사례 보유 유무
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">9.6/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 종합 기술 점수 */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">종합 기술 점수</span>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold">
                      {partner.technologyScore}/10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 시장 점수 탭 - 파트너십 역량 */}
          <TabsContent value="market" className="space-y-6 mt-6">
            <div className="space-y-6">
              {/* C: 파트너십 효율성 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">C. 파트너십 효율성</h3>
                
                <div className="space-y-4 pl-4">
                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">C1. 벤더 재무건전성 및 명성</h4>
                    <p className="text-sm text-muted-foreground">
                      안정적/지속적 기술 제공을 위한 재무 안정성 및 대외신인도 수준
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">9.2/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">C2. 교육 및 지원</h4>
                    <p className="text-sm text-muted-foreground">
                      사용자 교육, 지속적 개선, 장애 처리 등 고객 요청 사항에 대한 신속한 대응
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">9.0/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">C3. 비용 효율성</h4>
                    <p className="text-sm text-muted-foreground">
                      Set-up, License, Maintenance 등 기술 도입/운영을 위한 소요 비용
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">8.6/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "86%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* D: 전략적 가치 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">D. 전략적 가치</h3>
                
                <div className="space-y-4 pl-4">
                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">D1. 신기술 연계</h4>
                    <p className="text-sm text-muted-foreground">
                      고객사가 추구하는 신기술 기반의 기능 개선/확장 및 적용 용이성
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">9.4/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">D2. 소스코드 공유</h4>
                    <p className="text-sm text-muted-foreground">
                      기술 내재화 및 공동개발 등을 위한 소스코드 공유 가능 여부
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">8.8/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 space-y-2">
                    <h4 className="font-semibold">D3. 협업 의지</h4>
                    <p className="text-sm text-muted-foreground">
                      사업 협업 관계 구축에 대한 적극성, 관련 요청에 대한 신속한 대응
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">평가 점수</span>
                        <span className="text-sm font-semibold">9.6/10.0</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 종합 시장 점수 */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">종합 시장 점수</span>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold">
                      {partner.marketScore}/10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
