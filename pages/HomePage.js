import React from "react";
import Layout from "@/components/Layout";
import Hero from "../public/elanhero.png";
import Home1 from "../public/elanpic2.PNG";
import Home2 from "../public/elan1.PNG";
import Home3 from "../public/elan2.PNG";
import Home4 from "../public/elan3.PNG";
import Home5 from "../public/elan4.PNG";
import Home6 from "../public/elan5.PNG";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <Layout title="HomePage">
      <div>
        <div className="hero-section  items-center mt-5 justify-between">
          <div className="relative">
            <Image className="w-full bg-[#0b2546]" src={Hero} alt="hero" />
            <div className="text-overlay absolute bottom-0 right-0 left-0 p-5 bottom-20">
              <h1 className="text-white sm:text-4xl text-3xl font-bold capitalize mb-5">
                EVERYONE WANTS TO LIVE ON THE MOON. YOUR BUSINESS DOES TOO.
              </h1>
              <p className="text-xl text-white font-light sm:w-80 w-64">
                We may just know how to make that happen.
              </p>
            </div>
            <div className="absolute bottom-5 mt-5 ">
              <button className="bg-blue-400 hover:bg-white-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                <Link href="/about" className="">
                  Get Free Consultation
                </Link>
              </button>
            </div>
          </div>

          <div>
            <div className="flex mt-5">
              <div>
                <h2>
                  We foster business growth and sales for{" "}
                  <span className="text-green-300">
                    Startups, Tech Companies and SME's
                  </span>{" "}
                  across Africa.
                </h2>
                <p>
                  Growth is our assertion. We take a data-driven approach to
                  help your business scale. We help generate scalable and
                  predictable
                </p>
                <button className="bg-blue-400 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                  <Link href="/about" className="">
                    Read More
                  </Link>
                </button>
              </div>

              <div className="">
                <div className="flex">
                  <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    Data-Driven Insights for Growth.
                  </div>
                  <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    Proven Experience in Growth Strategy.
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    Hands-on Business Intelligence.
                  </div>
                  <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 text-xl font-bold mb-4">
                    We take your Business quite personal.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <div className="flex ">
              <div className="  mb-4">
                <Image className="" src={Home1} alt="home1" />
              </div>
              <div className="">
                <div className=" p-6 text-xl font-bold ">
                  Africa is a hub to entrepreneurs of many disciplines, and with
                  the unique resilience that guides the African spirit. We
                  believe without a doubt that Africa is ready to birth the next
                  greats.
                </div>
                <div className="">
                  Our techniques focus on measurable and a clear understanding
                  of the basics that matter to your business, whatever and
                  wherever you are.
                </div>
                <div>Read More</div>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <div className="flex ">
              <div className=" text-3xl font-bold ">Our Business Solutions</div>
              <div className=" flex mb-4">
                <div>
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
                <div>
                  {" "}
                  <Image className="" src={Home3} alt="home1" />
                  <div className="text-xl">Elan Dev</div>
                  We would not just identify your tech needs but also implement
                  them.
                  <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                    <Link href="/about" className="">
                      Shop Now
                    </Link>
                  </button>
                </div>
                <div>
                  {" "}
                  <Image className="" src={Home4} alt="home1" />
                  <div className="text-xl">Elan Training</div>
                  Keep your team updated with current industry trends.
                  <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                    <Link href="/about" className="">
                      Shop Now
                    </Link>
                  </button>
                </div>
                <div>
                  {" "}
                  <Image className="" src={Home5} alt="home1" />
                  <div className="text-xl">Elan Studio</div>
                  Where we get obsessed with your brands' storytelling and our
                  creativity is at its peak!
                  <button className="bg-black-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                    <Link href="/about" className="">
                      Shop Now
                    </Link>
                  </button>
                </div>
                <div>
                  {" "}
                  <Image className="" src={Home6} alt="home1" />
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
          <div className="bg-black text-white mt-5 text-center">
            <div className=" ">
              <div className="">
                <div className=" p-6 text-3xl font-bold ">
                  MADE FOR EVERY BUSINESS
                </div>
                <div className=" p-6 text-3xl font-bold">
                  We are driven by two things... Passion and Performance.
                </div>
                <button className="bg-white-300 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full">
                  <Link href="/about" className="">
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
