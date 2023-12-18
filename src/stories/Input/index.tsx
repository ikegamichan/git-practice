import { InputWrapper } from "@/stories/Input/style";

type InputProps = {
  type: string;
  width: string;
  padding: string;
  height: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  width,
  padding,
  height,
  value,
  onChange,
}: InputProps) => {
  return (
    <InputWrapper
      type={type}
      value={value}
      width={width}
      padding={padding}
      tate={height}
      onChange={onChange}
    />
  );
};
