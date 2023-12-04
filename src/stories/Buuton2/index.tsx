import { ButtonWrapper2 } from "./style";

type ButtonProps = {
  text: React.ReactNode;
  color: string;
  bgcolor: string;
  fontWeight?: string;
  fontSize?: string;
  height?: string;
  border: string;
  borderRadius?: string;
  cursor?: string;
  opacity?: number;
  onClick?: () => void;
};

export const Button2 = ({
  text,
  color,
  bgcolor = "pink",
  fontWeight,
  fontSize = "14px",
  height,
  border,
  borderRadius,
  cursor,
  opacity,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper2
      color={color}
      bg={bgcolor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      height={height}
      border={border}
      borderRadius={borderRadius}
      cursor={cursor}
      onClick={onClick}
      opacity={opacity}
    >
      {text}
    </ButtonWrapper2>
  );
};
