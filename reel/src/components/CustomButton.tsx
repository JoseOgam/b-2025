import type { CustomButtonProps } from "../types";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
}) => {
  return (
    <div>
      <button onClick={handleClick} className={`${containerStyles}`}>
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
