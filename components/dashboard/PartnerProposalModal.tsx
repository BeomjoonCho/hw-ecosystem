"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

// 프로세스 단계 타입
type ProcessStep = "input" | "review" | "purchase";

interface PartnerProposalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// 폼 스키마
const proposalSchema = z.object({
  companyName: z.string().min(1, "업체명을 입력해주세요"),
  website: z.string().url("올바른 URL을 입력해주세요").optional().or(z.literal("")),
  ceo: z.string().optional(),
  foundedYear: z.string().optional(),
  location: z.string().optional(),
  mainTechnologies: z.string().optional(),
  coreTechnology: z.string().optional(),
  proposalBackground: z.string().optional(),
  technicalAdvantage: z.string().optional(),
  applicableFields: z.string().optional(),
  expectedEffects: z.string().optional(),
  references: z.string().optional(),
  additionalComments: z.string().optional(),
});

type ProposalFormValues = z.infer<typeof proposalSchema>;

export function PartnerProposalModal({
  open,
  onOpenChange,
}: PartnerProposalModalProps) {
  const [currentStep, setCurrentStep] = useState<ProcessStep>("input");

  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      companyName: "",
      website: "",
      ceo: "",
      foundedYear: "",
      location: "",
      mainTechnologies: "",
      coreTechnology: "",
      proposalBackground: "",
      technicalAdvantage: "",
      applicableFields: "",
      expectedEffects: "",
      references: "",
      additionalComments: "",
    },
  });

  const onSubmit = (data: ProposalFormValues) => {
    console.log("제안 데이터:", data);
    // TODO: API 호출로 데이터 제출
    alert("파트너 기술 제안이 제출되었습니다.");
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">파트너 기술 제안</DialogTitle>
          <DialogDescription>
            새로운 기술 파트너를 제안해주세요. 제안하신 내용은 내부 검토 후 진행됩니다.
          </DialogDescription>
        </DialogHeader>

        {/* 프로세스 진행 현황 */}
        <div className="my-6 p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1 flex-wrap">
              {/* 업체 입력 단계 */}
              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-2 ${
                    currentStep === "input"
                      ? "text-primary"
                      : currentStep === "review" || currentStep === "purchase"
                      ? "text-green-500"
                      : "text-muted-foreground"
                  }`}
                >
                  {currentStep === "input" ? (
                    <Circle className="h-5 w-5 fill-current" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5" />
                  )}
                  <span className="font-semibold">업체 입력</span>
                </div>
              </div>
              
              <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              
              {/* 내부 검토 및 평가 단계 */}
              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-2 ${
                    currentStep === "review"
                      ? "text-primary"
                      : currentStep === "purchase"
                      ? "text-green-500"
                      : "text-muted-foreground"
                  }`}
                >
                  {currentStep === "review" ? (
                    <Circle className="h-5 w-5 fill-current" />
                  ) : currentStep === "purchase" ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                  <span className="font-semibold">내부 검토 및 평가</span>
                  <span className="text-xs text-muted-foreground">(이노베이션 Lab)</span>
                </div>
              </div>
              
              <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              
              {/* 구매팀 연계 단계 */}
              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-2 ${
                    currentStep === "purchase" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {currentStep === "purchase" ? (
                    <Circle className="h-5 w-5 fill-current" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                  <span className="font-semibold">구매팀 연계</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 입력 폼 */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 업체 기본 정보 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">업체 기본 정보</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>업체명 *</FormLabel>
                      <FormControl>
                        <Input placeholder="업체명을 입력하세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>업체 홈페이지</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ceo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>대표자명</FormLabel>
                      <FormControl>
                        <Input placeholder="대표자명을 입력하세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="foundedYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>설립년도</FormLabel>
                      <FormControl>
                        <Input placeholder="예: 2020" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>본사 위치</FormLabel>
                      <FormControl>
                        <Input placeholder="예: 한국, 서울시" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="mainTechnologies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>주요 기술/제품</FormLabel>
                    <FormControl>
                      <Input placeholder="예: LLM, RAG, AI Platform" {...field} />
                    </FormControl>
                    <FormDescription>
                      쉼표로 구분하여 여러 기술을 입력할 수 있습니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coreTechnology"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>핵심 기술 설명</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="업체의 핵심 기술에 대해 설명해주세요"
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 상세 내용 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">상세 내용</h3>

              <FormField
                control={form.control}
                name="proposalBackground"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>제안 배경 및 목적</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="이 파트너를 제안하는 배경과 목적을 설명해주세요"
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="technicalAdvantage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>기술적 우위성</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="이 파트너의 기술적 우위성과 차별화 포인트를 설명해주세요"
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="applicableFields"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>적용 가능 분야</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="한화 계열사에서 적용 가능한 분야나 사업을 설명해주세요"
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expectedEffects"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>기대 효과</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="이 파트너와의 협업을 통해 기대되는 효과를 설명해주세요"
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="references"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>참고 자료</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="참고할 수 있는 자료나 링크를 입력해주세요"
                        className="min-h-20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalComments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>기타 의견</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="추가로 전달하고 싶은 내용이 있으면 입력해주세요"
                        className="min-h-20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 버튼 */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                취소
              </Button>
              <Button type="submit">제안 제출</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
