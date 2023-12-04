import { TextareaWrapper } from "@/stories/Textarea/style";

type TextareaProps = {
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  placeholder: string;
  fontSize: string;
  gap: string;
  padding: string;
  margin: string;
};

export const Textarea = ({
  width,
  height,
  border,
  borderRadius,
  placeholder,
  fontSize,
  gap,
  padding,
  margin,
}: TextareaProps) => {
  return (
    <div>
      <TextareaWrapper
        width={width}
        height={height}
        border={border}
        borderRadius={borderRadius}
        placeholder={placeholder}
        fontSize={fontSize}
        gap={gap}
        padding={padding}
        margin={margin}
      />
    </div>
  );
};
