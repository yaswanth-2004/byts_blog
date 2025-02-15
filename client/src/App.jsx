import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import './App.css';
import Post from "../components/Post";
import AddBlog from "../components/AddBlog";



const Card = ({ _id, title, img, desc }) => (
  <div className="card">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p className="description">{desc}</p>
    <Link to={`/post/${_id}`}>Read More</Link> {/* Link to the post detail page */}
  </div>
);

const App = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>My Blog</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-blog">Add Blog</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="posts">
                  {posts.map((post) => (
                    <Card key={post._id} {...post} />
                  ))}
                </div>
              </>
            }
          />
          <Route path="/add-blog" element={<AddBlog setPosts={setPosts} posts={posts} />} />
          <Route path="/post/:id" element={<Post posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
