"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useState } from "react";

const ButtonDeletePost = ({ postId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleDeletePost = async () => {
    try {
      const isUserSure = window.confirm(
        "Are you sure you want to delete this post?"
      );
      if (isUserSure && !isLoading) {
        setIsLoading(true);

        await axios.delete(`/api/post?postId=${postId}`);
        toast.success("Post deleted");
        router.refresh();
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleDeletePost} className="btn btn-ghost">
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : null}
      Delete
    </button>
  );
};
export default ButtonDeletePost;
