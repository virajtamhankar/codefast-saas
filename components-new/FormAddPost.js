"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const FormAddPost = ({ boardId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      await axios.post(`/api/post?boardId=${boardId}`, { title, description });

      setTitle("");
      setDescription("");
      toast.success("Post added!");
      router.refresh();
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8 lg:w-100 md:w-48 shrink-0 md:sticky top-8"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Suggest a feature</p>
      <label className="input w-full py-2 my-2">
        <input
          required
          type="type"
          className="grow"
          placeholder="Green buttons please"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          maxLength={100}
        />
      </label>
      <p />

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Description</legend>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={1000}
          className="textarea h-24"
          placeholder="Write here"
        ></textarea>
      </fieldset>

      <button className="btn btn-primary btn-block py-4" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create
      </button>
    </form>
  );
};
export default FormAddPost;
