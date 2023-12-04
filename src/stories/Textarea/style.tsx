import styled from "styled-components";

export const TextareaWrapper = styled.textarea<{
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  fontSize: string;
  gap: string;
  padding: string;
  margin: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  display: flex;
  align-items: center;
  justify-content: center;
  resize: none;
`;
