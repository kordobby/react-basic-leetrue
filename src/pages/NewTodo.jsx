import React, { useState } from "react";

const NewTodo = () => {
  const [value, setValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  const [todoList, setTodoList] = useState([]);

  const getInputHandler = (event) => {
    setValue(event.target.value);
  };

  const addTodoHandler = () => {
    const data = {
      id: Math.random() * 1000, // 고유의 값
      todo: value,
    };
    const newData = [...todoList, data];
    setTodoList(newData);
    setValue("");
  };
  // View => function

  const deleteHandler = (id) => {
    const newTodo = todoList.filter((value, index) => {
      return id !== value.id;
    });
    setTodoList(newTodo);
  };

  const [updateId, setUpdateId] = useState(0); // id

  const makeUpdateMode = (id) => {
    setUpdateId(id);
  }; // true / false

  const updateTodoHandler = (id) => {
    // 특정 값에 대해서 수정을 할건데, 그 값은 todoList 에 있음
    // [] 배열 => 배열 안에있는 값을 수정할거야 => 객체의 특정 키값을 수정
    // id 로 구분하면 되겠다.
    if (updateValue === "") {
      setUpdateId(0);
      return; //
    }
    const newTodo = todoList.map((value, index) => {
      if (id === value.id) {
        value["todo"] = updateValue; // 아직모름만 다이나믹
        return value;
      } else {
        return value;
      }
    });
    setUpdateValue("");
    setUpdateId(0);
  }; // true / false

  return (
    <>
      <div>
        <input type="text" onChange={getInputHandler} value={value}></input>
        <button onClick={addTodoHandler}>제출</button>
      </div>
      <div>
        {todoList.map((value, index) => {
          return (
            <div>
              {updateId !== value.id ? (
                <>
                  <span key={`todo-${value.id}`}>{value.todo}</span>
                  <button onClick={() => makeUpdateMode(value.id)}>
                    수정하기
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={updateValue === "" ? value.todo : updateValue}
                    onChange={(event) => {
                      setUpdateValue(event.target.value);
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      updateTodoHandler(value.id);
                    }}
                  >
                    수정완료
                  </button>
                </>
              )}
              <button onClick={() => deleteHandler(value.id)}>삭제하기</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewTodo;
