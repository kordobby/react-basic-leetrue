import React from "react";
import InputForm from "../components/TodoList/InputForm";
import Header from "../components/TodoList/Header";
import Contents from "../components/TodoList/Contents";
import { useSelector } from "react-redux";

const TodoList = () => {
  return (
    <>
      <Header></Header>
      <InputForm />
      <Contents></Contents>
    </>
  );
};

export default TodoList;
