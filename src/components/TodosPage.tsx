import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import { deleteTodo } from "../features/todoSlice";
import styles from "./TodosPage.module.scss";

const TodosPage: React.FC = () => {
  const todos = useSelector((state: any) =>
    state.todos.todos.filter((todo: any) => !todo.deleted)
  );

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.todosContainer}>
      <AddTodoForm />
      {todos.map((todo: any) => (
        <div key={todo.id} className={styles.todoItem}>
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
