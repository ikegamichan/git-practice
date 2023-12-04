type InputElementProps = {
  inputType: string;
  inputValue?: string;
  inputWidth?: string;
  inputHeight?: string;
  inputCecked?: boolean;
  isChecked?: boolean;
  onClick?: () => void;
  onChangeText?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const InputElement = ({
  inputType,
  inputValue,
  inputWidth,
  inputHeight,
  isChecked,
  onClick,
  onChangeText,
}: InputElementProps) => {
  return (
    <input
      type={inputType}
      value={inputValue}
      checked={isChecked}
      width={inputWidth}
      height={inputHeight}
      onClick={onClick}
      onChange={onChangeText}
    />
  );
};
