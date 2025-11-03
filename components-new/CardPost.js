import ButtonUpvote from "./ButtonUpvote";

const CardPost = ({ post }) => {
  return (
    <li className="bg-base-100 rounded-3xl p-6 flex justify-between items-start">
      <div>
        <div className="font-bold mb-1 text-lg">{post.title}</div>
        <div className="opacity-20 leading-relaxed max-h-32 overflow-scroll">
          {post.description}
        </div>
      </div>
      <ButtonUpvote
        postId={post._id.toString()}
        votesCount={post.votesCounter || 0}
      />
    </li>
  );
};
export default CardPost;
