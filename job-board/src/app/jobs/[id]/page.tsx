"use client";
import { CustomBtn } from "@/components";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

type Params = {
  id: string;
};

const JobId = ({ params: paramsPromise }: { params: Promise<Params> }) => {
  const params = React.use(paramsPromise);
  const id = params.id;

  const jobs = useSelector((state: any) => state.jobs.jobs || []);
  const job = jobs.find((j: any) => j.id.toString() === id);

  // console.log("Params.id:", id);
  // console.log("Jobs:", jobs);
  // console.log("Matched job:", job);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <section className="grid gap-6 max-w-4xl mx-auto">
        {job ? (
          <div className=" flex-row justify-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
              <span>📍 {job.location}</span>
              <span>💼 {job.type}</span>
              <span>💰 {job.salary}</span>
            </div>
            <div>
              <span>
                <h1 className=" underline">Responsibilities</h1>
                {job.responsibilities.map((item: any, index: any) => (
                  <li key={index}>{item} </li>
                ))}{" "}
              </span>
              <span>
                <h1 className=" underline">Requirement</h1>
                {job.requirements.map((item: any, index: any) => (
                  <li key={index}>{item} </li>
                ))}
              </span>
              <span>
                <h1 className=" underline">Benefits</h1>
                {job.benefits.map((item: any, index: any) => (
                  <li key={index}>{item} </li>
                ))}
              </span>
            </div>
            <CustomBtn
              title=" Apply Now"
              btnStyle="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            />
          </div>
        ) : (
          <p className="text-red-500">Job not found</p>
        )}
        <div>
          <Link
            href="/"
            className="flex items-center justify-end text-blue-600 hover:underline"
          >
            ← Back Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JobId;
