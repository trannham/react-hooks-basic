import { useHistory } from "react-router-dom";
const NotFound = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <h3>This Page isn't Available</h3>
      <h5>The link maybe broken</h5>
      <button class="btn btn-primary" onClick={handleClick}>
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
