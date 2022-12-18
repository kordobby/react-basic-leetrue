import { useState, useCallback, useMemo } from "react";

const useSignUp = () => {
  // signup 에서 사용하는 상태값
  const [joinData, setJoinData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
  });

  // signup 에서 사용하는 상태값
  const onChangeHandler = useCallback(
    (e, type) => {
      const value = e.target.value;
      switch (type) {
        case "email":
          setJoinData({ ...joinData, ["id"]: value });
          return;
        case "phone":
          return;
        case "password":
          setJoinData({ ...joinData, ["password"]: value });
          return;
        case "confirmPassword":
          setJoinData({ ...joinData, ["confirmPassword"]: value });
        default:
          return;
      }
    },
    [joinData]
  );

  // validation
  const validation = useMemo(() => {
    if (joinData.password !== joinData.confirmPassword) {
      return false;
    } else if (joinData.id.length < 4) {
      return false;
    } else if (joinData.password.length < 4) {
      return false;
    } else if (joinData.confirmPassword.length < 4) {
      return false;
    } else {
      return true;
    }
  }, [joinData]);

  return [joinData, validation, onChangeHandler];
};

export default useSignUp;
