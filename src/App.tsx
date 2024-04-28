// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodosPage from "./components/TodosPage";
import DeletedTodosPage from "./components/DeletedTodosPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Всі</Link>
        <Link to="/deleted">Видалені</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/deleted" element={<DeletedTodosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
