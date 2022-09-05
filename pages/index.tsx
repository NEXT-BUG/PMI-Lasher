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
        <div className="bg-[#5A4371] p-10 md:space-y-10 text-center">
          <h1 className="text-white text-xl md:text-5xl lg:text-6xl font-bold">
            A World Class Supplier of Lashing Materials
          </h1>
          <div className="flex items-center w-full justify-between">
            <p className="text-white text-2xl w-1/2 text-left">
              Technology by itself doesn't make good problem solvers, technology
              magnifies your analytical. by itself doesn't make good problem
              solvers, technology magnifies your analytical skill technology by
              itself doesn't make good problem solvers, technology magnifies
              your analytical
            </p>
            <img src="https://i.ibb.co/N2VcT7X/logo.png" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
