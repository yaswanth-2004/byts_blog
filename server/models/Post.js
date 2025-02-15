// backend/models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  desc: { type: String, required: true },
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

export default Post;
