import React, { useEffect } from "react";
import Layout from "../components/Layout";
// import Hero from "../public/star3.png";
import Home1 from "../public/africa.jpg";
import Home2 from "../public/elangrowth.jpg";
import Home3 from "../public/elangrowth.jpg";
import Home4 from "../public/elangrowth.jpg";
import Home5 from "../public/elangrowth.jpg";
import Show1 from "../public/elangrowth.jpg";
import Show2 from "../public/elangrowth.jpg";
import Show3 from "../public/elangrowth.jpg";
import Show4 from "../public/elangrowth.jpg";
import Show5 from "../public/elangrowth.jpg";
import Show6 from "../public/elangrowth.jpg";
import Show7 from "../public/elangrowth.jpg";
import Show8 from "../public/elangrowth.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

import jumia from "../public/assets/jumia.png";
import aerix from "../public/assets/aerix.png";
import max from "../public/assets/max.png";
import gomarket from "../public/assets/gomarket.png";
import microsoft from "../public/assets/microsoft.png";
import kobo from "../public/assets/kobo.png";
import konga from "../public/assets/konga.png";
import fazsion from "../public/assets/fazsion.png";
import mrprice from "../public/assets/mrprice.png";
import playns from "../public/assets/playns.png";

import Image from "next/image";
import Link from "next/link";

function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="HomePage">
      <div className="m-4">
        <div className="  ">
          <div className="relative bg-[#0b2546] text-white flex flex-wrap items-center justify-center justify-between">
            <div className="text-center w-1/2 pr-5 p-5">
              <h1 className="text-3xl sm:text-3xl font-bold capitalize mb-5">
                Everyone Wants to Live on the Moon. Your Business Does Too.
              </h1>
              <p className="text-xl font-light sm:w-80 w-64 mx-auto">
                We may just know how to make that happen.
              </p>
              <div className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex md:flex justify-center">
                <Link href="/ContactUs">
                  <button
                    className="block mt-5 px-6 py-2 text-center text-[#0b2546] bg-white rounded-md mx-auto"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Get Free Consultation
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/2 pr-5">
              <div className="absolute inset-0 bg-star-sprinkles opacity-30"></div>
              <Image
                className="w-full hero-container z-10"
                src={Hero}
                alt="hero"
              />
            </div>
          </div>

          <div className="flex mt-7">
            <div className="mt-7">
              <h2>
                We foster business growth and sales for{" "}
                <span className="text-green-300">
                  Startups, Tech Companies and SME's
                </span>{" "}
                across Africa.
              </h2>
              <p>
                Growth is our assertion. We take a data-driven approach to help
                your business scale. We help generate scalable and predictable
              </p>
              <div className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start md: flex justify-center">
                <Link href="/">
                  <button
                    className="block mt-5 px-6 py-2 text-center text-white bg-[#0b2546] rounded-md"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="mt-7 "
              style={{ animation: "fadeIn 1s ease-in-out" }}
            >
              <div className="flex">
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 text-xl font-bold mb-4 text-white">
                  Data-Driven Insights for Growth.
                </div>
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 text-xl font-bold mb-4 text-white">
                  Proven Experience in Growth Strategy.
                </div>
              </div>
              <div className="flex">
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 text-xl font-bold mb-4 text-white">
                  Hands-on Business Intelligence.
                </div>
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 text-xl font-bold mb-4 text-white">
                  We take your Business quite personal.
                </div>
              </div>
            </div>
          </div>

          <div className="m-4  mt-7 flex flex-wrap items-center justify-center homepage1">
            <div className="mt-7 flex justify-between">
              <div
                className="w-1/2 pr-5"
                style={{ animation: "fadeIn 1s ease-in-out" }}
              >
                <Image
                  className="w-full"
                  src={Home1}
                  alt=""
                  data-aos="fade-down"
                  data-aos-delay="400"
                />
              </div>
              <div className="w-1/2 pl-5">
                <div
                  className="p-6 text-xl font-bold"
                  style={{ animation: "slideIn 1s ease-in-out" }}
                >
                  Africa is a hub href entrepreneurs of many disciplines, and
                  with the unique resilience that guides the African spirit. We
                  believe without a doubt that Africa is ready href birth the
                  next greats.
                </div>
                <div style={{ animation: "slideIn 1s ease-in-out" }}>
                  Our techniques focus on measurable and a clear understanding
                  of the basics that matter href your business, whatever and
                  wherever you are.
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
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <div className="" style={{ animation: "scaleIn 1s ease-in-out" }}>
              <div
                className="text-4xl font-bold mb-7 text-center mt-7"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                Our Business Solutions
              </div>
              <div className="flex flex-wrap mb-4 mt-7">
                <div
                  className="flex flex-col w-1/2 mb-4 px-2"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    <Image className="" src={Home2} alt="" />
                    <div className="text-xl">Elan Growth</div>
                    Elan Growth is your expert business strategy and execution
                    partner.
                    <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                      <Link href="/about" className="">
                        Learn More
                      </Link>
                    </button>
                  </div>
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    <Image className="" src={Home3} alt="" />
                    <div className="text-xl">Elan Dev</div>
                    We would not just identify your tech needs but also
                    implement them.
                    <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                      <Link href="/about" className="">
                        Shop Now
                      </Link>
                    </button>
                  </div>
                </div>
                <div
                  className="flex flex-col w-1/2 mb-4 px-2"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    <Image className="" src={Home4} alt="" />
                    <div className="text-xl">Elan Training</div>
                    Keep your team updated with current industry trends.
                    <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                      <Link href="/about" className="">
                        Shop Now
                      </Link>
                    </button>
                  </div>
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    <Image className="" src={Home5} alt="" />
                    <div className="text-xl">Elan Studio</div>
                    Where we get obsessed with your brands' storytelling and our
                    creativity is at its peak!
                    <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                      <Link href="/about" className="">
                        Shop Now
                      </Link>
                    </button>
                  </div>
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    <Image className="" src={Home5} alt="" />
                    <div className="text-xl">Elan Accelera8</div>
                    Our unique growth affiliate system. Growth and scale are
                    integral to your company’s roadmap.
                    <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                      <Link href="/about" className="">
                        Shop Now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white mt-5 text-center animate-fade-in">
            <div className="p-6 text-3xl font-bold animate-slide-in-right">
              MADE FOR EVERY BUSINESS
            </div>
            <div className="p-6 text-3xl font-bold animate-slide-in-left">
              We are driven by two things... Passion and Performance.
            </div>
            <div className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex md:flex justify-center animate-scale-in">
              <Link href="/">
                <button className="block mt-5 mb-5 px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto animate-fade-in">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-7 homepage2 ">
            <div className="p-6 text-3xl font-bold text-center">
              What we get up to!
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-5">
              <Image className="w-full homepage22" src={Show1} alt="" />
              <Image className="w-full homepage22" src={Show2} alt="" />
              <Image className="w-full homepage22" src={Show3} alt="" />
              <Image className="w-full homepage22" src={Show4} alt="" />
              <Image className="w-full homepage22" src={Show5} alt="" />
              <Image className="w-full homepage22" src={Show6} alt="" />
              <Image className="w-full homepage22" src={Show7} alt="" />
              <Image className="w-full homepage22" src={Show8} alt="" />
            </div>

            <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
              <Link href="/about" className="">
                View Showcase
              </Link>
            </button>
          </div>

          <div className="bg-[#00626F] text-white mt-5  mb-4 text-center homepage22">
            <div className=" p-6 text-4xl font-bold ">******</div>
            <div className=" p-6 text-xl font-bold ">
              It is rare to find an agency that is both creative and analytical,
              ELAN certainly is both. We saw significant improvement with ELAN
              and we recommend working with them if you are seeking for a growth
              team
            </div>
            <div className=" p-6 text-3xl font-bold">Jonathan O.</div>
            <div className="text-xl mb-3">JRIP UK</div>
          </div>

          <div className="mt-7  ">
            <div className="">
              <div className="p-6 text-3xl font-bold text-center pr-5  homepage2">
                Brands we’ve worked with, for, and built awesome memories...
              </div>
              <hr></hr>
              <p className="p-6 text-xl text-center pr-5  homepage2">
                Over the years we have been opportune to lead various growth,
                sales, creative and marketing efforts through the years.
              </p>
            </div>
            <div className="slider my-10 ">
              <div className="slideTrack">
                <div className="slide">
                  <Image src={aerix} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={max} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={gomarket} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={jumia} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={microsoft} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={fazsion} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={kobo} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={mrprice} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={playns} alt="" className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={konga} alt="" className="imgPartner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
