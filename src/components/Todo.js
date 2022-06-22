const Todo = (props) => {
  const todos = props.myData;
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </div>
  );
};
export default Todo;
