export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="w-full max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            HW Ecosystem Dashboard
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            The VC 스타일의 대시보드 플랫폼
          </p>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-2xl font-semibold">시작하기</h2>
          <p className="text-muted-foreground">
            프로젝트가 성공적으로 초기화되었습니다. 이제 대시보드 컴포넌트를 개발할 수 있습니다.
          </p>
          
          <div className="mt-6 space-y-2">
            <h3 className="font-semibold">설치된 주요 패키지:</h3>
            <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              <li>Next.js 16 (App Router)</li>
              <li>React 19 + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui</li>
              <li>TanStack Query</li>
              <li>TanStack Table</li>
              <li>Recharts</li>
              <li>Zustand</li>
              <li>React Hook Form + Zod</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
