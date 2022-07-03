import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data, isLoading, isError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`,
    false
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setNewData(data.filter((data) => data.id < 9));
    }
  }, [data]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
    console.log(newData);
  };

  const deleteBlog = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };
  return (
    <>
      <Button variant="primary" className="my-3" onClick={handleShow}>
        + Add new blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div key={item.id} className="single-blog">
                <div className="title">
                  <span>{item.title}</span>
                  <span onClick={() => deleteBlog(item.id)}> X</span>
                </div>
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
    </>
  );
};

export default Blog;
