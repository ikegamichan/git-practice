import styled from "styled-components";

export const TagWrapper = styled.div<{
  bgColor: string;
  fontColor: string;
  fontSize: string;
  border: string;
  borderColor: string;
  borderRadius?: string;
  width?: string;
}>`
  padding-left: 4px;
  padding-right: 4px;
  height: 20px;
  width: fit-content;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  background-color: ${({ bgColor }) => bgColor};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  color: ${(props) => {
    return props.fontColor;
  }};
  color: ${({ fontColor }) => {
    return fontColor;
  }};
  color: ${({ fontColor }) => fontColor};
  color: ${(fontColor) => {
    return fontColor.fontColor;
  }};
  border: ${({ border }) => border};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
`;

export const Aaa = styled.div<{
  color: string;
}>`
  color: ${({ color }) => color};
`;
