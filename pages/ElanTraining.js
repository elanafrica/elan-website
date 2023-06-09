import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Logoh from "../public/elantraining2.jpg";
import Elantraining from "../public/elantraining2.jpg";
import Elantrain1 from "../public/elantraining2.jpg";
import Elantrain2 from "../public/elantraining2.jpg";
import Elantrain3 from "../public/elantraining2.jpg";

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

import Link from "next/link";
import Image from "next/image";
//importing animate on scrol
import Aos from "aos";
import "aos/dist/aos.css";

function ElanTraining() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="ElanTraining">
      <div className="p-4">
        <div className="  ">
          <div className="relative">
            <Image className="w-full" src={Logoh} alt="Logo" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#0b2546]">
              <div className="text-center absolute bottom-10 left-0 right-0">
                <p className="px-6 pb-6 text-3xl font-bold">
                  Where we build the right tech ecosystem that helps your
                  business scale.
                </p>
                <p>
                  We would not just identify the tech needs but also implement
                  them
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mt-7 w-full md:w-1/2 lg:w-1/3 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
              <p className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider">
                Benefits Of Training With Us
              </p>
              <p className="text-lg md:text-xl font-medium text-center mt-3">
                Our training programs are designed to help you achieve your
                goals and maximize your potential.
              </p>
            </div>
            <div className="mt-7 w-full md:w-1/2 lg:w-2/3 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
              <Image
                className="w-full rounded-lg shadow-lg"
                src={Elantraining}
                alt="elantrain3"
              />
            </div>
          </div>
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
                <h1 className="text-xl font-bold mb-3">We Are Analytical.</h1>
                <p>
                  In-depth identification and analysis of clients’ knowledge
                  gaps and its needs in specific topics mostly related to sales,
                  marketing, business growth hacks and customer experience.
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
                <h1 className="text-xl font-bold mb-3">Tailored For You.</h1>
                <p>
                  Every business need is unique, so are your training needs. We
                  prepare tailored modules & training materials, specifically to
                  suit your needs.
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
                <h1 className="text-xl font-bold mb-3">We Operate SMART.</h1>
                <p>
                  We are practical and will work only with insights applicable
                  to your own business. We'd use specific case studies,
                  exclusively prepared to relate to your business’ realities.
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
                <h1 className="text-xl font-bold mb-3">Top Experts.</h1>
                <p>
                  This is your Feature section paragraph. Use this space to
                  present specific credentials, benefits or special features you
                  offer.
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
                <h1 className="text-xl font-bold mb-3">Feature Title</h1>
                <p>
                  This is your Feature section paragraph. Use this space to
                  present specific credentials, benefits or special features you
                  offer.
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
                <h1 className="text-xl font-bold mb-3">Feature Title</h1>
                <p>
                  This is your Feature section paragraph. Use this space to
                  present specific credentials, benefits or special features you
                  offer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 text-center">
          {" "}
          <h2 className="text-3xl font-bold">Our Training Modules</h2>
        </div>

        <div className="flex m-4  mt-9 flex-wrap items-center justify-center mt-9 animate-fade-in-right">
          <div className="w-1/2 pr-5">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4 animate-bounce">
              Sales & Marketing
            </h2>
            <div>
              <p className="mb-4 animate-fade-in-left">
                A sales and marketing training program chiefly aimed to enhance
                your company’s marketing or sales team’s skills and performance.
              </p>
              <p className="animate-fade-in-left">
                ElanTraining offers a wide range of Sales and Marketing Training
                courses that have been thoroughly designed by experienced
                professionals in order to enhance your understanding of the
                various elements that allow for effectual sales and marketing
                performance within your organizations.
              </p>
            </div>
          </div>
          <div className="mt-7 w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-right">
            <Image
              className="w-full animate-pulse"
              src={Elantrain3}
              alt="elantrain3"
            />
          </div>
        </div>

        <div className="flex mt-9 m-4  mt-7  flex-wrap items-center justify-center animate-fade-in-left">
          <div className="mt-7 w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-right">
            <Image
              className="w-full animate-pulse"
              src={Elantrain2}
              alt="elantrain2"
            />
          </div>
          <div className="w-1/2 pr-5">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4 animate-bounce">
              E-Commerce
            </h2>
            <div>
              <p className="mb-4 animate-fade-in-right">
                By taking our e-commerce training classes which teach,
              </p>
              <div className="bg-gray-100 py-10 animate-fade-in-right">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <ul className="list-disc pl-6">
                    <li className="text-gray-700 mb-2 animate-fade-in-right">
                      Commercial planning to help prioritize and understand
                      revenue drivers across the board
                    </li>
                    <li className="text-gray-700 mb-2 animate-fade-in-right">
                      Category management to better manage your product
                      assortment/ mix and warehousing
                    </li>
                    <li className="text-gray-700 mb-2 animate-fade-in-right">
                      E-commerce campaign and marketing strategies,
                    </li>
                    <li className="text-gray-700 mb-2 animate-fade-in-right">
                      Customer interaction and experience
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mb-4 animate-fade-in-right">
                Gain mastery of key e-commerce concepts, and discover how to
                earn more from your business's online store.
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-9 m-4  mt-7 flex flex-wrap items-center justify-center">
          <div className="mt-7 w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-left">
            <Image
              className="w-full animate-fade-in-bottom"
              src={Elantrain1}
              alt="elantrain1"
            />
          </div>
          <div className=" w-1/2 pr-5 animate-fade-in-right">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4 animate-fade-in-bottom">
              Customer Experience
            </h2>
            <div>
              <p className="mb-4 animate-fade-in-bottom">
                Exceptional Customer Experience is the most proven and
                dependable strategy to develop your business in today's
                increasingly competitive marketplace.
              </p>
              <p className="animate-fade-in-bottom">
                This training course on Exceptional Customer Experience intends
                to assist participants in improving their Customer Service
                expertise.
              </p>
              <p className="mb-4 animate-fade-in-bottom">
                While building your company's image as a customer-centered
                organization, your employees would learn how to surpass customer
                service standards and expectations. ​
              </p>
              <p className="animate-fade-in-bottom">
                This course provides the skills and information needed to
                increase customer satisfaction and more effectively address
                customer needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex m-4  mt-9  flex-wrap items-center justify-center m-4 mb-5">
        <div class="w-1/2 pr-5 mt-7 mb-5">
          <h2 class="text-2xl mb-5">
            Leverage our pool of top experts to bridge the knowledge gaps across
            your organization.
          </h2>
          <p>Schedule a Consultation.</p>
        </div>
        <div class="w-1/2 pr-5">
          <form class="bg-gray-100 p-6 rounded-lg bg-[#384A6F] text-white">
            <h4 class="text-xl text-center mb-4">Contact Us</h4>
            <div class="mb-4">
              <label class="block font-bold text-gray-700 mb-2" for="name">
                Name:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-4">
              <label class="block font-bold text-gray-700 mb-2" for="phone">
                Phone number:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div class="mb-4">
              <label class="block font-bold text-gray-700 mb-2" for="email">
                Email:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-4">
              <label class="block font-bold text-gray-700 mb-2" for="message">
                Message:
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

export default ElanTraining;
