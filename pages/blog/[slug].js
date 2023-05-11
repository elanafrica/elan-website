import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import ElanBlogHero from "../public/elanblog.jpg";
import ElanBlog1 from "../public/elanblog1.png";
import ElanBlog2 from "../public/elanblog2.png";
import ElanBlog3 from "../public/elanblog3.png";
import ElanBlog4 from "../public/elanblog4.png";
import ElanBlog5 from "../public/elanblog5.png";
import ElanBlog6 from "../public/elanblog6.png";
import ElanBlog7 from "../public/elanblog7.png";
import ElanBlog8 from "../public/elanblog8.png";
import ElanBlog9 from "../public/elanblog9.png";
import ElanBlog10 from "../public/elanblog10.png";
import ElanBlog11 from "../public/elanblog11.png";
import ElanBlog12 from "../public/elanblog12.png";

import { BiTimeFive } from "react-icons/bi";
import { GrGrommet, GrPowerCycle, GrAchievement } from "react-icons/gr";
import BlogCard from "../components/BlogCard";

import { useRouter } from "next/router";

const posts = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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

const BlogPost = ({ post }) => {
  const router = useRouter();

  // Render loading state while data is being fetched
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mt-9">
        <div className="grid grid-cols-3 gap-8">
          {posts.map(
            (post, id) =>
              (key = { id } > <BlogCard key={post.title} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "first-blog-post" } },
    { params: { slug: "second-blog-post" } },
  ];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = {
    slug: params.slug,
    title: "Sample Blog Post",
    content: "This is the content of the blog post.",
  };

  return { props: { post } };
}

export default BlogPost;
