import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginWrapper>
      <h1>로그인</h1>
      <form>
        <div className="form_input">
          <span>이메일</span>
          <input></input>
        </div>
        <div className="form_input">
          <span>패스워드</span>
          <input></input>
        </div>
        <LargeBtn>로그인</LargeBtn>
      </form>
      <LargeBtn>회원가입</LargeBtn>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form_input {
    margin-bottom: 20px;
    span {
      font-weight: 700;
      margin-right: 15px;
    }
    input {
      width: 300px;
      height: 35px;
    }
    :nth-child(2) {
      margin-bottom: 40px;
    }
  }
  form {
    margin-bottom: 20px;
  }
`;

const LargeBtn = styled.button`
  width: 300px;
  height: 50px;
  background-color: black;
  color: white;
`;

export default Login;
