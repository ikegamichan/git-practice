import styled from "styled-components";

export const ButtonWrapper = styled.input<{
  height?: string;
  width?: string;
  border?: string;
  borderRadius?: string;
}>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: pointer;
`;
