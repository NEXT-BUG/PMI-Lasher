import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>PMI Lasher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div>
          <div className="w-screen absolute p-10 md:mt-20 md:space-y-10 lg:text-left text-center z-50">
            <h1 className="text-white text-xl md:text-5xl lg:text-8xl font-bold">
              International <br /> Lashing System
            </h1>
            <p className="text-white text-lg md:text-3xl lg:text-6xl">
              A world player specialized in <br /> cargo securing technology
            </p>
          </div>
          <img
            className="w-screen opacity-60"
            src="https://i.ibb.co/NVMhR69/bg-1.png"
            alt="bg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
