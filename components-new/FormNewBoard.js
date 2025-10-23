"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const FormNewBoard = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      const data = await axios.post("/api/board", { name });

      setName("");
      toast.success("Board created!");
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
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Board name</p>
      <label className="input w-full py-2 my-2">
        <input
          required
          type="type"
          className="grow"
          placeholder="Write here"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <p />
      <button className="btn btn-primary btn-block py-4" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create
      </button>
    </form>
  );
};
export default FormNewBoard;
