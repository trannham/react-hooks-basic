const Todo = (props) => {
  const todos = props.myData;
  return (
    <div className="todo-container">
      <div className="title"> {props.title}</div>
      {todos.map((todo) => {
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
      <hr />
    </div>
  );
};
export default Todo;
