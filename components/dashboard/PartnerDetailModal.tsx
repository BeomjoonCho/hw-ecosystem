"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Partner } from "@/types";
import { Star, Building2, Calendar, Users, Globe, Award } from "lucide-react";

interface PartnerDetailModalProps {
  partner: Partner | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnerDetailModal({
  partner,
  open,
  onOpenChange,
}: PartnerDetailModalProps) {
  if (!partner) return null;

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{partner.name}</DialogTitle>
          <DialogDescription className="text-base">
            {partner.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="basic" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">기본 정보</TabsTrigger>
            <TabsTrigger value="projects">수행 목록</TabsTrigger>
            <TabsTrigger value="technology">기술 점수</TabsTrigger>
            <TabsTrigger value="market">시장 점수</TabsTrigger>
          </TabsList>

          {/* 기본 정보 탭 */}
          <TabsContent value="basic" className="space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    회사 정보
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">회사명: {partner.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">설립년도: 2010년</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">직원 수: 500+ 명</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    주요 기술
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {partner.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    핵심 기술
                  </h3>
                  <p className="text-sm">{partner.coreTechnology}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    한화 계열 수행
                  </h3>
                  <p className="text-lg font-semibold">{partner.projectCount}건</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    종합 평가
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">기술 점수</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">
                          {partner.technologyScore}/10
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">시장 점수</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">
                          {partner.marketScore}/10
                        </span>
                      </div>
                    </div>
                  </div>
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
      </DialogContent>
    </Dialog>
  );
}
