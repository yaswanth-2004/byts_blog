// backend/routes/postRouter.js
import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching posts');
  }
});

// POST a new post
router.post('/add', async (req, res) => {
  try {
    const { title, img, desc } = req.body;
    const newPost = new Post({ title, img, desc });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating post');
  }
});

export default router;
