import "./App.css";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <>
      <h1>Create Todo List</h1>

      <ToDoList />
      {/* <Route path="/edit/:id" element={<EditToDO />}></Route> */}
    </>
  );
}

export default App;
