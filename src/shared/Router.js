import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Harry from "../pages/Harry";
import Ron from "../pages/Ron";
import Hogwarts from "../pages/Hogwarts";
// Route 설정 뼈대 잡기
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hogwarts />}></Route>
        <Route path="harry" element={<Harry />}></Route>
        <Route path="ron" element={<Ron />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
