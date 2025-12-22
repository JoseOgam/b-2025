"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type User = {
  username: string;
  email: string;
};

const DashBoard = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({ username: "", email: "" });
  const [loading, setLoading] = useState(true);

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Dashboard</h1>

      <button
        onClick={onLogout}
        className="bg-blue-700 text-white rounded-2xl px-4 py-2 mt-4"
      >
        Logout
      </button>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Welcome, {user.username} 👋</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default DashBoard;
