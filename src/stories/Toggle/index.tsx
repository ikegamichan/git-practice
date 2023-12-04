import { ToggleWrapper } from "./style";

type ToggleProps = {
  // display: string;
  bgcolor: string;
  color: string;
  gap: string;
  width: string;
  height: string;
};

export const Toggle = ({
  // display="flex",
  bgcolor,
  color,
  gap,
  width,
  height,
}: ToggleProps) => {
  return (
    <ToggleWrapper
      bgcolor={bgcolor}
      color={color}
      gap={gap}
      width={width}
      height={height}
    >
      <div />
    </ToggleWrapper>
  );
};
