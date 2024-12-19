import { Routes, Route } from "react-router";
import "./App.css";
import ToDoList from "./pages/ToDoList";
// import EditToDO from "./pages/EditToDo";

function App() {
  return (
    <>
      <h1>Create Todo List</h1>
      <Routes>
        <Route path="/" element={<ToDoList />}></Route>
        {/* <Route path="/edit/:id" element={<EditToDO />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
