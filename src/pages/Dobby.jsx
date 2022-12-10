import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dobby from "../assets/images/dobby.jpeg";
import styled from "styled-components";
const dobbyData = require("../shared/dobby.json");

const Dobby = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = dobbyData.filter((value) => value.id === Number(id));
    if (data.length === 0) {
      navigate("/");
      return;
    }
  }, []);

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
