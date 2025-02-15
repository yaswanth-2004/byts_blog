import React, { useState } from "react";
import axios from "axios";

const AddBlog = ({ setPosts, posts }) => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, img, desc };
    axios.post('http://localhost:5000/api/posts', newPost)
      .then(response => {
        setPosts([...posts, response.data]);
        setTitle("");
        setImg("");
        setDesc("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="add-blog">
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddBlog;
