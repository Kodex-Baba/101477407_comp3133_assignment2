# 📁 101477407_comp3133_assig2

## 💼 Full-Stack Employee Management App  
This is a full-stack application built with **Angular (frontend)**, **Node.js + Express + GraphQL (backend)**, and **MongoDB**.  
It allows user authentication and full CRUD operations on employees, including search and image preview.

---

## 📦 Features

- 🔐 User Signup & Login with JWT
- 👤 Session management (token-based)
- 👩‍💼 Employee CRUD (Create, Read, Update, Delete)
- 📸 Profile picture support (via image URL with preview)
- 🔍 Search by name, email, or designation
- ✨ Responsive UI using Bootstrap
- 🔐 Angular route guards for protection
- 📄 View detailed employee info
- 🐳 Docker & Docker Compose support

---

## 🛠 Technologies Used

### ✅ Frontend
- Angular 17
- Apollo Angular
- Bootstrap 5
- Angular Forms & Routing

### ✅ Backend
- Node.js
- Express.js
- Apollo Server (GraphQL)
- Mongoose (MongoDB)

### ✅ Other
- JWT Authentication
- Docker & Docker Compose
- MongoDB Atlas (or local MongoDB)

---

## 🚀 Getting Started

You can run the app using **Docker Compose** or **manually without Docker**.

---

### 🐳 Option 1: Run with Docker Compose

Make sure you have **Docker** and **Docker Compose** installed.

```bash
docker-compose up --build
```

- Angular frontend: [http://localhost:4200](http://localhost:4200)  
- GraphQL backend: [http://localhost:5000/graphql](http://localhost:5000/graphql)

---

### ⚙️ Option 2: Run Manually (Without Docker)

#### ✅ 1. Backend Setup

```bash
cd backend
npm install
npm run dev
```

> Runs GraphQL server at: [http://localhost:5000/graphql](http://localhost:5000/graphql)

Create a `.env` file in the `backend/` folder:

```
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=mySuperSecretKey
```

---

#### ✅ 2. Frontend Setup

```bash
cd frontend
npm install
ng serve
```

> Angular app available at: [http://localhost:4200](http://localhost:4200)

---

## 📁 Folder Structure

```
101477407_comp3133_assig2/
├── frontend/       # Angular app
│   ├── src/
│   └── ...
├── backend/        # Node.js + GraphQL + MongoDB
│   ├── models/
│   ├── schemas/
│   ├── resolvers/
│   └── ...
├── docker-compose.yml
└── README.md
```

---

---

## 🙋🏾 Author

**Name**: _Akorede Daniel Osunkoya_  
**Student ID**: `101477407`  
**Course**: COMP3133 - Full Stack Development II

---

## 📜 License

This project is for academic purposes under the COMP3133 course at https://www.georgebrown.ca/.