module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: "#faf6f2",      // 부드러운 베이지 배경
          card: "#ffffff",    // 카드 배경
          accent: "#f9c49a",  // 따뜻한 파스텔 오렌지
          accent2: "#f6a5a0", // 코랄 핑크
          accent3: "#ffdca8", // 연한 크림 옐로우
          text: "#2d2d2d",    // 더 진한 기본 텍스트 (가독성 향상)
          subtext: "#4a4a4a", // 더 진한 보조 텍스트 (가독성 향상)
          // 모바일 가독성을 위한 새로운 색상들
          "text-light": "#1a1a1a",     // 매우 진한 텍스트
          "text-medium": "#404040",    // 중간 톤 텍스트
          "text-soft": "#5a5a5a",     // 부드러운 텍스트
          "bg-soft": "#f8f4f0",       // 부드러운 배경
          "card-soft": "#fefefe",     // 부드러운 카드 배경
          "border-soft": "#e5e5e5",   // 부드러운 테두리
        }
      }
    }
  },
  plugins: [],
};
