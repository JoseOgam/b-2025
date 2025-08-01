"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Blog = () => {
  const router = useRouter();
  //navigation handler
  const backHome = () => {
    router.push("/");
  };
  return (
    <div>
      <div>
        <h1>blog page</h1>
        <div>
          <button onClick={backHome} className=" text-blue-500 cursor-pointer">
            back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
