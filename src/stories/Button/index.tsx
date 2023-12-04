import { ButtonWrapper } from "@/stories/Button/style";

type ButtonProps = {
  height?: string;
  width?: string;
  text: string;
  border?: string;
  borderRadius?: string;
  inputType: string;
  checked?: boolean;
  onClick?: () => void;
};

export const Button = ({
  height,
  width,
  text,
  border,
  borderRadius,
  inputType,
  onClick,
  checked,
}: ButtonProps) => {
  // console.log(checked);
  return (
    <ButtonWrapper
      checked={checked}
      type={inputType}
      value={text}
      height={height}
      width={width}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
    />
  );
};
