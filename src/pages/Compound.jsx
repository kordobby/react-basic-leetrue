import React, { useState } from "react";
import styled from "styled-components";
import useValidation from "../hooks/useValidation";

const Compound = () => {
  const [value, setValue] = useState({
    value: "",
    label: "",
  });
  const [password, passwordCheck, setPassword] = useValidation("password");
  const [email, emailCheck, setEmail] = useValidation("email");

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
      <input type="text" onChange={setEmail}></input>
      <input type="text" onChange={setPassword}></input>
      <button disabled={!passwordCheck || !emailCheck}>제출</button>
    </>
  );
};

const Select = styled.select``;

export default Compound;
