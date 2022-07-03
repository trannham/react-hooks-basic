import axios from "axios";
import { useState } from "react";
const AddNewBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title) {
      alert("empty title");
      return;
    }
    if (!content) {
      alert("empty content");
      return;
    }

    let data = {
      title: title,
      body: content,
      userId: 1,
    };

    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );

    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddNew(newBlog);
    }
  };
  return (
    <div>
      <div className="text-add-new">--- Add New Blog ---</div>
      <div>
        <label>Title:</label>
        <input
          type=" text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <input
          type=" text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddNewBlog;
