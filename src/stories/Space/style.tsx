import styled from "styled-components";

export const SpaceWrapper = styled.div<{
  margin?: string;
  borderBottom?: string;
  border?: string;
}>`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  border-bottom: 0.5px black dotted;

  /* padding-top: 10px;
  margin-top: 10px;
  border-top: 0.5px dotted white; */
`;
