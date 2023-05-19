import { useRouter } from "next/router";
import dynamic from "next/dynamic";

function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const PostComponent = dynamic(() => import(`./posts/post${id}.js`), {
    loading: () => <div>Loading...</div>,
    ssr: false, // Disable server-side rendering for dynamic import
  });

  return <PostComponent />;
}

export default BlogPost;
