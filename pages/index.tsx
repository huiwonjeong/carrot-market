import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-red-500">
      <h1 className="text-black">it works</h1>
      {/* check tailwind css working well */}
    </div>
  );
};

export default Home;
