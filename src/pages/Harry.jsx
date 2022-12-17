import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
const Harry = () => {
  const houseElf = [1, 2, 3];
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [input, setInput, clickHandler] = useInput();
  console.log(input);

  // useRender("Harry");
  return (
    <>
      <h1>This is Harry</h1>

      <input onChange={setInput} value={input} />
      <button onClick={clickHandler}>될거니?</button>
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
