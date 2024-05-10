# Air-uni-workshop
This repository hosts a workshop conducted at Air University focusing on the MERN Stack.

#Blog API Routes
This API provides endpoints to perform CRUD operations on blog posts.

#Installation
Before running the application, make sure you have the following dependencies installed:

npm install express mongoose nodemon

#Routes
Create Blog
Endpoint: POST /api/blog/create

Create a new blog post.
Request Body:
title (string, required): Title of the blog post.
category (string, required): Category of the blog post.
description (string, required): Description of the blog post.

Get All Blogs
Endpoint: GET /api/blog/all-blogs
Retrieve all blog posts.

Get Single Blog
Endpoint: GET /api/blog/blog/:blogId
Retrieve a single blog post by its ID.
Path Parameters:
blogId (string, required): ID of the blog post to retrieve.

Update Blog
Endpoint: PUT /api/blog/updateblog/:blogId
Update an existing blog post.
Path Parameters:
blogId (string, required): ID of the blog post to update.
Request Body:
Provide at least one of the following fields to update:
title (string): Updated title of the blog post.
category (string): Updated category of the blog post.
description (string): Updated description of the blog post.

Delete Blog
Endpoint: DELETE /api/blog/deleteblog/:blogId
Delete an existing blog post.
Path Parameters:
blogId (string, required): ID of the blog post to delete.
