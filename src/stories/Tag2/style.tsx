import styled from "styled-components";

export const TagWrapper2 = styled.div<{
  border: string;
  borderRadius: string;
  fontColor: string;
  font: string;
}>`
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ fontColor }) => fontColor};
  font: ${({ font }) => font};
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding-left: 4px;
  padding-right: 4px;
  height: 30px;
  background: green;
`;
