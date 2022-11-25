import React, { useState } from "react";
import elf from "../assets/images/elf.png";
import styled from "styled-components";

const ChamberOfSecrete = () => {
  const [elfCount, setElfCount] = useState(1);
  const [elfHouse, setElfHouse] = useState([]);
  const elfHell = () => {
    const moreElf = elfCount * 2;
    setElfCount(moreElf);
    const arr = Array.apply(null, { length: moreElf });
    setElfHouse(arr);
  };

  return (
    <>
      <h1>비밀의 방</h1>
      <button onClick={elfHell}>경고 :: 누르지마시오</button>
      <ElfContainer>
        {elfHouse.map((value, index) => {
          console.log(value);
          return <ElfImage src={elf} alt="elf" key={`elf-${index}`} />;
        })}
      </ElfContainer>
    </>
  );
};

export default ChamberOfSecrete;

const ElfContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: scroll; */
  margin-top: 50px;
`;
const ElfImage = styled.img`
  width: 100px;
`;
