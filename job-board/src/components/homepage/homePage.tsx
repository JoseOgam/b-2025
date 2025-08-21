"use client";
import { setSearch } from "@/services/slice/jobSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CustomBtn } from "../customBtn/customBtn";

const Homepage = () => {
  const dispatch = useDispatch();
  const { search, jobs }: any = useSelector((state: any) => state.jobs);

  const filteredJobs = jobs.filter(
    (job: any) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          🚀 Find Your Dream Job
        </h1>
        <p className="text-gray-600 mt-2">
          Browse thousands of job listings from top companies.
        </p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search jobs or companies..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full max-w-lg px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Job Listings */}
      <section className="grid gap-6 max-w-4xl mx-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job: any) => (
            <div key={job.id}>
              <Link href={`/jobs/${job.id}`}>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h2>
                  <p className="text-gray-600">{job.company}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                    <span>💰 {job.salary}</span>
                  </div>
                  <CustomBtn
                    title="Apply Now"
                    btnStyle="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No jobs found.</p>
        )}
      </section>
    </div>
  );
};

export default Homepage;
