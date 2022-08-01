/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // page 안에 어떤 폴더 **든 그리고 js jsx ts tsx 파일 확장자를 가진 어떤 파일 이든 tailwind를 사용하겠다는 설정
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
