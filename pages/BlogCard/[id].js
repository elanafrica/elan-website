import { useRouter } from "next/router";

function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch blog post data using the `id`
  // Assuming you have an array of blog posts
  const posts = [
    {
      id: 1,
      title: "How to maximize your marketing budget",
      content:
        "Marketing plays a crucial role in the growth and success of any business. However, with limited..",
    },
    {
      id: 2,
      title: "11 marketing strategies to attract and retain",
      content:
        "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows",
    },
    {
      id: 3,
      title: "Is Email marketing Dead?",
      content:
        "To build a successful business in Africa, here are 5 free courses",
    },
  ];

  // Find the blog post with the matching `id`
  const blogPost = posts.find((post) => post.id === Number(id));

  // Render the blog post content
  return (
    <div>
      <div></div>
      <div>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
