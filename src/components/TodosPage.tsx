import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import { deleteTodo } from "../features/todoSlice";

const TodosPage: React.FC = () => {
  const todos = useSelector((state: any) =>
    state.todos.todos.filter((todo: any) => !todo.deleted)
  );

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <AddTodoForm />
      {todos.map((todo: any) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>Видалити</button> //
          Кнопка для видалення
        </div>
      ))}
    </div>
  );
};

export default TodosPage;
