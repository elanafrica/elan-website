import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import ElanBlogHero from "../public/elanblog.jpg";
import ElanBlog1 from "../public/elandev2.jpg";
import ElanBlog2 from "../public/elandev2.jpg";
import ElanBlog3 from "../public/elandev2.jpg";
import ElanBlog4 from "../public/elandev2.jpg";
import ElanBlog5 from "../public/elandev2.jpg";
import ElanBlog6 from "../public/elandev2.jpg";
import ElanBlog7 from "../public/elandev2.jpg";
import ElanBlog8 from "../public/elandev2.jpg";
import ElanBlog9 from "../public/elandev2.jpg";
import ElanBlog10 from "../public/elandev2.jpg";
import ElanBlog11 from "../public/elandev2.jpg";
import ElanBlog12 from "../public/elandev2.jpg";
import ElanBlog13 from "../public/elandev2.jpg";
import ElanBlog14 from "../public/elandev2.jpg";

import { BiTimeFive } from "react-icons/bi";

const posts = [
  {
    id: 1,
    name: "Amabel Ukoko",
    title: "The death of SEO by AI (Debunking the myth)",
    description:
      "Search Engine Optimization (SEO) has been an integral part of digital marketing since the inception of search engines. SEO refers to the practice of ",
    date: "May 17",
    views: "",
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog13,
  },
  {
    id: 2,
    name: "Ruth Torty",
    title: "How to create a Marketing Plan that Works.",
    description:
      "Ignoring online marketing is like opening a business but not telling anyone. — KB Marketing Agency...",
    date: "May 15",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog14,
  },
  {
    id: 3,
    name: "Amabel Ukoko",
    title: "How to maximize your marketing budget",
    description:
      "Marketing plays a crucial role in the growth and success of any business. However, with limited..",
    date: "May 4",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog1,
  },
  {
    id: 4,
    name: "Ruth Torty",
    title: "11 marketing strategies to attract and retain...",
    description:
      "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
    date: "Apr 26",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog2,
  },
  {
    id: 5,
    name: "Amabel Ukoko",
    title: "Is Email Marketing Dead?",
    description:
      "Email marketing has been around for decades and continues to be one of the most cost-effective and a...",
    date: "Apr 19",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog3,
  },
  {
    id: 6,
    name: "Ruth Torty",
    title: "A Guide to How SMEs Can Ideentify Their Target Audience",
    description:
      "Small and medium-sized enterprises are currently on the rise. Aside from the crucial role...",
    date: "Apr 12",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog4,
  },
  {
    id: 7,
    name: "Amabel Ukoko",
    title: "Invest Wisely: 5 Things to Know Before You Start",
    description:
      "Invest Wisely: 5 Things to Know Before You Start Choosing what to invest in can be both daunting and",
    date: "Apr 3",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog5,
  },
  {
    id: 8,
    name: "Ruth Torty",
    title: "5 Free Courses Every Founder & Entrepreneur Should...",
    description:
      "To build a successful business in Africa, here are 5 free courses we recommend every founder and...",
    date: "Feb 24",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog6,
  },
  {
    id: 9,
    name: "Ifeoma Okwy-Ejezie",
    title: "B2B Growth Hacking Strategies",
    description:
      "The way to hack growth in B2B involves understanding that a business’s main competition is the ",
    date: "Nov 10, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog7,
  },
  {
    id: 10,
    name: "Ruth Torty",
    title: "Mental Health in The Workplace: How To Build Safe Spaces Fo...",
    description:
      "Interestingly, a survey carried out by WellNewMe shows that 4 in 5 employees are at risk of mental",
    date: "Oct 26, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog8,
  },
  {
    id: 11,
    name: "Ruth Torty",
    title: "11 Tips For Managing Remote Teams In Africa..",
    description:
      "As digitalization continues to dominate and become the norm in this age, work systems are also..",
    date: "Aug 12, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog9,
  },
  {
    id: 12,
    name: "Ifeoma Okwy-Ejezie",
    title: "Why your business needs proper growth marketing",
    description:
      "According to the European Union (EU), SMEs are micro, small, and medium-sized enterprises which...",
    date: "Aug 10,2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog10,
  },
  {
    id: 13,
    name: "Team Elan",
    title: " All the talk about the perfect business plan for business growth!",
    description:
      "The importance we place on your business plan and getting it right should let you see will let you..",
    date: "May 30, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog11,
  },
  {
    id: 14,
    name: "Afam Anyika",
    title: "Customer experience that enhances direct marketing and...",
    description:
      "Through the years, business giants have said that great customer service helped their businesses to",
    date: "May 26, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog12,
  },
];

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttontoggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Layout title="Blog">
      <div>
        <div className="relative">
          <Image className="w-full" src={ElanBlogHero} alt="Logo" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="text-center absolute top-1/2 left-1/2 bottom-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="px-6 pb-6 text-3xl font-bold">
                Where we share insights and trends on sales, marketing, growth,
                and creative content.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 m-4 ">
          <div className=" flex flex-wrap items-center justify-center ">
            <Link
              href="/Blog"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              All Posts
            </Link>
            <Link
              href="/AboutUs"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Growth Marketing
            </Link>

            <Link
              href="/OurWork"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Business Tips
            </Link>
            <Link
              href="/Blog"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Growth Marketing Agency
            </Link>
            <Link
              href="/Testimonials"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Traditional Marketing Methods
            </Link>
            <Link
              href="/ContactUs"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Marketing Tips
            </Link>
            <div className="relative">
              <button
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsOpen(!isOpen)}
              >
                More
              </button>
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } absolute z-50 bg-white p-4 mt-1 rounded-md shadow-lg`}
              >
                <Link
                  href="/ElanAccelerate"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Business In Africa
                </Link>
                <Link
                  href="/ElanDev"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  WorkPlace in Africa
                </Link>
                <Link
                  href="/ElanGrowth"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Founders Care Column
                </Link>
                <Link
                  href="/ElanStudio"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Business Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9">
          <div className="grid grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="singleCareer group group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-[#0b2546] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <Link href={`/BlogCard/${post.id}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                  />
                  <h1 className="text-[16px] font-semibold text-black group-hover:text-white">
                    {post.title}
                  </h1>
                  <span className="flex items-center text-[#ccc} gap-1 group-hover:text-white">
                    <BiTimeFive /> By {post.name} on {post.date}
                  </span>
                  <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                    {post.description}
                  </p>
                  <p>Views: {post.views}</p>
                  <p>Comments:</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
