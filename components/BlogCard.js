import Image from "next/image";

function BlogCard({ post }) {
  return (
    <div className="singleCareer group group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-[#0b2546] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
      <Image src={post.image} alt={post.title} width={500} height={300} />
      <h2 className="text-[16px] font-semibold text-black group-hover:text-white">
        {post.title}
      </h2>
      <p className="flex items-center text-[#ccc} gap-1 group-hover:text-white">
        By {post.name} on {post.date}
      </p>
      <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
        {post.description}
      </p>

      <p>Views: {post.views}</p>
      <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
        Comments:
      </p>
      {post.comments.map((comment) => (
        <div key={comment.email}>
          <p>{comment.name} said:</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
