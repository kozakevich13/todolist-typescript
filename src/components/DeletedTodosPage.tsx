import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "./DeletedTodosPage.module.scss";

const DeletedTodosPage: React.FC = () => {
  const todos = useSelector((state: RootState) =>
    state.todos.todos.filter((todo) => todo.deleted)
  );

  return (
    <div className={styles.deletedTodosContainer}>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.todoItem}>
          {todo.text} (видалено)
        </div>
      ))}
    </div>
  );
};

export default DeletedTodosPage;
