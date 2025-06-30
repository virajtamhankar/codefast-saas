"use client";
import { useState } from "react";
const FaqListItem = ({ qa }) => {
  const [clicked, questionState] = useState(false);
  const stateChange = () => questionState(!clicked);
  return (
    <>
      <li key={qa.question}>
        <button
          className="font-semibold border-b text-left py-2 w-full flex items-center justify-between"
          onClick={stateChange}
        >
          <p>{qa.question}</p>
          {clicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </button>
      </li>
      <div className={`${clicked ? "block" : "hidden"} py-1 mb-8 opacity-90`}>
        {qa.answer}
      </div>
    </>
  );
};
export default FaqListItem;
