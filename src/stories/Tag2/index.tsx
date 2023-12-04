import { TagWrapper2 } from "./style";

type TagProps = {
  border: string;
  borderRadius: string;
  fontColor: string;
  font: string;
  text: string;
};
export const Tag2 = ({
  border,
  borderRadius,
  fontColor,
  font,
  text,
}: TagProps) => {
  return (
    <TagWrapper2
      border={border}
      borderRadius={borderRadius}
      fontColor={fontColor}
      font={font}
    >
      {text}
    </TagWrapper2>
  );
};
