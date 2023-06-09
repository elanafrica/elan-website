import React from "react";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import aboutHero from "../public/aboutus.jpg";
import founder from "../public/assets/founder.png";
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

import { DiUnitySmall } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import {
  BsFillCartCheckFill,
  BsFillPeopleFill,
  BsSteam,
  BsPersonCircle,
} from "react-icons/bs";
import { FaAccessibleIcon, FaTripadvisor } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { GrBusinessService } from "react-icons/gr";

//importing animate on scrol
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="AboutUs">
      <div>
        <div className="bg-[rgb(7,39,78)] text-white">
          <section className="container items-center px-4 pb-12 mt-9 lg:flex md:px-40">
            <div className="flex-1 space-y-4 sm:text-center lg:text-left">
              <h1
                className="text-4xl font-bold text-teal-400 md: flex justify-center lg:justify-start"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                What we are
              </h1>
              <p
                className="max-w-xl leading-relaxed text-gray-300 text-2xl font-bold sm:mx-auto lg:ml-0 lg:mr-15"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                Your business is unique, likewise your growth, technology and
                your brand communication. You are in the right place for your
                business ecosystem reflection .
              </p>
              <div className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start md: flex justify-center">
                <Link href="/">
                  <button
                    className="block px-6 py-2 text-center text-white bg-teal-500 rounded-md"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden h-[450px] w-[450px] md:inline lg:h-[550px] lg:w-[500px]">
              <Image
                src={aboutHero}
                className="w-full mt-6 sm:w-10/12 lg:w-full"
                data-aos="fade-down"
                data-aos-delay="400"
                alt="hero"
              />
            </div>
          </section>
        </div>

        {/* second section */}
        <div className="container items-center px-4 pb-12 mt-20 lg:flex md:px-40">
          <div className="hidden h-[450px] w-[450px] md:inline lg:h-[550px] lg:w-[500px]">
            <Image
              src={aboutHero}
              className="w-full mt-12 sm:w-10/12 lg:w-25"
              data-aos="fade-down"
              data-aos-delay="400"
              alt="our business image"
            />
          </div>
          <div className="flex-1 space-y-4 sm:text-center lg:text-left mt-0">
            <h1
              className="text-4xl font-bold text-[rgb(7,39,78)]  md: flex justify-center lg:justify-start ml-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Our Business
            </h1>
            <p
              className="leading-relaxed text-black-300 text-1xl sm:mx-auto lg:ml-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Elan Africa is a hybrid agency & consultancy. We are made up of a
              team of experts vast in the areas of growth strategy, sales,
              marketing, tech development, and multimedia production. We support
              your execution and offer strategic 'experienced' insight to scale
              your business. We work on a monthly retainer or specific projects.
              We build a team tailored to your goals at the right budget. Our
              approach is lean and streamlined and should be a .
            </p>
          </div>
        </div>

        <div className="text-center lg:mb-20 lg:mt-20 sm:mb-20 md:mb-20">
          <h1
            className="text-[rgb(7,39,78)] font-bold text-2xl"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            WE ARE ON A MISSION
          </h1>
          <p data-aos="fade-down" data-aos-delay="400">
            We work with companies of every size, growth stage, and business
            model. Tell us where you are, and we’ll meet you there.
          </p>
        </div>

        <div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            {/* stack 1 */}
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-2 md:pl-4">
                <h1
                  className="text-white text-xl font-medium py-2"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Brand & Product Validation
                </h1>
                <p
                  className="text-gray-100 sm:text-sm text-xs"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Our team will identity the winning strategy and mix for your
                  product launch or brand validation.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div
                className="h-full w-1 bg-[rgb(7,39,78)]"
                data-aos="fade-down"
                data-aos-delay="400"
              ></div>
              <div
                className="absolute w-6 h-6 rounded-full bg-[rgb(7,39,78)] z-10 text-white text-center"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                1
              </div>
            </div>
            <div
              className="col-span-4 w-full h-full"
              data-aos="fade-down"
              data-aos-delay="400"
            ></div>

            {/* stack 2 */}
            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div
                className="h-full w-1 bg-[rgb(7,39,78)]"
                data-aos="fade-down"
                data-aos-delay="400"
              ></div>
              <div
                className="absolute w-6 h-6 rounded-full bg-[rgb(7,39,78)] z-10 text-white text-center"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                2
              </div>
            </div>

            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-2 md:pl-4">
                <h1
                  className="text-white text-xl font-medium py-2"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Growth Acceleration
                </h1>
                <p
                  className="text-gray-100 sm:text-sm text-xs"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  From beating the competition to helping your business achieve
                  its growth KPIs. We've got you covered.
                </p>
              </div>
            </div>

            {/* stack 3 */}
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-2 md:pl-4">
                <h1
                  className="text-white text-xl font-medium py-2"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Market Expansion
                </h1>
                <p
                  className="text-gray-100 sm:text-sm text-xs"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Expanding into a new market, business model or growth
                  territory? We have got your back.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div
                className="h-full w-1 bg-[rgb(7,39,78)]"
                data-aos="fade-down"
                data-aos-delay="400"
              ></div>
              <div
                className="absolute w-6 h-6 rounded-full bg-[rgb(7,39,78)] z-10 text-white text-center"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                3
              </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>
          </div>
        </div>

        {/*grid section  */}
        <div className="container mx-auto py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <DiUnitySmall />
              </span>
              <h1 className="text-xl font-bold mb-3">STARTUP</h1>
              <p>
                Launch a product test market fit. Rapidly scale to explore new
                markets and acquire customers.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <BiCodeAlt />
              </span>
              <h1 className="text-xl font-bold mb-3">TECH</h1>
              <p>
                Test product features, attract new customers to imporving
                adoption and retention.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <TiBusinessCard />
              </span>
              <h1 className="text-xl font-bold mb-3">SMEs</h1>
              <p>
                Test product features. Refresh business model, attract new
                customers. Improve adoption and retention
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <BsFillCartCheckFill />
              </span>
              <h1 className="text-xl font-bold mb-3">E-COMMERCE</h1>
              <p>
                Start or scale commercial planning team training process
                optimization and marketing automation.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <FaAccessibleIcon />
              </span>
              <h1 className="text-xl font-bold mb-3">B2B</h1>
              <p>
                Attract leads and automate the appointment booking process.
                Improve customer success and engagement.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <GrBusinessService />
              </span>
              <h1 className="text-xl font-bold mb-3">SERVICE</h1>
              <p>
                Maximum customer engagement & retention generate engaged leads,
                automate sales process and accelerate leads.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <BsFillPeopleFill />
              </span>
              <h1 className="text-xl font-bold mb-3">STAFFING</h1>
              <p>
                Attract top talent leveraging our vast network of industry
                specialists and managers.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <BsSteam />
              </span>
              <h1 className="text-xl font-bold mb-3">PARTNERSHIP</h1>
              <p>
                Teaming up gives your business access to the other business’s
                curated audience. The increased visibility leads to a higher
                probability of conversions.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <FaTripadvisor />
              </span>
              <h1 className="text-xl font-bold mb-3">CONSULTANCY</h1>
              <p>
                Develop a marketing plan to meeting your business goals,
                branding and strategic planning to increase sales and customer
                retention
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 bg-[rgb(7,39,78)] lg:h-full md:h-full">
          <div className="flex flex-wrap p-2">
            <h3
              className="text-2xl font-bold mx-auto text-white py-10"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Meet Our Founders
            </h3>
          </div>
          <hr />
          <div className=" flex flex-wrap justify-between mt-3">
            <div className="w-full flex justify-center justify-around items-center md:flex-cols-1 py-10">
              <div classsName="ml-0 rounded-md">
                <div className="lg:w-20 h-50 mx-auto bg-[rgb(7,39,78)] p-0.5 rounded-full">
                  <Image
                    src={founder}
                    alt="founder"
                    className="lg:w-20 rounded-full"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  />
                  {/* <BsPersonCircle /> */}
                </div>
                <h3
                  className="font-bold text-xl text-center mt-5 text-white"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  AFAM ANYIKA
                </h3>
                <p
                  className="m-2 text-center text-xl text-white"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Co-Founder
                </p>
              </div>
              <div
                className="m-5 rounded-md"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="lg:w-20 h-50 mx-auto bg-[rgb(7,39,78)] p-0.5 rounded-full">
                  <Image
                    src={founder}
                    alt="founder"
                    className="lg:w-20 rounded-full"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  />
                  {/* <BsPersonCircle /> */}
                </div>
                <h3
                  className="font-bold text-xl text-center mt-5 text-white"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  KELECHI ONWUMERE
                </h3>
                <p
                  className="m-2 text-center text-xl text-white"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Co-Founder
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slider my-10">
          <div className="slideTrack">
            <div className="slide">
              <Image src={aerix} className="imgPartner" alt="aerix" />
            </div>
            <div className="slide">
              <Image src={max} className="imgPartner" alt="max" />
            </div>
            <div className="slide">
              <Image src={gomarket} className="imgPartner" alt="gomarket" />
            </div>
            <div className="slide">
              <Image src={jumia} className="imgPartner" alt="jumia" />
            </div>
            <div className="slide">
              <Image src={microsoft} className="imgPartner" alt="microsoft" />
            </div>
            <div className="slide">
              <Image src={fazsion} className="imgPartner" alt="fazsion" />
            </div>
            <div className="slide">
              <Image src={kobo} className="imgPartner" alt="kobo" />
            </div>
            <div className="slide">
              <Image src={mrprice} className="imgPartner" alt="mrprice" />
            </div>
            <div className="slide">
              <Image src={playns} className="imgPartner" alt="playns" />
            </div>
            <div className="slide">
              <Image src={konga} className="imgPartner" alt="konga" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
