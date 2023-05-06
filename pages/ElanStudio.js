import React from "react";
import Layout from "@/components/Layout";
import Logoh from "../public/elan4.PNG";
import Elantrain1 from "../public/elantrain1.PNG";
import Elantrain2 from "../public/elantrain2.PNG";
import Elantrain3 from "../public/elantrain3.PNG";
import Elandev1 from "../public/elandev1.PNG";
import Elandev2 from "../public/elandev2.PNG";
import Elandev3 from "../public/elandev3.PNG";
import Elandev4 from "../public/elandev4.PNG";
import Elandev5 from "../public/elandev5.PNG";
import Elandev6 from "../public/elandev6.PNG";
import Elandevcard1 from "../public/elandevcard1.PNG";
import Elandevcard2 from "../public/elandevcard2.PNG";
import Elandevcard3 from "../public/elandevcard3.PNG";
import Elandevcard4 from "../public/elandevcard4.PNG";
import Elangrowth5 from "../public/elangrowth5.PNG";
import Elangrowth6 from "../public/elangrowth6.PNG";
import Elangrowth7 from "../public/elangrowth7.PNG";
import Elangrowth8 from "../public/elangrowth8.PNG";
import Elangrowth9 from "../public/elangrowth9.PNG";
import Image from "next/image";

function ElanStudio() {
  return (
    <Layout title="ElanStudio">
      <div className="p-4">
        <div className="  ">
          <div className="relative">
            <Image className="w-full" src={Logoh} alt="Logo" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="text-center absolute bottom-0 left-0 right-0 bg-[#431520]">
                <p className="px-6 pb-6 text-xl font-bold">
                  Where we get obsessed with your brands' storytelling and our
                  creativity is at its peak!
                </p>
                <p>Whether you've got a plan or don't? We got you!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 text-center">
          {" "}
          <h2 className="text-4xl font-bold">Our Training Modules</h2>
        </div>

        <div className="flex mt-9">
          <div className=" w-1/2 pr-5">
            <h2 className=" text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Sales & Marketing
            </h2>
            <div>
              <p className="mb-4">
                A sales and marketing training program chiefly aimed to enhance
                your company’s marketing or sales team’s skills and performance.
              </p>
              <p>
                ElanTraining offers a wide range of Sales and Marketing Training
                courses that have been thoroughly designed by experienced
                professionals in order to enhance your understanding of the
                various elements that allow for effectual sales and marketing
                performance within your organizations.
              </p>
            </div>
          </div>
          <div className="mt-7 w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image className="w-full" src={Elantrain3} alt="elantrain3" />
          </div>
        </div>

        <div className="flex mt-9">
          <div className=" w-1/2 pr-5">
            <h2 className=" text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              E-Commerce
            </h2>
            <div>
              <p className="mb-4">
                By taking our e-commerce training classes which teach,
              </p>
              <div className="bg-gray-100 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <ul className="list-disc pl-6">
                    <li className="text-gray-700 mb-2">
                      Commercial planning to help prioritize and understand
                      revenue drivers across the board
                    </li>
                    <li className="text-gray-700 mb-2">
                      Category management to better manage your product
                      assortment/ mix and warehousing
                    </li>
                    <li className="text-gray-700 mb-2">
                      E-commerce campaign and marketing strategies,
                    </li>
                    <li className="text-gray-700 mb-2">
                      Customer interaction and experience
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mb-4">
                Gain mastery of key e-commerce concepts, and discover how to
                earn more from your business's online store.
              </p>
            </div>
          </div>
          <div className="mt-7 w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image className="w-full" src={Elantrain2} alt="elantrain2" />
          </div>
        </div>

        <div className="flex mt-9">
          <div className="mt-7 w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image className="w-full" src={Elantrain1} alt="elantrain1" />
          </div>
          <div className=" w-1/2 pr-5">
            <h2 className=" text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Customer Experience
            </h2>
            <div>
              <p className="mb-4">
                Exceptional Customer Experience is the most proven and
                dependable strategy to develop your business in today's
                increasingly competitive marketplace.
              </p>
              <p>
                This training course on Exceptional Customer Experience intends
                to assist participants in improving their Customer Service
                expertise.
              </p>
              <p className="mb-4">
                While building your company's image as a customer-centered
                organization, your employees would learn how to surpass customer
                service standards and expectations. ​
              </p>
              <p>
                This course provides the skills and information needed to
                increase customer satisfaction and more effectively address
                customer needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-7 flex justify-between mb-5">
        <div className="w-1/2 pr-5 mt-7 mb-5">
          <h2 className="text-4xl mb-5">
            Leverage our pool of top experts to bridge the knowledge gaps across
            your organization.
          </h2>
          <p>Schedule a Consultation.​</p>
        </div>
        <div className="w-1/2 pr-5 text-white">
          <form className="bg-gray-100 p-6 rounded-lg text-white bg-[#384A6F]">
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

export default ElanStudio;
