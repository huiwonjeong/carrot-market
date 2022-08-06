import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <h2 className="text-[100px]">Hello</h2>
      <div className="bg-[url('/vercel.svg')] bg-cover h-40 w-100"></div>
      <h2 className="text-[#ff3232] text-[50px]">Color</h2>
    </div>
  );
  // Just intime compiler 덕분에 tailwindCss의 규정에 벗어나서 사용할수 있다.
};

export default Home;
