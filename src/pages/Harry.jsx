import React from "react";
import { useNavigate } from "react-router-dom";
import useRender from "../hooks/useRender";
const Harry = () => {
  const houseElf = [1, 2, 3];
  const navigate = useNavigate();

  useRender("Harry");
  return (
    <>
      <h1>This is Harry</h1>
      {houseElf.map((value, index) => {
        return (
          <button
            key={`dobby-idx-${index}`}
            onClick={() => {
              navigate(`/dobby/${value}`);
            }}
          >
            {value} - Dobby
          </button>
        );
      })}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go home
      </button>
    </>
  );
};

export default Harry;
