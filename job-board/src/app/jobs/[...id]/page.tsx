"use client";
import React from "react";
import { useSelector } from "react-redux";
type Params = {
  id: string;
};

const JobId = ({ params: paramsPromise }: { params: Promise<Params> }) => {
  const params = React.use(paramsPromise);
  const id = params.id;

  //get aray of jobs
  const jobs = useSelector((state: any) => state.jobs.jobs);
  const job = jobs.find((j: any) => j.id.toString() === id);

  return (
    <div>
      {jobs.map((job: any) => (
        <div key={job.id}>
          <h1>{job.title} </h1>
        </div>
      ))}
    </div>
  );
};

export default JobId;
