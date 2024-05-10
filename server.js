const express =require("express");
// import database connection
// const mongodbConnection = require("./config/index");
// import all routes
// const blogRouter = require('./routes/blog.routes');

// app initilzation
const app = express();

app.use(express.json());

//-------database connection----------
// mongodbConnection();
app.get("/",(req,res)=>{
    res.send("server is running")
})
//-------routes ---------------
// baseurl:  http://localhot:8000/blogs/api/v1
// app.use('/blogs/api/v1', blogRouter )

module.exports = app;
//-------server listening port 8080----------
// app.listen(8000,()=>{
//     console.log("server is running in port: 8000");
// })