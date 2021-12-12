import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoListContainer from "./containers/TodoListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <TodoListContainer />
      </header>
    </div>
  );
}

export default App;
