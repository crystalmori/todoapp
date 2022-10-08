const TodoItem = ({ content, isCompleted, index, setTodos }) => {
  const delTodo = (index) => {
    setTodos((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <li>
      {content}
      <button onClick={() => delTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
