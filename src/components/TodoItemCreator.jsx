import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil_state";

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if(inputValue) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false
        }
      ]);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} onKeyDown={handleKeyDown} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;