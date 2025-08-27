import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { redirect } from "next/navigation";
import Link from "next/link";

const getBoard = async (boardId) => {
  await connectMongo();

  const board = await Board.findById(boardId);
  if (!board) redirect("/");
  return board;
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;
  const board = await getBoard(boardId);
  return (
    <main className="bg-base-200 min-h-screen">
      {" "}
      <section className="bg-base-100">
        {" "}
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
          <h1 className="font-extrabold text-xl mb-4">{board.name}</h1>
        </div>
      </section>
    </main>
  );
}
