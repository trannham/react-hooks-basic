import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const { data, isLoading, isError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    false
  );
  const handleBack = () => {
    history.push("/blog");
  };
  return (
    <div>
      <div>
        <span onClick={handleBack}>&lt;- Back</span>
      </div>
      <div className="blog-detail">
        {data && (
          <div>
            <div className="title">
              Blog ID: {id} ---
              {isLoading === true ? "Loading data ..." : data.title}
            </div>
            <div className="content"> {data.body}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailBlog;
