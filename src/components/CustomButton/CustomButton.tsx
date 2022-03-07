interface ISize {
  width: string;
  height: string;
}

export interface ButtonProps {
  title: string;
  size?: string;
  backgroundColor?: string;
  onClick?: () => void;
  borderRadius?: string;
}

const generateSize = (size: string): ISize => {
  return { width: size, height: size };
};

const CustomButton = ({
  size = "70px",
  backgroundColor = "grey",
  borderRadius = "20px",
  title,
  onClick,
}: ButtonProps) => {
  const sizeObj = generateSize(size);

  const wrapperStyle = {
    ...sizeObj,
    backgroundColor,
    borderRadius,
  };

  return (
    <button style={wrapperStyle} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
