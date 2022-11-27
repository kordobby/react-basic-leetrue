import TodoCards from "./TodoCards";
import { ListWrapper, ListTitle, StCardsWrapper } from "./Todos.style";
const TodoList = ({
  isDone,
  title,
  deleteHandler,
  updateHandler,
  cardList,
}) => {
  return (
    <ListWrapper>
      <ListTitle>{title}</ListTitle>
      {isDone ? (
        <StCardsWrapper>
          {cardList?.map((value, index) => {
            if (value.isDone === true) {
              return (
                <TodoCards
                  key={`cardList-${index}-todo`}
                  isDone={isDone}
                  updateHandler={updateHandler}
                  deleteHandler={deleteHandler}
                  value={value}
                ></TodoCards>
              );
            }
          })}
        </StCardsWrapper>
      ) : (
        <StCardsWrapper>
          {cardList?.map((value, index) => {
            if (value?.isDone !== true) {
              return (
                <TodoCards
                  key={`cardList-${index}-todo`}
                  updateHandler={updateHandler}
                  deleteHandler={deleteHandler}
                  value={value}
                ></TodoCards>
              );
            }
          })}
        </StCardsWrapper>
      )}
    </ListWrapper>
  );
};

export default TodoList;
