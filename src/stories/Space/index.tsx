import { SpaceWrapper } from "@/stories/Space/style";

type BorderProps = {
  margin?: string;
  borderBottom?: string;
  border?: string;
};

export const Space = ({ margin, borderBottom, border }: BorderProps) => {
  return (
    <SpaceWrapper margin={margin} border={border} borderBottom={borderBottom} />
  );
};
