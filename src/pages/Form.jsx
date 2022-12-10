import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = () => {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    alert("제출");
  };
  return (
    <FormWrapper>
      <form action="a.jsp">
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={onChangeHandler}
        />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={onChangeHandler}
          />
          바나나
        </label>
        <input
          type="radio"
          name="fruits"
          value="apple"
          onChange={onChangeHandler}
        />
        <input
          type="radio"
          name="fruits"
          value="banana"
          onChange={onChangeHandler}
        />
        <input
          type="radio"
          name="fruits"
          value="orange"
          onChange={onChangeHandler}
        />
        <input type="submit" onChange={onChangeHandler} />
      </form>
    </FormWrapper>
  );
};

export default Form;
