const { addBlog, getAllBlogs ,getSingleBlog,updateBlog,deleteBlog} = require("../controller/blog.controller");

const router = require("express").Router();
// create blog
router.post('/create', addBlog);

// get all blog
router.get('/all-blogs', getAllBlogs);

// get single blog
router.get('/blog/:blogId', getSingleBlog);

// update update blog
router.put('/updateblog/:blogId', updateBlog);

// delete update blog
router.delete('/deleteblog/:blogId', deleteBlog);

module.exports = router



