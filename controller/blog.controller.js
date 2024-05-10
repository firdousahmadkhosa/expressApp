const Blog = require("../model/blog.model");

// add blog controller
const addBlog = async (req, res) => {
  try {
    const { title, category, description } = req.body;
    // Validate inputs
    if (!title || !category || !description) {
      return res
        .status(400)
        .json({ error: "Title, category, and description are required" });
    }
    const newPost = new Blog({ title, category, description });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get all blogs controller
const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.status(200).json({ data: allBlogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get single blog controller
const getSingleBlog = async (req, res) => {
  try {
    if (!req.params.blogId) {
        return res
          .status(400)
          .json({ error: "blogId is required" });
      }
    const singleBlog = await Blog.findById(req.params.blogId);
    if (!singleBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json(singleBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// update blog controller
const updateBlog = async (req, res) => {
    try {
      // Validate inputs
      const { title, category, description } = req.body;
      if (!title && !category && !description) {
        return res.status(400).json({ error: "At least one field (title, category, or description) must be provided for update" });
      }else if(!req.params.blogId){
        return res.status(404).json({ error: "blogId is required" });
      }
  
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.blogId,
        req.body,
        { new: true }
      );
      if (!updatedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json({ message: "Record updated successfully", updatedBlog });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

// delete blog controller
const deleteBlog = async (req, res) => {
  try {
    if(!req.params.blogId){
        return res.status(404).json({ error: "blogId is required" });
      }
    const deletedBlog = await Blog.findByIdAndDelete(req.params.blogId);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
