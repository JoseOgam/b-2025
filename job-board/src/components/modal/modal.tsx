import { ModalProps } from "@/types";
import React from "react";
import { CustomBtn } from "../customBtn/customBtn";

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <CustomBtn
          title="X"
          handleClick={onClose}
          btnStyle="absolute top-3 right-3 text-gray-600 hover:text-black"
        />

        {/* Modal Content */}
        <h2 className="text-xl font-bold mb-4">Apply for Job</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Job Title</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="front end developer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded p-2 mt-1"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Resume</label>
            <input type="file" className="w-full border rounded p-2 mt-1" />
          </div>
          <CustomBtn
            title=" Submit Application"
            btnStyle="w-full bg-indigo-600 text-white py-2 rounded hover:bg-blue-700"
          />
        </form>
      </div>
    </div>
  );
};
