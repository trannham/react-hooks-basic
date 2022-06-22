import logo from "./logo.svg";
import "./App.scss";
import Nav from "./components/Nav";
import Todo from "./components/Todo";
import { useState } from "react";

const App = () => {
  let [name, setName] = useState("Tran");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Coding", type: "working" },
    { id: "todo2", title: "Watching Movie", type: "playing" },
    { id: "todo3", title: "Playing game", type: "playing" },
    { id: "todo4", title: "Reading book", type: "working" },
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
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <Todo myData={todos} title="Todo List" />
        <Todo
          myData={todos.filter((item) => item.type === "working")}
          title="Working todo"
        />
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
