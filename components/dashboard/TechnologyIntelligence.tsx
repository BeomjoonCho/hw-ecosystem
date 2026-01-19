"use client";

import { TechnologyIntelligence as TechnologyIntelligenceType } from "@/types";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface TechnologyIntelligenceProps {
  data: TechnologyIntelligenceType;
}

export function TechnologyIntelligence({ data }: TechnologyIntelligenceProps) {
  return (
    <section className="space-y-4">
      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Technology Intelligence</h2>
        <Link
          href="#"
          className="text-sm text-primary hover:underline"
        >
          더보기
        </Link>
      </div>

      {/* 3개 컬럼 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 최신 기술 파트너 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">최신 기술 파트너</h3>
          <ul className="space-y-3">
            {data.latestPartners.map((partner, index) => (
              <li key={index} className="space-y-1">
                <div className="font-medium">{partner.name}</div>
                <div className="text-sm text-muted-foreground">
                  {partner.description}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 시장 동향 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">시장 동향</h3>
          <ul className="space-y-2">
            {data.marketTrends.map((article, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex-1 flex items-center gap-1"
                >
                  {article.title}
                  <ExternalLink className="h-3 w-3" />
                  {article.date && (
                    <span className="text-xs text-muted-foreground ml-1">
                      ({article.date})
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 컨퍼런스 동향 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">컨퍼런스 동향</h3>
          <ul className="space-y-2">
            {data.conferenceTrends.map((conference, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <a
                  href={conference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex-1 flex items-center gap-1"
                >
                  {conference.title}
                  <ExternalLink className="h-3 w-3" />
                  {conference.date && (
                    <span className="text-xs text-muted-foreground ml-1">
                      ({conference.date})
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
