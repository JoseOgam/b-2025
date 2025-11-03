"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShort("");

    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    if (data.shortUrl) setShort(data.shortUrl);
    else alert(data.error || "Error shortening URL");
  }

  return (
    <main className="flex flex-col items-center mt-24">
      <h1 className="text-4xl font-bold mb-8">Shortly 🔗</h1>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a long URL..."
          className="border p-2 rounded w-80"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          Shorten
        </button>
      </form>

      {short && (
        <p className="mt-8">
          Short URL:{" "}
          <a href={short} target="_blank" className="text-blue-500 underline">
            {short}
          </a>
        </p>
      )}
    </main>
  );
}
