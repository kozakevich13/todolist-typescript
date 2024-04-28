import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import TodosPage from "./components/TodosPage";
import DeletedTodosPage from "./components/DeletedTodosPage";
import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <nav className={styles.appNav}>
        <NavLink
          to="/todolist-typescript/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Всі
        </NavLink>
        <NavLink
          to="/todolist-typescript/deleted"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Видалені
        </NavLink>
      </nav>
      <div className={styles.content}>
        <Routes>
          <Route path="/todolist-typescript/" element={<TodosPage />} />
          <Route
            path="/todolist-typescript/deleted"
            element={<DeletedTodosPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
