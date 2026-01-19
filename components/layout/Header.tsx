"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* 제목 */}
          <h1 className="text-xl font-bold whitespace-nowrap">기술 파트너 대시보드</h1>

          {/* 검색 영역 */}
          <div className="flex flex-1 items-center w-full lg:max-w-2xl">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="기술,파트너 통합 검색"
                className="pl-9 w-full"
              />
            </div>
          </div>

          {/* 네비게이션 */}
          <nav className="flex items-center gap-2 lg:gap-4 flex-wrap">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-accent"
            >
              전체
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-accent"
            >
              파트너
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-accent"
            >
              기술 특성
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-accent"
            >
              Key Player
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
