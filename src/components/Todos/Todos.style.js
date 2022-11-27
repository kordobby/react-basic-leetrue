import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #eeeeee;
  width: 1000px;
  height: 100px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px 0 30px;
`;
export const StInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  background-color: white;
  border: none;
  text-align: center;
`;
export const StInputLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 50px;
  margin-right: 20px;

  span {
    color: black;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const InputButton = styled.button`
  background-color: blue;
  border-radius: 12px;

  color: white;
  height: 40px;

  padding: 0 30px 0 30px;
`;

export const ListWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ListTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export const StCardsWrapper = styled.div`
  display: flex;
  overflow: visible;
`;

export const TodoCardWrapper = styled.div`
  border: 3px solid blue;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  width: 300px;

  h1 {
    font-size: 20px;
    font-weight: 600;
  }

  span {
    font-size: 15px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const CardButton = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : "white")};
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  margin: 2px;
`;
