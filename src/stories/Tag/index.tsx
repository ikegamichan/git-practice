import { TagWrapper, Aaa } from "@/stories/Tag/style";

type TagProps = {
  text: React.ReactNode;
  bgColor: string;
  fontColor: string;
  fontSize: string;
  border: string;
  borderColor: string;

  borderRadius?: string;
  width?: string;
};

export const Tag = ({
  text,
  bgColor,
  fontColor,
  fontSize,
  border,
  borderColor,
  borderRadius,
  width,
}: TagProps) => {
  let a = 0;
  // @ts-ignore
  a = "0";
  console.log(a);
  return (
    <TagWrapper
      bgColor={bgColor}
      id="ikegamoi"
      // @ts-ignore
      fontColor={fontColor}
      fontSize={fontSize}
      border={border}
      borderColor={borderColor}
      borderRadius={borderRadius}
      width={width}
    >
      {text}
    </TagWrapper>
  );
};

type AaaProps = {
  color: string;
};

export const AaaTag = ({ color }: AaaProps) => {
  return <Aaa color={color} />;
};
