import { useParams, useHistory } from "react-router-dom";

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();

  const handleBack = () => {
    history.push("/blog");
  };
  return (
    <div>
      <div>
        <span onClick={handleBack}>&lt;- Back</span>
      </div>
      <h1>Detail Blog</h1>
    </div>
  );
};

export default DetailBlog;
