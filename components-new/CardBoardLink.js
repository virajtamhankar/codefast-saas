"use client";
import { toast } from "react-hot-toast";
const CardBoardLink = ({ boardId }) => {
  const boardLink = `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://codefast-saas-gqvugezje-virajtamhankars-projects.vercel.app/"
  }/b/${boardId}`;

  const copyLink = () => {
    navigator.clipboard.writeText(boardLink);
    toast.success("Link copied to Clipboard!");
  };

  return (
    <div className="bg-base-100 rounded-2xl text-sm px-4 py-2.5 flex items-center truncate">
      <p>{boardLink}</p>
      <button className="btn btn-sm btn-neutral btn-square" onClick={copyLink}>
        Share
      </button>
    </div>
  );
};
export default CardBoardLink;
