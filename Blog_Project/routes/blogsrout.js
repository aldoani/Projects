const express = require("express");
const Blog = require("../models/blogmodel.js");
const router = express.Router();

router.post("/", async (req, res) => {
  const newBlog = await Blog(req.body);
  try {
    const saveblog = await newBlog.save((err) => {});
    res.status(200).json(saveblog);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    const updateblog = await Blog.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateblog);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteteblog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteteblog);
  } catch (error) {
    res.json(error);
  }
});
router.get("/find/:id", async (req, res) => {
  try {
    const oneBlog = await Blog.findById(req.params.id);
    res.json(oneBlog);
  } catch (err) {
    res.status(404).json(err);
  }
});
router.get("/all", async (req, res) => {
  try {
    const oneBlog = await Blog.find();
    res.json(oneBlog);
  } catch (err) {
    res.status(404).json(err);
  }
});
module.exports = router;
