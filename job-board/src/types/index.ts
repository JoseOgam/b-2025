import { MouseEventHandler } from "react";

export interface CustomBtnProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnStyle?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
