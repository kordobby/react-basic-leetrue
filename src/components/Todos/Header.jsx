import { HeaderWrapper } from "./Todos.style";
import TodoInput from "./TodoInput";
import { InputButton } from "./Todos.style";
import { useState } from "react";
import { useRef } from "react";

const Header = ({ todoList, setTodoList }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const inputRef = useRef();
  const submitHandler = (event) => {
    // func
    event.preventDefault();
    if (todoTitle === "" || todoContent === "") {
      alert("빈칸을 모두 입력해주세요!");
      return;
    }
    const newTodo = {
      id: `todo-${todoTitle}-${todoList.length}`,
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };
    setTodoTitle("");
    setTodoContent("");
    setTodoList((prev) => [...prev, newTodo]);
  };
  return (
    <HeaderWrapper onSubmit={(event) => submitHandler(event)}>
      <TodoInput
        type="text"
        title={`제목`}
        func={setTodoTitle}
        text={todoTitle}
      ></TodoInput>
      <TodoInput
        type="text"
        title={`내용`}
        func={setTodoContent}
        text={todoContent}
      ></TodoInput>
      <InputButton type="submit">추가하기</InputButton>
    </HeaderWrapper>
  );
};

export default Header;
