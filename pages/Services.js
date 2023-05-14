import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Logoh from "../public/logo.png";
import Home1 from "../public/elanpic2.PNG";
import Home2 from "../public/elan1.PNG";
import Home3 from "../public/elan2.PNG";
import Home4 from "../public/elan3.PNG";
import Home5 from "../public/elan4.PNG";
import Show1 from "../public/show1.PNG";
import Show2 from "../public/show2.PNG";
import Show3 from "../public/show3.PNG";
import Show4 from "../public/show4.PNG";
import Show5 from "../public/show5.PNG";
import Show6 from "../public/show6.PNG";
import Show7 from "../public/show7.PNG";
import Show8 from "../public/show8.PNG";
import Brand1 from "../public/brand1.PNG";
import Brand2 from "../public/brand2.PNG";
import Brand3 from "../public/brand3.PNG";
import Brand4 from "../public/brand4.PNG";
import Brand5 from "../public/brand5.PNG";
import Brand6 from "../public/brand6.PNG";
import Brand7 from "../public/brand7.PNG";
import Brand8 from "../public/brand8.PNG";
import Brand9 from "../public/brand9.PNG";
import Brand10 from "../public/brand10.PNG";
import Brand11 from "../public/brand11.PNG";
import Brand12 from "../public/brand12.PNG";
import Brand13 from "../public/brand13.PNG";
import Brand14 from "../public/brand14.PNG";
import Brand15 from "../public/brand15.PNG";
import Image from "next/image";
import Link from "next/link";
//importing animate on scrol
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="Services">
      <div className="m-4">
        <div className="  ">
          <div
            className=" mt-5 mb-4 text-center flex flex-wrap items-center justify-center"
            style={{ animation: "fadeIn 1s ease-in-out" }}
            ata-aos="fade-down"
            data-aos-delay="400"
          >
            <div className=" w-1/2 pr-5">
              <h1 className="pt-6 pb-4 text-4xl font-bold">
                Intelligent wins. Early results. Long-term growth.
              </h1>
              <p className="px-6 pb-6 text-xl font-bold">
                Elan Africa is your expert growth and execution partner. We are
                a team of innovators across industries and we partner with the
                best. We help many growth organizations reach their full
                potential.
              </p>
            </div>

            <div className="mx-auto mt-5 mb-5 w-1/2 pr-5">
              <div className="flex flex-wrap justify-center gap-4 mb-5">
                <Image
                  className="w-32 homepage22 mb-5"
                  src={Home3}
                  alt="home1"
                />
                <Image
                  className="w-32 homepage22 mb-5"
                  src={Home4}
                  alt="home1"
                />
                <Image
                  className="w-32 homepage22 mb-5"
                  src={Home5}
                  alt="home1"
                />
                <Image
                  className="w-32 homepage22 mb-5"
                  src={Home5}
                  alt="home1"
                />
              </div>
            </div>
          </div>

          <div className="mt-7 g-2 flex flex-wrap items-center justify-center">
            <div className="w-1/2 pr-5">
              <h4 className="text-[] text-3xl mb-2">
                You’ve got business goals?
              </h4>
              <h2 className="text-[#00C9AA] text-2xl mb-5">
                We’ll build the roadmap.
              </h2>
              <p>
                Hyper-growth businesses need a data-driven vision. More
                importantly, they need a clear, action-packed game plan. We
                partner with you to strategize, prioritize, link up
                cross-channel insights, and, ultimately, grow.
              </p>
            </div>
            <div
              className="w-1/2 pr-5"
              style={{ animation: "fadeIn 1s ease-in-out" }}
              ata-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex g-2 hpmepage2">
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6   mb-4 text-white">
                  <h4 className="text-white text-xl mb-4">Simplicity</h4>
                  <p>
                    Our process is simple: learn, activate, analyze,
                    optimize,repeat. There’s no blueprint for growth. Over the
                    years, we've built a process that allows us to start lean
                    and quickly identify what works.
                  </p>
                </div>
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 mb-4 text-white">
                  <h4 className="text-white text-xl mb-4">Execution</h4>
                  <p>
                    Execution happens in the hands of a network of deeply
                    experienced experts who continuously test, optimize, and
                    uncover new opportunities. ​
                  </p>
                </div>
              </div>
              <div className="flex g-2 homepage2">
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 mb-4 text-white">
                  <h4 className="text-white text-xl mb-4">Clear Goals</h4>
                  <p>
                    Before we deploy any strategy or spend, we’ll get detailed
                    about what success looks like. Most often, we’re
                    laser-focused on revenue. ​
                  </p>
                </div>
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6  mb-4 text-white">
                  <h4 className="text-white text-xl mb-4">We Start Lean</h4>
                  <p>
                    We’re ruthless and relentless with results. Ultimately,
                    we’ll end up with the right channel mix that sets the stage
                    for true, sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 bg-star-sprinkles  text-white ">
          <div className="p-6 text-3xl font-bold text-center">
            Our Product Suite
          </div>

          <div className="mt-7 g-2 flex flex-wrap items-center justify-center">
            <Link href="/ElanGrowth">
              <Image className="w-32 homepage22" src={Home2} alt="home1" />
            </Link>
            <Link href="/ElanDev">
              <Image className="w-32 homepage22" src={Home3} alt="home1" />
            </Link>
            <Link href="/ElanTraining">
              <Image className="w-32 homepage22" src={Home4} alt="home1" />
            </Link>
            <Link href="/ElanStudio">
              <Image className="w-32 homepage22" src={Home5} alt="home1" />
            </Link>
            <Link href="/ElanAccelerate">
              <Image className="w-32 homepage22" src={Home5} alt="home1" />
            </Link>
          </div>
          <div
            className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex  md: flex justify-center mb-5"
            style={{ animation: "scaleIn 1s ease-in-out" }}
          >
            <Link href="/">
              <button
                className="block mt-5 px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto mb-5"
                data-aos="fade-down"
                data-aos-delay="400"
                type="submit"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-7 g-2 flex flex-wrap items-center justify-center  ">
          <div className="w-1/2 pr-5">
            <h2 className="text-red text-3xl mb-5">
              Elan Africa comes with proven experience and a network of top
              talent to help your team in varying areas.
            </h2>
          </div>
          <div className="w-1/2 pr-5">
            <div className="flex g-2 flex-wrap items-center justify-center">
              <div className="rounded-lg shadow-lg p-6  mb-4 ">
                <h4 className="text-[#346294] font-bold text-xl">
                  Go-To Market
                </h4>
                <p className="text-black">
                  This is your Service description. Use this space to describe
                  what the service entails, benefits for users and any other
                  important information.
                </p>
              </div>
              <div className="rounded-lg shadow-lg p-6   mb-4 ">
                <h4 className="text-[#346294] font-bold text-xl">
                  Hyper-Growth
                </h4>
                <p>
                  This is your Service description. Use this space to describe
                  what the service entails, benefits for users and any other
                  important information. ​
                </p>
              </div>
            </div>
            <div className="flex g-2 flex-wrap items-center justify-center">
              <div className=" rounded-lg shadow-lg p-6 mb-4 ">
                <h4 className="text-[#346294] font-bold text-xl">
                  Partnerships
                </h4>
                <p>
                  This is your Service description. Use this space to describe
                  what the service entails, benefits for users and any other
                  important information. ​
                </p>
              </div>
              <div className="rounded-lg shadow-lg p-6 mb-4 ">
                <h4 className="text-[#346294] font-bold text-xl">
                  Team Building
                </h4>
                <p>
                  This is your Service description. Use this space to describe
                  what the service entails, benefits for users and any other
                  important information. ​
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4  mt-7 flex flex-wrap items-center justify-center">
        <div className="w-1/2 pr-5">
          <h2 className="text-2xl">
            Like what you see and not just sure how to get started?
          </h2>
          <p>Our very diverse customer success team is one mail away.</p>
        </div>
        <div className="w-1/2 pr-5">
          <form className="bg-gray-100 p-6 rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="phone">
                Phone number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="message"
              >
                Message:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div
              className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex  md: flex justify-center"
              style={{ animation: "scaleIn 1s ease-in-out" }}
            >
              <Link href="/">
                <button
                  className="block mt-5 px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto"
                  data-aos="fade-down"
                  data-aos-delay="400"
                  type="submit"
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
