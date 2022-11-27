import { HeaderWrapper } from "./Todos.style";
import TodoInput from "./TodoInput";
import { InputButton } from "./Todos.style";
import { useState } from "react";

const Header = ({ todoList, setTodoList }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const submitHandler = () => {
    // func
    const newTodo = {
      id: `todo-${todoTitle}-${todoList.length}`,
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
  };

  console.log(todoList);
  return (
    <HeaderWrapper>
      <TodoInput title={`제목`} func={setTodoTitle}></TodoInput>
      <TodoInput title={`내용`} func={setTodoContent}></TodoInput>
      <InputButton onClick={submitHandler}>추가하기</InputButton>
    </HeaderWrapper>
  );
};

export default Header;
