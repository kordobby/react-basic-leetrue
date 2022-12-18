import React, { useState } from "react";
import styled from "styled-components";
import useSignUp from "../hooks/useValidation";

const Compound = () => {
  const [input, validation, setInput] = useSignUp();
  console.log(input);
  // select tag
  /*
  autofocus:Specifies that the drop-down list should automatically get focus when the page loads,
  disabled, 
  form : Defines which form the drop-down list belongs to, 
  multiple : Specifies that multiple options can be selected at once,
  name: Defines a name for the drop-down list,
  required,
  size: Defines the number of visible options in a drop-down list
  */
  return (
    <>
      {/* <label for="hogwarts">최애캐</label>
      <Select name="hogwarts" id="hogwarts">
        <option value="" disabled selected>
          선택
        </option>
        <optgroup label="main">
          <option value="harry" id="harry">
            해리포터
          </option>
          <option value="ron" id="ron">
            론
          </option>
          <option value="hermione" id="hermione">
            헤르미온느
          </option>
        </optgroup>
        <optgroup label="sub">
          <option value="dobby" id="dobby">
            도비
          </option>
          <option value="luna" id="luna">
            루나
          </option>
        </optgroup>
      </Select> */}
      <div>
        <label>아이디</label>
        <input
          type="text"
          onChange={(e) => {
            setInput(e, "email");
          }}
        ></input>
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="text"
          onChange={(e) => {
            setInput(e, "password");
          }}
        ></input>
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input
          type="text"
          onChange={(e) => {
            setInput(e, "confirmPassword");
          }}
        ></input>
      </div>
      {validation && <p>유효성검사 통과</p>}
      <Button disabled={!validation}>제출</Button>
    </>
  );
};

const Select = styled.select``;
const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${({ disabled }) => (disabled ? "gray" : "yellow")};
  color: ${({ disabled }) => (disabled ? "red" : "blue")};
`;
export default Compound;
