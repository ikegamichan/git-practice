import styled from "styled-components";

export const ToggleWrapper = styled.div<{
  bgcolor: string;
  color: string;
  gap: string;
  width: string;
  height: string;
}>`
  display: flex;
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
