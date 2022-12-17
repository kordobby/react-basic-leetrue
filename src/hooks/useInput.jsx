import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openAlert, closeAlert } from "../redux/modules/centerModal";
const useInput = () => {
  // 1. 나는 input 의 값과, 값을 변경하는 함수를 만들거야.
  const [value, setValue] = useState("");
  const handler = (event) => {
    setValue(event.target.value);
  };

  // 2. 값을 다 만들면, 이거를 서버에 보내주는 dispatch 함수를 여기다가 만들어서 클릭하면 쓸 수 있게 할거야.
  const dispatch = useDispatch();

  const submitHandler = () => {
    console.log("핸들핸들");
    console.log(value);
    dispatch(
      openAlert({
        centerModal: {
          open: true,
          title: "이거 만들 싶?",
          subtitle: "돌아오는 건 포트키를 사용해",
          confirmBtnText: "확인",
          cancelBtnText: "취소",
          onClick: () => {
            dispatch(closeAlert());
          },
        },
      })
    );
  };

  // 내가 밖에서 사용하고 싶은 놈들의 모양
  return [value, handler, submitHandler];
};

export default useInput;

// hook 을 컴포넌트에서 사용을 할 때
/*
const [value, handler, submitHandler] = useInput();
      // 이름을 내가 자유롭게 지어주면 된다. 중복되지만 않게!
*/
