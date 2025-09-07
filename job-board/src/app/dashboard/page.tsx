"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const router = useRouter();
  const [user, setUser] = useState({ username: "", email: "" });
  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("logout success");
      router.push("/login");
    } catch (error: any) {
      console.log("Logout failed", error.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUser(res.data);
      } catch (error: any) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, []);
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
        <div className="p-6">
          <h1 className="text-xl font-bold">Welcome, {user.username} 👋</h1>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
