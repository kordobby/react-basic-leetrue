import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeAlert, openAlert } from "../redux/modules/centerModal";
const Hogwarts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToHarryHandler = () => {
    navigate("/harry");
  };

  return (
    <>
      <div>
        <h1>Welcome</h1>
      </div>
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
    </>
  );
};

export default Hogwarts;
