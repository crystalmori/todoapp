import { useState } from "react";

const TodoInput = ({ setTodos, todos }) => {
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (!todoInput.trim()) {
      setTodoInput("");
      return;
    }

    const newTodo = {
      content: todoInput,
      isCompleted: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTodoInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
