import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { redirect } from "next/navigation";
import Link from "next/link";
import CardBoardLink from "@/components-new/CardBoardLink";
import ButtonDeleteBoard from "@/components-new/ButtonDeleteBoard";
import Post from "@/models/Post";
import CardPostAdmin from "@/components-new/CardPostAdmin";

const getData = async (boardId) => {
  await connectMongo();
  const session = await auth();
  const board = await Board.findOne({
    _id: boardId,
    userId: session?.user?.id,
  });
  if (!board) redirect("/user_dashboard");

  const posts = await Post.find({ boardId }).sort({ createdAt: -1 });

  return { board, posts };
};

export default async function FeedbackBoard({ params }) {
  const { boardId } = params;
  const { board, posts } = await getData(boardId);
  return (
    <main className="bg-base-200 min-h-screen">
      <section className="bg-base-100">
        <div className="max-w-5xl mx-auto px-5 py-3">
          <Link href="/user_dashboard" className="btn">
            {/* Back icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            Back
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-12 flex flex-col md:flex-row gap-12">
        <div className="space-y-8">
          <h1 className="font-extrabold text-xl mb-4">{board.name}</h1>
          <CardBoardLink boardId={board._id.toString()} />
          <ButtonDeleteBoard boardId={board._id.toString()} />
        </div>

        <div>
          <ul className="space-y-4 flex-grow">
            {posts.map((post) => (
              <CardPostAdmin key={post._id} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
