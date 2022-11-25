import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import dobby from "../assets/images/dobby.jpeg";
import styled from "styled-components";

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

      {id === "3" && (
        <HiddenDobby>
          <img src={dobby} alt="dobby" />
        </HiddenDobby>
      )}
    </>
  );
};

export default Dobby;

const HiddenDobby = styled.div`
  margin-top: 30px;
`;
