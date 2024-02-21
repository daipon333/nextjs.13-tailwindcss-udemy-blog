"use client";

import { deleteArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/blog/${id}`, {
      method: "DELETE",
    });

    router.push("/");
    router.refresh();
    setLoading(false);
  };

  return (
    <div
      className={`${
        loading
          ? "bg-red-500 cursor-not-allowed"
          : "bg-red-500 hover:bg-red-600"
      }
      rounded-md py-2 px-5 inline cursor-ppointer`}
      onClick={handleDelete}
    >
      <button disabled={loading}>削除</button>
    </div>
  );
};

export default DeleteButton;
