import logo from "./logo.svg";
import "./App.scss";
import Nav from "./components/Nav";
import { useState } from "react";

const App = () => {
  let [name, setName] = useState("Tran");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching Movie" },
    { id: "todo2", title: "Coding" },
    { id: "todo3", title: "Playing game" },
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = { id: "", title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnchange = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <div className="todo-container">
          {todos.map((todo) => {
            return (
              <li className="todo-child" key={todo.id}>
                {todo.title}
              </li>
            );
          })}
        </div>
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnchange(event)}
        />
        <button type="Button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
};

export default App;
