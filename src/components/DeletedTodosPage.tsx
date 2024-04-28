import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const DeletedTodosPage: React.FC = () => {
  const todos = useSelector((state: RootState) =>
    state.todos.todos.filter((todo) => todo.deleted)
  );

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text} (видалено)</div>
      ))}
    </div>
  );
};

export default DeletedTodosPage;
