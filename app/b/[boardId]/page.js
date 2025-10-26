import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { redirect } from "next/navigation";
import Link from "next/link";
import FormAddPost from "@/components-new/FormAddPost";
import Post from "@/models/Post";
import CardPost from "@/components-new/CardPost";

const getData = async (boardId) => {
  await connectMongo();

  const board = await Board.findById(boardId);
  const posts = await Post.find({ boardId }).sort({ createdAt: -1 });

  if (!board) redirect("/");

  return { board, posts };
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;
  const { board, posts } = await getData(boardId);

  return (
    <main className="bg-base-200 min-h-screen">
      <section className="max-w-5xl mx-auto p-5">
        <h1 className="text-lg font-bold"> {board.name} (public)</h1>
      </section>
      <section className="max-w-5xl mx-auto px-5 flex flex-col md:flex-row items-start gap-8 pb-12">
        <FormAddPost boardId={boardId} />
        <ul className="space-y-4 flex-grow">
          {posts.map((post) => {
            return <CardPost key={post._id} post={post} />;
          })}
        </ul>
      </section>
    </main>
  );
}
