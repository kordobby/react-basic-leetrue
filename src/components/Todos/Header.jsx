import { HeaderWrapper } from "./Todos.style";
import TodoInput from "./TodoInput";
import { InputButton } from "./Todos.style";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import { closeAlert, openAlert } from "../../redux/modules/centerModal";

const Header = ({ todoList, setTodoList }) => {
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const inputRef = useRef();
  const submitHandler = (event) => {
    // func
    event.preventDefault();
    if (todoTitle === "" || todoContent === "") {
      dispatch(
        openAlert({
          centerModal: {
            open: true,
            title: "오류!",
            subtitle: "빈 칸을 모두 채워주세요!",
            confirmBtnText: "싫은뎅!",
            cancelBtnText: "좋아요!",
            onClick: () => {
              setTodoTitle("");
              setTodoContent("");
              dispatch(closeAlert());
            },
          },
        })
      );
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
