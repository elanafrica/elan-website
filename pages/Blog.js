import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import ElanBlogHero from "../public/elanblog.jpg";
import ElanBlog1 from "../public/elanblog1.PNG";
import ElanBlog2 from "../public/elanblog2.PNG";
import ElanBlog3 from "../public/elanblog3.PNG";
import ElanBlog4 from "../public/elanblog4.PNG";
import ElanBlog5 from "../public/elanblog5.PNG";
import ElanBlog6 from "../public/elanblog6.PNG";
import ElanBlog7 from "../public/elanblog7.PNG";
import ElanBlog8 from "../public/elanblog8.PNG";
import ElanBlog9 from "../public/elanblog9.PNG";
import ElanBlog10 from "../public/elanblog10.PNG";
import ElanBlog11 from "../public/elanblog11.PNG";
import ElanBlog12 from "../public/elanblog12.PNG";

import { BiTimeFive } from "react-icons/bi";
import { GrGrommet, GrPowerCycle, GrAchievement } from "react-icons/gr";
import BlogCard from "../components/BlogCard";

function Blog() {
  const [isOpen, setIsOpen] = useState(false);

  const buttontoggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const posts = [
    {
      name: "Amabel Ukoko",
      title: "How to maximize your marketing budget",
      description:
        "Marketing plays a crucial role in the growth and success of any business. However, with limited..",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
      name: "Ruth Torty",
      title: "11 marketing strategies to attract and retain...",
      description:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
      date: "2023-05-08",
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
  return (
    <Layout title="Blog">
      <div className="m-4">
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
              <Link href="/Blog">
                {" "}
                <BlogCard key={post.title} post={post} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
