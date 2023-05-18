import { useRouter } from "next/router";

function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const posts = [
    {
      id: 1,

      title: "How to maximize your marketing budget",
      content:
        "Marketing plays a crucial role in the growth and success of any business. However, with limited resources and budgets, it can be challenging to determine where to invest for maximum returns. In order to get the most out of your marketing budget, it is essential to carefully assess your options and prioritize your spending. One key factor to consider is your target audience. Depending on who you are trying to reach, certain marketing channels may be more effective than others. For example, if you are targeting a younger demographic, social media advertising may be the way to go. If your audience is older, traditional advertising methods such as television or print ads may still be effective.  ",
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
      <div>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
