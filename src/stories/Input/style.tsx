import styled from "styled-components";

export const InputWrapper = styled.input<{
  width: string;
  padding: string;
  tate: string;
}>`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ tate }) => tate};
`;
