import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import { deleteTodo } from "../features/todoSlice";
import styles from "./TodosPage.module.scss";
import { Todo } from "../types";
import { RootState } from "../store";

const TodosPage: React.FC = () => {
  const todos = useSelector((state: RootState) =>
    state.todos.todos.filter((todo: Todo) => !todo.deleted)
  );
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setDeleting(id);
    setTimeout(() => {
      dispatch(deleteTodo(id));
      setDeleting(null);
    }, 500);
  };

  return (
    <div className={styles.todosContainer}>
      <AddTodoForm />
      {todos.map((todo: Todo) => (
        <div
          key={todo.id}
          className={`${styles.todoItem} ${
            deleting === todo.id ? styles.todoItemExiting : ""
          }`}
        >
          {todo.text}
          <button
            onClick={() => handleDelete(todo.id)}
            className={styles.deleteButton}
          >
            Видалити
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosPage;
