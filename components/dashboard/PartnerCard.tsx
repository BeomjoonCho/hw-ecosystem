"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Partner } from "@/types";
import { Star } from "lucide-react";

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{partner.name}</CardTitle>
        <CardDescription className="text-base">{partner.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        {/* 주요 기술 태그 */}
        <div className="flex flex-wrap gap-2">
          {partner.technologies.map((tech, index) => (
            <Link
              key={index}
              href={`/partners?keyword=${encodeURIComponent(tech)}`}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              {tech}
            </Link>
          ))}
        </div>

        {/* 핵심 기술 */}
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">핵심 기술</span>
          <p className="text-sm font-medium">{partner.coreTechnology}</p>
        </div>

        {/* 수행 건수 */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>한화 계열 수행</span>
            <span>/</span>
            <span>전체 수행</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>{partner.projectCount}건</span>
            <span className="text-muted-foreground">/</span>
            <span>{partner.totalProjectCount}건</span>
          </div>
        </div>

        {/* 점수 표시 */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">기술 점수</span>
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{partner.technologyScore}/10</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">시장 점수</span>
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{partner.marketScore}/10</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/partners/${partner.id}`} className="w-full">
          <Button className="w-full" variant="default">
            상세보기
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
