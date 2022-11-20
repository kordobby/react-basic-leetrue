import styled from "styled-components";

export const AlertWrapper = styled.div`
  width: 300px;
  height: 300px;

  background-color: yellow;
`;

export const AlertTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlertBtnWrapper = styled.div`
  display: flex;
`;

export const AlertBtnElem = styled.button`
  width: 50px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
`;
