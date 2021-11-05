import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/Auth";
import { Todo } from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
