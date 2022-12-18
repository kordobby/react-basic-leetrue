import React from "react";
import styled from "styled-components";
import Harry from "../../pages/Harry";

const data = [
  { id: "harry", value: "harry", content: "해리포터" },
  { id: "ron", value: "ron", content: "론위즐리" },
  { id: "hermione", value: "hermione", content: "헤르미온느" },
  { id: "dobby", value: "dobby", content: "도비" },
  { id: "luna", value: "luna", content: "루나" },
];

const Select = () => {
  return (
    <SelectWrapper>
      <label for="hogwarts">최애캐</label>
      <select name="hogwarts" id="hogwarts">
        <option value="" disabled selected>
          선택
        </option>
        {data.map((value, index) => {
          return (
            <option value={value.value} id={value.id}>
              {value.content}
            </option>
          );
        })}
      </select>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div``;
