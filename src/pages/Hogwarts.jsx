import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeAlert, openAlert } from "../redux/modules/centerModal";
import CategoryBox from "../components/CategoryBox";
import CategoryInput from "../components/CategoryBox/CategoryInput";

const Hogwarts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToHarryHandler = () => {
    navigate("/harry");
  };
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    console.log("카운트가 바뀌고 있어."); // 딱 한번만 불리겠죠?
    return console.log("화면이 무너지고있어.");
  }, []); // 디펜던시 : 의존성 배열 값을 안넣으면

  console.log("no Effect");
  return (
    <>
      <div>
        <h1>Welcome</h1>
        <button onClick={() => setCount(count + 1)}>ㅋ카운터</button>
        <button onClick={() => setCountTwo(countTwo + 1)}>ㅋ카운터2</button>
      </div>
      <h1>{count}</h1>
      <h1>{countTwo}</h1>
      <button
        onClick={() => {
          dispatch(
            openAlert({
              centerModal: {
                open: true,
                title: "해리에게 가겠니?",
                subtitle: "돌아오는 건 포트키를 사용해",
                confirmBtnText: "확인",
                cancelBtnText: "취소",
                onClick: () => {
                  goToHarryHandler();
                  dispatch(closeAlert());
                },
              },
            })
          );
        }}
      >
        Harry
      </button>
      <button
        onClick={() => {
          navigate("/ron");
        }}
      >
        Ron
      </button>
      <button
        onClick={() => {
          navigate("/chamber");
        }}
      >
        비밀의 방
      </button>
      <button
        onClick={() => {
          navigate("/todos");
        }}
      >
        투두리스트
      </button>
      {/* <CategoryBox title={`프로젝트 제목`}>
        <CategoryInput />
      </CategoryBox> */}
    </>
  );
};

export default Hogwarts;
