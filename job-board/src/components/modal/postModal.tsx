import { ModalProps } from "@/types";
import { CustomBtn } from "../customBtn/customBtn";

export const ModalPost = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
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
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Job title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Company</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Location </label>
            <input type="text" className="w-full border rounded p-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Salary </label>
            <input type="text" className="w-full border rounded p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Responsibilities
            </label>
            <input type="text" className="w-full border rounded p-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Requirement </label>
            <input type="text" className="w-full border rounded p-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Benefits </label>
            <input type="text" className="w-full border rounded p-2 mt-1" />
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
