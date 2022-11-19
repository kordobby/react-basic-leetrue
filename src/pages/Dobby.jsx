import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Dobby = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Dobby is Free</h1>
      <h1>{id}</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
    </>
  );
};

export default Dobby;
