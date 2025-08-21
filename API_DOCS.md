# API Documentation

This document provides details about the available API endpoints in the **Swift Statz Board Backend API**.

---

## Base URL
http://localhost:5000/api

---

## Endpoints

### 1. `GET /posts/:id`

**Description:**  
Fetch a single post by its ID from JSONPlaceholder.

**Parameters:**
- `id` (path) – Integer, required. The ID of the post.

**Responses:**
- **200 OK**
  ```json
  {
    "id": 1,
    "title": "Sample Post",
    "body": "Post body content"
  }
•	404 Not Found
•	{
•	  "error": "Post not found"
•	}
•	400 Bad Request
•	{
•	  "error": "Invalid post ID"
•	}
________________________________________
2. POST /posts
Description:
Create a new post.
Request Body:
{
  "title": "New Post",
  "body": "Post body content",
  "userId": 1
}
Responses:
•	201 Created
•	{
•	  "id": 101,
•	  "title": "New Post",
•	  "body": "Post body content",
•	  "userId": 1
•	}
•	400 Bad Request
•	{
•	  "error": "Invalid input data"
•	}
________________________________________
3. PUT /posts/:id
Description:
Update an existing post.
Request Body:
{
  "title": "Updated Title",
  "body": "Updated body content"
}
Responses:
•	200 OK
•	{
•	  "id": 1,
•	  "title": "Updated Title",
•	  "body": "Updated body content"
•	}
•	404 Not Found
•	{
•	  "error": "Post not found"
•	}
________________________________________
4. DELETE /posts/:id
Description:
Delete an existing post by ID.
Responses:
•	200 OK
•	{
•	  "message": "Post deleted successfully"
•	}
•	404 Not Found
•	{
•	  "error": "Post not found"
•	}
________________________________________
Notes
•	Ensure Content-Type: application/json is included in requests where a body is required.
•	All routes are protected with basic validation and error handling.

---

So when you run:  

```bash
nano API_DOCS.md


