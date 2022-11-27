import { StInput, StInputWrapper, StInputLabel } from "./Todos.style";

const TodoInput = ({ title, func }) => {
  const onChangeHandler = (event) => {
    const value = event?.target?.value;
    func((prev) => value);
  };

  return (
    <StInputWrapper>
      <StInputLabel>
        <span>{title}</span>
      </StInputLabel>
      <StInput onChange={onChangeHandler}></StInput>
    </StInputWrapper>
  );
};

export default TodoInput;
