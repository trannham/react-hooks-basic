import logo from "./logo.svg";
import "./App.scss";
import Nav from "./components/Nav";
import Todo from "./components/Todo";
import Covid from "./components/Covid";
import { useState, useEffect } from "react";
import { CountDown, HookCountdown } from "./components/Countdown";

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
    let newTodo = {
      id: Math.floor(Math.random() * 10000 + 1),
      title: address,
      type: "working",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnchange = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let updateTodo = todos;
    updateTodo = updateTodo.filter((item) => item.id !== id);
    setTodos(updateTodo);
  };

  const onTimesup = () => {
    alert("Times up");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <CountDown onTimesup={onTimesup} />
        <span>-------------------</span>
        <HookCountdown onTimesup={onTimesup} />
        <h1>Hello world with React and {name}</h1>
        <Covid />
        {/* <Todo todos={todos} title="Todo List" deleteDataTodo={deleteDataTodo} />
        <Todo
          todos={todos.filter((item) => item.type === "working")}
          title="Working todo"
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnchange(event)}
        />
        <button type="Button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button> */}
      </header>
    </div>
  );
};

export default App;
