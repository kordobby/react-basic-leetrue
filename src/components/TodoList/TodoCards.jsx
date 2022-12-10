import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delTodo } from "../../redux/modules/todo";

const CardWrapper = styled.div`
  border: 3px solid green;
  padding: 5px 10px;
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button {
    width: 100px;
    height: 50px;
    border: 1px solid orange;
  }
`;

// data : title, contents, isDone, id
/*
data : {
  title : "",
  contents : "",
  isDone : false,
  id : 0
},

*/
const TodoCards = ({ data }) => {
  const dispatch = useDispatch();
  const delTodoHandler = () => {
    dispatch(delTodo(data?.id));
  };

  return (
    <>
      <CardWrapper>
        <button type="text">상세보기</button>
        <div>
          <p>{data?.title}</p>
          <p>{data?.contents}</p>
        </div>
        <div>
          <button onClick={delTodoHandler}>삭제</button>
          <button>완료</button>
        </div>
      </CardWrapper>
    </>
  );
};

export default TodoCards;
