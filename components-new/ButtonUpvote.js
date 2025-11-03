"use client";

import { useRouter } from "next/navigation";
import { ArrowUpIcon, Loader2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

const ButtonUpvote = ({ postId, votesCount: initialVotesCount = 0 }) => {
  const localStorageKeyName = `codefastSaas-hasVoted-${postId}`;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [votesCount, setVotesCount] = useState(initialVotesCount);
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    setIsVoted(localStorage.getItem(localStorageKeyName) === "true");
  }, []);

  const handleVote = async () => {
    const newVotedState = !isVoted;
    const newVotesCount = newVotedState ? votesCount + 1 : votesCount - 1;

    // Optimistic update
    setIsVoted(newVotedState);
    setVotesCount(newVotesCount);

    startTransition(async () => {
      try {
        const method = newVotedState ? "POST" : "DELETE";
        const res = await fetch(`/api/vote?postId=${postId}`, {
          method,
        });

        if (newVotedState === true)
          localStorage.setItem(localStorageKeyName, "true");
        else localStorage.removeItem(localStorageKeyName);

        if (!res.ok) {
          throw new Error("Failed to vote");
        }
        // Refresh data on the page after successful vote
        router.refresh();
      } catch (error) {
        // Revert optimistic update on error
        setIsVoted(!newVotedState);
        setVotesCount(votesCount);
        console.error(error);
      }
    });
  };

  const buttonClass = `btn btn-square ${
    isVoted ? "btn-primary" : "hover: border-base-content/25"
  } flex flex-col h-20 w-20`;

  return (
    <button
      className={`${buttonClass}`}
      onClick={handleVote}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="animate-spin h-6 w-6" />
      ) : (
        <>
          <ArrowUpIcon
            className={`h-6 w-6 hover:-translate-y-0.5 duration-200 ${isVoted ? "text-white" : ""}`}
          />
          <span className="text-lg font-bold">{votesCount}</span>
        </>
      )}
    </button>
  );
};

export default ButtonUpvote;
