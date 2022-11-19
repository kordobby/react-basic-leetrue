import React from "react";
import { useNavigate } from "react-router-dom";

const Hogwarts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Welcome</h1>
      </div>
      <button
        onClick={() => {
          navigate("/harry");
        }}
      >
        Harry
      </button>
      <button
        onClick={() => {
          navigate("/ron");
        }}
      >
        Ron
      </button>
    </>
  );
};

export default Hogwarts;
