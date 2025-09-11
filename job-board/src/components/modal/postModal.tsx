import { ModalProps } from "@/types";
import { CustomBtn } from "../customBtn/customBtn";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const ModalPost = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  const router = useRouter();
  const [jobs, setJobs] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
  });

  const onPost = async () => {
    try {
      const response = await axios.post("/api/jobs/addJobs", jobs);
      console.log("job posted successfully", response.data);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("job post failed", error.message);
    }
  };
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <CustomBtn
          title="X"
          handleClick={onClose}
          btnStyle="absolute top-3 right-3 text-gray-600 hover:text-black"
        />

        {/* Modal Content */}
        <h2 className="text-xl font-bold mb-4">Post Jobs</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              value={jobs.title}
              onChange={(e: any) => setJobs({ ...jobs, title: e.target.value })}
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Job title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Company</label>
            <input
              value={jobs.company}
              onChange={(e: any) =>
                setJobs({ ...jobs, company: e.target.value })
              }
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Location </label>
            <input
              value={jobs.location}
              onChange={(e: any) =>
                setJobs({ ...jobs, location: e.target.value })
              }
              type="text"
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type </label>
            <input
              value={jobs.type}
              onChange={(e: any) => setJobs({ ...jobs, type: e.target.value })}
              type="text"
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Salary </label>
            <input
              value={jobs.salary}
              onChange={(e: any) =>
                setJobs({ ...jobs, salary: e.target.value })
              }
              type="text"
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Responsibilities
            </label>
            <input
              value={jobs.responsibilities}
              onChange={(e: any) =>
                setJobs({ ...jobs, responsibilities: e.target.value })
              }
              type="text"
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Requirement </label>
            <input
              value={jobs.requirements}
              onChange={(e: any) =>
                setJobs({ ...jobs, requirements: e.target.value })
              }
              type="text"
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Benefits </label>
            <input
              value={jobs.benefits}
              onChange={(e: any) =>
                setJobs({ ...jobs, benefits: e.target.value })
              }
              type="text"
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <CustomBtn
            title=" Submit Application"
            btnStyle="w-full bg-indigo-600 text-white py-2 rounded hover:bg-blue-700"
            handleClick={onPost}
          />
        </form>
      </div>
    </div>
  );
};
