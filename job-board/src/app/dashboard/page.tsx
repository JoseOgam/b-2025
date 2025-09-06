"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const DashBoard = () => {
  const router = useRouter();
  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("logout success");
      router.push("/login");
    } catch (error: any) {
      console.log("Logout failed", error.message);
    }
  };
  return (
    <div>
      <div>
        <h1>DashBoard</h1>
        <button
          onClick={onLogout}
          className=" bg-blue-700 rounded-2xl pt-2 px-2 pb-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
