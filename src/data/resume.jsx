export default {
  // ...기존 필드들
  timeline: [
    {
      slug: "kappo-frontend-parttime",
      title: "Frontend Developer @ Kappo (Part-time)",
      period: "2025.04 – 현재",
      place: "Kyoto",
      desc: "메뉴/주문 UI 개선, 간사이 사투리 변환 웹서비스 PoC.",
      details: [
        "주문 플로우 UI 재설계: 이탈률 18% → 9% 개선",
        "간사이 사투리 변환 PoC: OpenAI API, 라벨링 300문장",
        "웹 성능 최적화: CLS 0.28→0.06, LCP 3.4s→2.1s",
      ],
    },
    {
      slug: "web-developer-seoul",
      title: "Web Developer",
      period: "2022 – 2023",
      place: "Seoul",
      desc: "지도 기반 리뷰 서비스, 인벤토리 관리 웹앱 개발.",
      details: [
        "Google Maps 기반 결제수단 리뷰 서비스 MVP",
        "재고관리 웹앱 CRUD/검색/CSV 업·다운로드",
        "AWS Lightsail/CloudFront로 배포 자동화",
      ],
    },
    // ...
  ],
};
