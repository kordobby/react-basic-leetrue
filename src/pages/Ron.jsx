import React from "react";
import { useLocation } from "react-router-dom";
const Ron = () => {
  const location = useLocation();
  console.log("location =====>", location);
  return <>This is Ron</>;
};

export default Ron;
