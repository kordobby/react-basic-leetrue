import { TodoCardWrapper, ButtonWrapper, CardButton } from "./Todos.style";

const TodoCards = ({ isDone, updateHandler, deleteHandler, value }) => {
  return (
    <TodoCardWrapper>
      <h1>{value?.title}</h1>
      <span>{value?.content}</span>
      <ButtonWrapper>
        <CardButton
          id={value?.id}
          onClick={deleteHandler}
          bgColor={`red`}
          value={value}
        >
          삭제하기
        </CardButton>
        <CardButton
          onClick={(event) => updateHandler(event, isDone)}
          bgColor={`blue`}
          id={value?.id}
          value={value}
        >
          {isDone ? "취소" : "완료"}
        </CardButton>
      </ButtonWrapper>
    </TodoCardWrapper>
  );
};

export default TodoCards;
