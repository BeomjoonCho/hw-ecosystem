# HW Ecosystem Dashboard

The VC (https://thevc.kr/) 스타일의 대시보드 형태 웹사이트 프로젝트입니다.

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui
- **상태 관리**: 
  - TanStack Query (서버 상태)
  - Zustand (클라이언트 상태)
- **테이블**: TanStack Table
- **차트**: Recharts
- **폼**: React Hook Form + Zod
- **애니메이션**: Framer Motion

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
hw-ecosystem/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   └── globals.css        # 전역 스타일
├── components/             # React 컴포넌트
│   └── ui/                # shadcn/ui 컴포넌트
├── lib/                    # 유틸리티 함수
│   ├── providers.tsx      # TanStack Query Provider
│   ├── api-client.ts      # Axios 클라이언트
│   └── utils.ts           # 공통 유틸리티
├── hooks/                  # 커스텀 훅
├── stores/                # Zustand 스토어
│   └── useDashboardStore.ts
├── types/                  # TypeScript 타입 정의
│   └── index.ts
└── docs/                   # 문서
    └── development-stack.md
```

## 다음 단계

1. 대시보드 레이아웃 구성
2. 통계 카드 컴포넌트 개발
3. 데이터 테이블 구현
4. 차트 및 시각화 추가
5. 필터 및 검색 기능 구현

## 참고 문서

자세한 개발 스택 정보는 [docs/development-stack.md](./docs/development-stack.md)를 참고하세요.
