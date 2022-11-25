import React from "react";
import { closeAlert } from "../../redux/modules/centerModal";
import * as UI from "./AlertModal.style"; // 이렇게 뽑아오는게 더 비효율적이려나?
import { useSelector, useDispatch } from "react-redux";

const AlertModal = () => {
  // const { title, subtitle, confirmBtnText, cancelBtnText, onClick } =
  //   useSelector((state) => state?.AlertModal?.centerModal);
  const dispatch = useDispatch();
  const { title, subtitle, confirmBtnText, cancelBtnText, onClick } =
    useSelector((state) => state?.centerModal?.centerModal);

  return (
    <UI.StWrapper>
      <UI.AlertWrapper>
        <UI.AlertTitleWrapper>
          <span>{title}</span>
          <span>{subtitle}</span>
        </UI.AlertTitleWrapper>
        <UI.AlertBtnWrapper>
          <UI.AlertBtnElem bgColor={`black`} color={`white`} onClick={onClick}>
            {confirmBtnText}
          </UI.AlertBtnElem>
          <UI.AlertBtnElem
            color={`black`}
            bgColor={`#D3D3D3`}
            onClick={() => {
              dispatch(closeAlert());
            }}
          >
            {cancelBtnText}
          </UI.AlertBtnElem>
        </UI.AlertBtnWrapper>
      </UI.AlertWrapper>
    </UI.StWrapper>
  );
};

export default AlertModal;
