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
  //darkMode: "media", //이경우는 사용자가 브라우저 및 컴퓨터의 기본 세팅에 따라 달라짐
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
  //tailwindcss 의 form 추가
};
