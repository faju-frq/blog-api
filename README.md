# Blog API Project

This is a RESTful API built using **Node.js**, **Express.js**, **MySQL**, and **Sequelize** ORM. It allows users to register, log in/out, create blogs, comment on blogs, and like blogs. It also supports editing of blogs and comments as well as deletion of said blogs and comments along with user data and token-based authentication using **JWT**.


## Features

* User Registration & Login with JWT Authentication
* Create, Read, Update, and Delete (CRUD) operations for Blogs/Comments
* Commenting system on blogs
* Blog Like/Unlike functionality per user
* MySQL database integration using Sequelize ORM

## Tech Stack

**Backend:**  
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue?logo=mysql)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-blue?logo=sequelize)

**Security:**  
![JWT](https://img.shields.io/badge/JWT-Auth-orange?logo=jsonwebtokens)
![bcrypt](https://img.shields.io/badge/bcryptjs-Password_Hashing-red)
![CORS](https://img.shields.io/badge/CORS-Enabled-green)

**Tools:**  
![Postman](https://img.shields.io/badge/Postman-Collection-blue?logo=postman)
![Nodemon](https://img.shields.io/badge/Nodemon-Dev_Server-red)

### Prerequisites
- Node.js 18+
- MySQL 8+
- Postman (for API testing)
  
## Run Locally

Clone the project

```bash
  git clone https://github.com/faju-frq/blog_api.git
```

Go to the project directory

```bash
  cd blog_api
```

Install dependencies

```bash
  npm install
```

Create a `.env` file and add:

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=blog_db
JWT_SECRET=your_jwt_secret
```(https://img.shields.io/badge/Postman-Collection_JSON-FF6C37?logo=postman)
Start the server

```bash
  npm run dev
```
The server will be running at `http://localhost:{PORT}`

(Optional) Seed sample data:
```bash
npm run seeder
```

## API Documentation
### Postman Collection
---


[![Import Collection](https://img.shields.io/badge/Postman-Collection_JSON-FF6C37?logo=postman)](https://raw.githubusercontent.com/faju-frq/blog-api/main/Blog-api.postman_collection.json)

#### Features:
- Pre-configured environment variables
- Automatic JWT token handling
- Sample requests for all endpoints
- Test scripts include

#### Import Steps:
1. Click the badge above to view or import the Postman collection for this API.
2. Import into Postman
3. Set environment variables:

   - baseUrl: http://localhost:3000

   - token: (auto-populated after login)
## API Endpoints

### 🛡️ Authentication

#### Register User

```http
POST /api/auth/register
```

Registers a new user.

#### Login User

```http
POST /api/auth/login
```

Authenticates user and returns a token.

#### Logout User

```http
POST /api/auth/logout
```

Logs out the authenticated user.

#### Delete User

```http
POST /api/auth/delete
```

Deletes the authenticated user.



### 📝 Blogs

#### Create Blog

```http
POST /api/blog/create
```

| Auth Required | Description             |
| :------------ | :---------------------- |
| ✅ Yes         | Creates a new blog post |

#### List My Blogs

```http
GET /api/blog/list/myBlogs
```

| Auth Required | Owner Only | Description                       |
| :------------ | :--------- | :-------------------------------- |
| ✅ Yes         | ✅ Yes      | Lists blogs of the logged-in user |

#### List All Blogs

```http
GET /api/blog/list
```

| Auth Required | Description            |
| :------------ | :--------------------- |
| ❌ No          | Lists all public blogs |

#### Update Blog

```http
PUT /api/blog/update/:id
```

| Parameter | Type   | Description       |
| :-------- | :----- | :---------------- |
| id        | string | Blog ID to update |

| Auth Required | Owner Only |
| :------------ | :--------- |
| ✅ Yes         | ✅ Yes      |

#### Like Blog

```http
PUT /api/blog/likes/:id
```

| Parameter | Type   | Description     |
| :-------- | :----- | :-------------- |
| blogID    | string | Blog ID to like |

| Auth Required | Owner Only |
| :------------ | :--------- |
| ✅ Yes         | ❌ No       |

#### Delete Blog

```http
DELETE /api/blog/delete/:id
```

| Parameter | Type   | Description       |
| :-------- | :----- | :---------------- |
| id        | string | Blog ID to delete |

| Auth Required | Owner Only |
| :------------ | :--------- |
| ✅ Yes         | ✅ Yes      |

---

### 💬 Comments

#### Create Comment

```http
POST /api/comment/create/:blogID
```

| Parameter | Type   | Description           |
| :-------- | :----- | :-------------------- |
| blogID    | string | Blog ID to comment on |

| Auth Required | Owner Only |
| :------------ | :--------- |
| ✅ Yes         | ❌ No       |

#### List Comments

```http
GET /api/comment/list/:blogID
```

| Parameter | Type   | Description                    |
| :-------- | :----- | :----------------------------- |
| blogID    | string | Blog ID to fetch comments from |

| Auth Required | Owner Only |
| :------------ | :--------- |
| ✅ Yes         | ❌ No       |

#### Update Comment

```http
PUT /api/comment/update/:commentId
```

| Parameter | Type   | Description          |
| :-------- | :----- | :------------------- |
| commentId | string | Comment ID to update |

| Auth Required | Owner Only |
| :------------ | :--------- |
| ✅ Yes         | ✅ Yes      |

#### Like Comment

```http
PUT /api/comment/likes/:commentID
```

| Parameter | Type   | Description        |
| :-------- | :----- | :----------------- |
| commentID | string | Comment ID to like |

| Auth Required | Owner Only |
| :------------ | :--------- |
| ✅ Yes         | ❌ No       |

#### Delete Comment

```http
DELETE /api/comment/delete/:commentId
```

| Parameter | Type   | Description          |
| :-------- | :----- | :------------------- |
| commentId | string | Comment ID to delete |

| Auth Required | Owner Only |
| :------------ | :--------- |
| ✅ Yes         | ✅ Yes      |



## Contributing

Contributions are always welcome!

Feel free to contribute or raise issues via pull requests!


## License

This project is licensed under the [MIT](LICENSE) License.


