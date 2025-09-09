"use client";
import { CustomBtn } from "@/components";
import { ModalPost } from "@/components/modal/postModal";
import React, { useState } from "react";

const AddJobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div>
        <h1>Click to add Job</h1>
        <CustomBtn
          title="Add Job"
          btnStyle=" bg-emerald-700 pt-2 pb-2 px-2"
          handleClick={() => setIsModalOpen(true)}
        />
        <div>
          <ModalPost
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
