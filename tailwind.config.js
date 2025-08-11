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
          text: "#3b3b3b",    // 기본 텍스트
          subtext: "#6b6b6b"  // 보조 텍스트
        }
      }
    }
  },
  plugins: [],
};
