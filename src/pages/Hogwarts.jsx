import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeAlert, openAlert } from "../redux/modules/centerModal";
import CategoryBox from "../components/CategoryBox";
import CategoryInput from "../components/CategoryBox/CategoryInput";
import styled from "styled-components";
import Hide from "../components/Hide";
const Hogwarts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToHarryHandler = () => {
    navigate("/harry");
  };
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [hide, setHide] = useState(false);
  // dispatch, 첫 데이터 가져오기 (한번만 실행되면 좋겠다.)
  // useEffect(() => {}, []);

  // title, contents, 리렌더링이 필요한 부분
  // useEffect(() => {
  //   console.log("처음 한번만 실행시켜줘, 의존성 배열 비어있음");
  //   // dispatch(__getPost(id));
  // }, []);

  const cleanUpFunc = () => {
    console.log("화면이 무너지고있어.");
    setCountTwo(9);
  };
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {hide && <Hide></Hide>}
      {modal && (
        <Modal>
          <h1>모달닫기</h1>
          <button onClick={() => setHide(!hide)}>모달닫기</button>
        </Modal>
      )}
      <div>
        <h1>Welcome</h1>
        {/* <button onClick={() => setCount(count + 1)}>ㅋ카운터</button>
        <button onClick={() => setCountTwo(countTwo + 1)}>ㅋ카운터2</button> */}
        <button onClick={() => setHide(!hide)}>모달 열기</button>
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

const Modal = styled.div`
  position: fixed;
  top: 30%;
  left: 40%;
  width: 300px;
  height: 300px;
  background-color: yellow;

  button {
    width: 100px;
    height: 50px;
    background-color: black;
    color: white;
  }
`;

export default Hogwarts;
