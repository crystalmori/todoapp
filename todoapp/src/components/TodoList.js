import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const todoList = todos.map(({ content, isCompleted }, index) => {
    return (
      <TodoItem
        key={`${content}-${index}`}
        content={content}
        isCompleted={isCompleted}
        index={index}
        setTodos={setTodos}
      />
    );
  });
  return <ol>{todoList}</ol>;
};

export default TodoList;
