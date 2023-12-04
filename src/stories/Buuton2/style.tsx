import styled from "styled-components";

export const ButtonWrapper2 = styled.button<{
  color: string;
  bg: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  cursor?: string;
  opacity?: number;
}>`
  padding-right: 16px;
  padding-left: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  width: fit-content;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  background-color: ${({ bg }) => bg};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ cursor }) => cursor};
`;

export const Main = styled.div`
  padding: 20px;
  background-color: rgb(251, 253, 237);
`;
