import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from "react-router-dom";
const Blog = () => {
  const { data, isLoading, isError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`,
    false
  );
  let newData = [];
  if (data && data.length > 0) {
    newData = data.filter((data) => data.id < 9);
    console.log(newData);
  }
  return (
    <div className="blogs-container">
      {isLoading === false &&
        newData &&
        newData.length > 0 &&
        newData.map((item) => {
          return (
            <div key={item.id} className="single-blog">
              <div className="title">{item.title}</div>
              <div className="content">{item.body}</div>
              <button>
                <Link to={`/blog/${item.id}`}>View detail</Link>
              </button>
            </div>
          );
        })}

      {isLoading === true && (
        <div style={{ textAlign: "center !important", width: "100%" }}>
          Loading ...
        </div>
      )}
    </div>
  );
};

export default Blog;
