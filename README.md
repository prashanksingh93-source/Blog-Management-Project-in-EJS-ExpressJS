# 📝 Blog Management Project in EJS & ExpressJS

A simple and responsive **Blog Management System** built using **Express.js** and **EJS (Embedded JavaScript Templates)**. This project allows users to create, view, and delete blog posts with dynamic server-side rendering.

## 🌐 Live Demo

🔗 **View Live Project:**
https://blog-management-project-in-ejs-expressjs.onrender.com

*(Replace the above URL with your deployed Render link.)*

---

## 🚀 Features

* 🏠 Home page with dynamic content
* 📚 View all blog posts
* ➕ Add new blog posts
* 📄 View individual blog details
* 🗑️ Delete blog posts
* ⚡ Server-side rendering using EJS
* 🎨 Static file handling with Express
* ❌ Custom 404 error page

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **EJS Template Engine**
* **HTML5**
* **CSS3**
* **Body Parser / Express Middleware**

---

## 📂 Project Structure

```
Blog-Management-Project-in-EJS-ExpressJS/
│
├── public/
│   └── css/
│
├── views/
│   ├── home.ejs
│   ├── blogs.ejs
│   ├── blogDetails.ejs
│   ├── addBlog.ejs
│   └── 404.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/prashanksingh93-source/Blog-Management-Project-in-EJS-ExpressJS.git
```

### 2. Navigate to project folder

```bash
cd Blog-Management-Project-in-EJS-ExpressJS
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the application

```bash
npm start
```

The application will run on:

```
http://localhost:3000
```

---

## 📌 Available Routes

| Method | Route         | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/`           | Home page          |
| GET    | `/blogs`      | Display all blogs  |
| GET    | `/blogs/:id`  | View blog details  |
| GET    | `/add-blog`   | Show add blog form |
| POST   | `/add-blog`   | Create a new blog  |
| GET    | `/delete/:id` | Delete a blog      |

---

## 🔮 Future Improvements

* Edit blog functionality
* MongoDB database integration
* User authentication
* Admin dashboard
* Blog search functionality
* Categories and tags

---

