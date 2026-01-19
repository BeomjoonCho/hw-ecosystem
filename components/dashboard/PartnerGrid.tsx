"use client";

import { useState } from "react";
import { Partner } from "@/types";
import { PartnerCard } from "./PartnerCard";
import { PartnerProposalModal } from "./PartnerProposalModal";
import { Button } from "@/components/ui/button";

interface PartnerGridProps {
  partners: Partner[];
}

export function PartnerGrid({ partners }: PartnerGridProps) {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  return (
    <section className="space-y-6">
      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            기술 파트너 목록
          </h2>
        </div>
        <Button 
          variant="outline" 
          className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600 hover:border-purple-700"
          onClick={() => setIsProposalModalOpen(true)}
        >
          파트너 기술 제안
        </Button>
      </div>

      {/* 파트너 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>

      {/* 파트너 기술 제안 모달 */}
      <PartnerProposalModal
        open={isProposalModalOpen}
        onOpenChange={setIsProposalModalOpen}
      />
    </section>
  );
}
