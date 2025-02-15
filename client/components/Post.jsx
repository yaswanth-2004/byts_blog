import React from "react";
import { useParams } from "react-router-dom";

const Post = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div>
      <img src={post.img} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.desc}</p>
      <p><strong>Post ID:</strong> {post._id}</p> {/* Display the post ID */}
    </div>
  );
};

export default Post;
