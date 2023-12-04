import { InputWrapper } from "@/stories/Input/style";

type InputProps = {
  width: string;
  padding: string;
  height: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  width,
  padding,
  height,
  value,
  onChange,
}: InputProps) => {
  return (
    <InputWrapper
      type="text"
      value={value}
      width={width}
      padding={padding}
      tate={height}
      onChange={onChange}
    />
  );
};
