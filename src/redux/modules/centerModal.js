// initState
const initialState = {
  centerModal: {
    open: false, // => true => false
    title: "",
    subtitle: "",
    confirmBtnText: "",
    cancelBtnText: "",
    onClick: () => {
      // console.log("...")
    },
  },
};

// const OPEN_ALERT = "OPEN_ALERT";
const AlertType = {
  OPEN_ALERT: "OPEN_ALERT",
  CLOSE_ALERT: "CLOSE_ALERT",
};

export const openAlert = (payload) => {
  return {
    type: AlertType.OPEN_ALERT,
    payload: { ...payload },
  };
};

export const closeAlert = (payload) => {
  return {
    type: AlertType.CLOSE_ALERT,
    payload: { ...payload },
  };
};

const centerModal = (state = initialState, action) => {
  switch (action.type) {
    case AlertType.OPEN_ALERT:
      return {
        ...state,
        centerModal: action?.payload?.centerModal,
      };
    case AlertType.CLOSE_ALERT:
      return {
        centerModal: {
          ...state,
          open: false,
        },
      };
    default:
      return state;
  }
};

export default centerModal;
