import React from "react";
import Header from "../components/Todos/Header";
import TodoList from "../components/Todos/TodoList";
import { useState } from "react";

/* useState 를 이용한 todolist 구현 */
const Todos = () => {
  const [todoList, setTodoList] = useState([]);

  const deleteHandler = (event) => {
    const newList = todoList.filter((v, i) => v.id !== event.target.id);
    setTodoList(newList);
  };

  const updateHandler = (event, isDone) => {
    const newList = todoList.map((value, index) => {
      if (value.id === event.target?.id) {
        return {
          ...value,
          isDone: !isDone ? true : false,
          id: !isDone ? `done-${index}-${todoList.length}` : value.id,
        };
      } else {
        return value;
      }
    });
    setTodoList(newList);
  };
  return (
    <>
      <Header todoList={todoList} setTodoList={setTodoList} />
      <TodoList
        cardList={todoList}
        title={`Working..`}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
      <TodoList
        cardList={todoList}
        title={`Done..!`}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        isDone={true}
      />
    </>
  );
};

export default Todos;
