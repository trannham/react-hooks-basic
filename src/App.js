import logo from "./logo.svg";
import "./App.scss";
import Nav from "./components/Nav";
import Todo from "./components/Todo";
import Covid from "./components/Covid";
import Blog from "./components/Blog";
import DetailBlog from "./components/DetailBlog";
import AddNewBlog from "./components/AddNewBlog";
import NotFound from "./components/NotFound";
import { useState, useEffect } from "react";
import { CountDown, HookCountdown } from "./components/Countdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
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
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path="/">
            <Covid />
          </Route>
          <Route path="/timer">
            {/* <CountDown onTimesup={onTimesup} />
            <span>-------------------</span> */}
            <HookCountdown onTimesup={onTimesup} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title="Todo List"
              deleteDataTodo={deleteDataTodo}
            />
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
              Add Todo
            </button>
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
          <Route path="/secret"></Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
