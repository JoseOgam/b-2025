import { CustomBtnProps } from "@/types";
import React from "react";

export const CustomBtn = ({ title, handleClick, btnStyle }: CustomBtnProps) => {
  return (
    <button className={`${btnStyle}`} onClick={handleClick}>
      {title}
    </button>
  );
};
