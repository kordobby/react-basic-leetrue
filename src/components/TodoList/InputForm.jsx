import React, { useState } from "react";
import { addTodo } from "../../redux/modules/todo";
import { useDispatch } from "react-redux";

const InputForm = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  const getTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const getContentsHandler = (event) => {
    setContents(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    const payload = {
      id: 0,
      title: title,
      contents: contents,
      isDone: false,
    };
    console.log("hello");
    dispatch(addTodo(payload));
  };

  return (
    <>
      <form>
        <input onChange={getTitleHandler} type="text" name="title"></input>
        <input
          onChange={getContentsHandler}
          type="text"
          name="contents"
        ></input>
        <button type="submit" onClick={addTodoHandler}>
          추가하기
        </button>
      </form>
    </>
  );
};

export default InputForm;
