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
            <h1 className="text-white text-4xl md:text-5xl lg:text-8xl font-extrabold">
              International <br /> Lashing System
            </h1>
            <p className="text-white text-3xl font-semibold md:text-3xl lg:text-6xl">
              A world player specialized in <br /> cargo securing technology
            </p>
          </div>
          <img
            className="w-screen opacity-60"
            src="https://i.ibb.co/NVMhR69/bg-1.png"
            alt="bg"
          />
        </div>
        <div className="bg-[#5A4371] md:p-10 p-5 md:space-y-10 text-center space-y-8 flex flex-col items-center">
          <h1 className="md:w-3/4 text-white uppercase text-3xl md:text-5xl lg:text-6xl font-bold">
            A World Class Supplier of Lashing Materials
          </h1>
          <div className="flex md:mx-20 flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col space-y-5">
              <p className="text-white text-xl font-light md:w-5/4 text-center md:text-3xl md:text-left">
                Technology by itself doesn't make good problem solvers,
                technology magnifies your analytical.
              </p>
              <p className="text-white text-xl font-light md:w-5/4 text-center md:text-3xl md:text-left">
                by itself doesn't make good problem solvers, technology
                magnifies your analytical skill
              </p>
              <p className="text-white text-xl font-light md:w-5/4 text-center md:text-3xl md:text-left">
                technology by itself doesn't make good problem solvers,
                technology magnifies your analytical
              </p>
            </div>
            <img
              className="hidden md:inline-flex h-32"
              src="https://i.ibb.co/yd5xhP0/Whats-App-Image-2022-08-29-at-11-12-2.png"
            />
          </div>
        </div>
        <div className="bg-[#4257A8]">
          <div className="w-screen p-10 pt-11 md:space-y-10 text-center z-50 flex flex-col items-center">
            <h1 className="uppercase pb-3 mb-3 text-black border-b-4 border-red-600 text-4xl md:text-5xl lg:text-8xl font-bold">
              About SoftScope
            </h1>
            <h1 className="text-white uppercase text-3xl md:text-5xl mb-10 lg:text-6xl font-bold">
              We take safety and security seriously
            </h1>
            <p className="text-white text-3xl font-semibold md:text-3xl lg:text-6xl">
              <div className="flex flex-col space-y-5">
                <p className="text-white text-xl font-light text-center md:text-3xl md:text-left">
                  Technology by itself doesn't make good problem solvers,
                  technology magnifies your analytical.
                </p>
                <p className="text-white text-xl font-light text-center md:text-3xl md:text-left">
                  by itself doesn't make good problem solvers, technology
                  magnifies your analytical skill
                </p>
                <p className="text-white text-xl font-light text-center md:text-3xl md:text-left">
                  technology by itself doesn't make good problem solvers,
                  technology magnifies your analytical
                </p>
              </div>
            </p>
          </div>
        </div>
        <div>
          <div className="w-screen flex flex-col md:flex-row gap-10 p-10 md:mt-20 md:space-y-10 lg:text-left text-center md:space-x-7 justify-evenly z-50">
            <div className="flex flex-col items-center gap-10">
              <img
                src="https://i.ibb.co/yd5xhP0/Whats-App-Image-2022-08-29-at-11-12-2.png"
                alt=""
              />
              <div className="flex">
                <img src="https://i.ibb.co/28GBtY1/Group-109.png" />
                <img src="https://i.ibb.co/ZRsNtmF/Group-110.png" />
              </div>
            </div>
            <div className="rounded-md shadow-md bg-white mt-10 md:w-3/2 md:mt-0">
              <div className="bg-red-600 rounded-t-md border-tr p-10 text-white text-center md:text-left">
                <div className="space-y-5">
                  <h3 className="text-3xl font-bold">
                    Download Your Catalogue
                  </h3>
                  <p className="text-xl text-light">
                    Are you looking for some premium lashing equipment?
                  </p>
                  <p className="text-xl text-light">
                    Fill in your contact details below and we will send you our
                    catalogue by email
                  </p>
                </div>
              </div>
              <div className="flex justify-evenly items-center h-1/2 py-7 px-10">
                <div className="flex flex-col gap-10">
                  <input
                    className="border-b-2 w-xl focus:border-b-3 outline-0"
                    type="text"
                    placeholder="First Name"
                  />

                  <input
                    className="border-b-2 w-xl focus:border-b-3 outline-0"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col gap-10">
                  <input
                    className="border-b-2 w-xl focus:border-b-3 outline-0"
                    type="text"
                    placeholder="Last Name"
                  />

                  <input
                    className="border-b-2 w-xl focus:border-b-3 outline-0"
                    type="text"
                    placeholder="Company"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
