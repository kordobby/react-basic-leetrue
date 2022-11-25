import styled from "styled-components";

export const StWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const AlertWrapper = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: aliceblue;
`;

export const AlertTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 15px 20px 15px;
`;

export const AlertBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlertBtnElem = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 3px;
`;
