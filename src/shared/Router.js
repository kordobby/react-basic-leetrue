import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Harry from "../pages/Harry";
import Ron from "../pages/Ron";
import Hogwarts from "../pages/Hogwarts";
import Dobby from "../pages/Dobby";
import ChamberOfSecrete from "../pages/ChamerOfSecrete";
import Todos from "../pages/Todos";
import Form from "../pages/Form";
import TodoList from "../pages/TodoList";
// Route 설정 뼈대 잡기
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hogwarts />} />
        <Route path="/harry" element={<Harry />} />
        <Route path="/ron" element={<Ron />} />
        <Route path="/dobby/:id" element={<Dobby />} />
        <Route path="/chamber" element={<ChamberOfSecrete />} />
        <Route path="/form-prac" element={<Form />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/*" element={<Todos />}></Route>
        <Route path="/prac" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
