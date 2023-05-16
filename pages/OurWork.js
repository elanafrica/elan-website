import React, { useEffect } from "react";
import Layout from "../components/Layout";
//importing animate on scrol
import Aos from "aos";
import "aos/dist/aos.css";

import Logoh from "../public/elangrowth.jpg";
import ElanWork1 from "../public/elanwork1.png";
import ElanWork2 from "../public/elanwork2.png";
import ElanWork3 from "../public/elanwork3.png";
import ElanWork4 from "../public/elanwork4.png";
import ElanWork5 from "../public/elanwork5.png";
import ElanWork6 from "../public/elanwork6.png";
import ElanWork7 from "../public/elanwork7.png";
import ElanWork8 from "../public/elanwork8.png";
import ElanWork9 from "../public/elanwork9.png";
import ElanWork10 from "../public/elanwork10.png";
import ElanWork11 from "../public/elanwork11.png";
import ElanWork12 from "../public/elanwork12.png";
import ElanWork13 from "../public/elanwork13.png";
import ElanWork14 from "../public/elanwork14.png";
import ElanWork15 from "../public/elanwork15.png";
import ElanWork16 from "../public/elanwork16.png";
import ElanWork17 from "../public/elanwork17.png";
import ElanWork18 from "../public/elanwork18.png";
import ElanWork19 from "../public/elanwork19.png";
import ElanWork20 from "../public/elanwork20.png";
import ElanWork21 from "../public/elanwork21.png";
import ElanWork22 from "../public/elanwork22.png";
import ElanWork23 from "../public/elanwork23.png";
import ElanWork24 from "../public/elanwork24.png";
import ElanWork25 from "../public/elanwork25.png";

import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";
import Testimonials from "@/components/Testimonials";

function OurWork() {
  const videoUrl =
    "https://assets.mixkit.co/videos/preview/mixkit-marketing-team-gather-around-laptop-and-smile-at-camera-8960-large.mp4";

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="OurWork">
      <div className="m-4 relative">
        <div className="w-full h-full object-cover">
          <VideoPlayer url={videoUrl} />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#0b2546]">
          <div className="text-center">
            <p className="px-6 pb-6 text-3xl font-bold">
              We build timeless experiences.
            </p>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 gap-4 homepage22 mt-9"
        style={{ animation: "fadeIn 1s ease-in-out" }}
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork1}
            alt="Work 1"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork2}
            alt="Work 2"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork3}
            alt="Work 3"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork4}
            alt="Work 4"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork5}
            alt="Work 5"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork6}
            alt="Work 6"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork7}
            alt="Work 7"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork8}
            alt="Work 8"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork9}
            alt="Work 9"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork10}
            alt="Work 10"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork11}
            alt="Work 11"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork12}
            alt="Work 12"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork13}
            alt="Work 13"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork14}
            alt="Work 14"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork15}
            alt="Work 15"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork16}
            alt="Work 16"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork17}
            alt="Work 17"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork18}
            alt="Work 18"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork19}
            alt="Work 19"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork20}
            alt="Work 20"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork21}
            alt="Work 21"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork22}
            alt="Work 22"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork23}
            alt="Work 23"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork24}
            alt="Work 24"
          />
        </div>
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
            src={ElanWork25}
            alt="Work 25"
          />
        </div>
      </div>
      <div className="mt-9 mb-7">
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
              View More
            </button>
          </Link>
        </div>
      </div>

      <div>
        <Testimonials />
      </div>

      <div className=" m-4  mt-7 flex flex-wrap items-center justify-center">
        <div className="w-1/2 pr-5 mt-7 mb-5">
          <h2 className="text-4xl mb-5">Start a project with us today.</h2>
          <p>Free growth consultancy for African businesses. ​</p>
        </div>
        <div className="w-1/2 pr-5">
          <form className="bg-gray-100 p-6 rounded-lg">
            <h4 className="text-xl text-center">Contact Us</h4>
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

export default OurWork;
