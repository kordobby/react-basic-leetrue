import { useState, useCallback } from "react";

const useValidation = (type) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateCheck = useCallback(
    (e) => {
      const value = e.target.value;
      setInputValue(value);
      switch (type) {
        case "email":
          if (value.length > 9 && value !== "") {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
          return;
        case "phone":
          return;
        case "password":
          if (value.length > 4 && value !== "") {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
          return;
        default:
          return;
      }
    },
    [inputValue]
  );
  return [inputValue, isValid, validateCheck];
};

export default useValidation;
