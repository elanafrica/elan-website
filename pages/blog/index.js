import Layout from "../../components/Layout";
import Image from "next/image";
// import ElanBlogHero from "../public/elan5.PNG";
import Link from "next/link";

const Blog = ({ blogPosts }) => {
  return (
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
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch the list of blog posts from an API or JSON file
  const blogPosts = [
    { slug: "first-blog-post", title: "First Blog Post" },
    { slug: "second-blog-post", title: "Second Blog Post" },
    // Add more blog posts as needed
    // Add more blog posts as needed
    { slug: "new-blog-post", title: "New Blog Post" }, // New blog post
  ];

  return { props: { blogPosts } };
}

export default Blog;
