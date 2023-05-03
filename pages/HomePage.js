import React from "react";
import Layout from "@/components/Layout";

import Hero from "../public/elanpic1.jpg";
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

//importing animate on scrol
import Aos from "aos";
import "aos/dist/aos.css";

//importing images
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
  return (
    <Layout title="HomePage">
      <div>
        <div className="  ">
          <div className="relative">
            <Image className="w-full bg-[#0b2546]" src={Hero} alt="hero" />
            <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-5">
              <h1 className="text-3xl sm:text-4xl font-bold capitalize mb-5">
                Everyone Wants to Live on the Moon. Your Business Does Too.
              </h1>
              <p className="text-xl font-light sm:w-80 w-64 mx-auto">
                We may just know how to make that happen.
              </p>
              <div className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start md: flex justify-center">
                <Link href="/">
                  <button
                    className="block px-6 py-2 text-center text-white bg-yellow-600 rounded-md"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Get Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex mt-7">
            <div>
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
                    className="block px-6 py-2 text-center text-white bg-blue-600 rounded-md"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="">
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

          <div className="mt-7 flex justify-between">
            <div className="w-1/2 pr-5">
              <Image className="w-full" src={Home1} alt="home1" />
            </div>
            <div className="w-1/2 pl-5">
              <div className="p-6 text-xl font-bold">
                Africa is a hub href entrepreneurs of many disciplines, and with
                the unique resilience that guides the African spirit. We believe
                without a doubt that Africa is ready href birth the next greats.
              </div>
              <div>
                Our techniques focus on measurable and a clear understanding of
                the basics that matter href your business, whatever and wherever
                you are.
              </div>
              <div>Read More</div>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex justify-between">
              <div className="text-4xl font-bold w-1/2 pr-5">
                Our Business Solutions
              </div>
              <div className="flex mb-4 w-1/2 pr-5 ">
                <div className="flex">
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4 ">
                    <Image className="" src={Home2} alt="home1" />
                    <div className="text-xl">Elan Growth</div>
                    Elan Growth is your expert business strategy and execution
                    partner.
                    <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                      <Link href="/about" className="">
                        Learn More
                      </Link>
                    </button>
                  </div>
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4 ">
                    <Image className="" src={Home3} alt="home1" />
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
                <div className="flex">
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4 ">
                    <Image className="" src={Home4} alt="home1" />
                    <div className="text-xl">Elan Training</div>
                    Keep your team updated with current industry trends.
                    <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                      <Link href="/about" className="">
                        Shop Now
                      </Link>
                    </button>
                  </div>
                  <div className="rounded-lg shadow-lg p-6 text-xl font-bold mb-4 ">
                    <Image className="" src={Home5} alt="home1" />
                    <div className="text-xl">Elan Studio</div>
                    Where we get obsessed with your brands' shrefrytelling and
                    our creativity is at its peak!
                    <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                      <Link href="/about" className="">
                        Shop Now
                      </Link>
                    </button>
                  </div>
                </div>

                <div className=" shadow-lg p-6 text-xl font-bold mb-4 ">
                  <Image className="" src={Home5} alt="home1" />
                  <div className="text-xl">Elan Accelera8</div>
                  Our unique growth affiliate system. Growth and scale are
                  integral href your company’s roadmap.
                  <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                    <Link href="/about" className="">
                      Shop Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white mt-5 text-center">
            <div className=" p-6 text-3xl font-bold ">
              MADE FOR EVERY BUSINESS
            </div>
            <div className=" p-6 text-3xl font-bold">
              We are driven by two things... Passion and Performance.
            </div>
            <button className="bg-white-300 hover:bg-black-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
              <Link href="/about" className="bg-blue-500">
                Learn More
              </Link>
            </button>
          </div>

          <div className="mt-7 ">
            <div className="p-6 text-3xl font-bold text-center">
              What we get up to!
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-5">
              <Image className="w-full" src={Show1} alt="home1" />
              <Image className="w-full" src={Show2} alt="home1" />
              <Image className="w-full" src={Show3} alt="home1" />
              <Image className="w-full" src={Show4} alt="home1" />
              <Image className="w-full" src={Show5} alt="home1" />
              <Image className="w-full" src={Show6} alt="home1" />
              <Image className="w-full" src={Show7} alt="home1" />
              <Image className="w-full" src={Show8} alt="home1" />
            </div>

            <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
              <Link href="/about" className="">
                View Showcase
              </Link>
            </button>
          </div>

          <div className="bg-[#00626F] text-white mt-5  mb-4 text-center">
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
              <div className="p-6 text-3xl font-bold text-center w-1/2 pr-5 ">
                Brands we’ve worked with, for, and built awesome memories...
              </div>
              <hr></hr>
              <p>
                Over the years we have been opportune to lead various growth,
                sales, creative and marketing efforts through the years.
              </p>
            </div>
            <div className="slider my-10 w-1/2">
              <div className="slideTrack">
                <div className="slide">
                  <Image src={aerix} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={max} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={gomarket} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={jumia} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={microsoft} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={fazsion} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={kobo} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={mrprice} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={playns} className="imgPartner" />
                </div>
                <div className="slide">
                  <Image src={konga} className="imgPartner" />
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
