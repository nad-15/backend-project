# Backend Practice Project - User Authentication & Blog System

**🔗 Live Demo:** [https://notes-2c12.onrender.com/](https://notes-2c12.onrender.com/)

A server-side rendered web application built with Node.js, Express, and SQLite. This project demonstrates fundamental backend concepts including user authentication, database management, session handling, and CRUD operations.

---

## 🎯 Project Overview

This is a learning project that implements:
- User registration with validation
- User authentication (login/logout with JWT)
- Session management with secure HTTP-only cookies
- Blog post CRUD operations (Create, Read, Update, Delete)
- Server-side rendering with EJS templates
- SQLite database integration with WAL mode
- Password hashing with bcrypt
- HTML sanitization for security

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Template engine for server-side rendering
- **SQLite (better-sqlite3)** - Lightweight database
- **JWT (jsonwebtoken)** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **cookie-parser** - Cookie handling
- **sanitize-html** - XSS protection
- **dotenv** - Environment variable management

## 🌐 Live Demo

**Try it out:** [https://notes-2c12.onrender.com/](https://notes-2c12.onrender.com/)

### How to test:
1. Create an account (username: 3-10 chars, password: 7+ chars)
2. Log in with your credentials
3. Create blog posts
4. Edit and delete your posts
5. View your personalized dashboard

*Note: Deployed on Render's free tier. First load may take 30-60 seconds as the server spins up from sleep.*

## 📋 Current Features

- ✅ User registration with comprehensive validation
  - Username: 3-10 characters, alphanumeric only, unique
  - Password: 7-70 characters, hashed with bcrypt
- ✅ Secure user authentication with JWT
- ✅ HTTP-only cookies for session management
- ✅ Protected routes with middleware
- ✅ Blog post CRUD operations
  - Create new posts
  - View all your posts
  - Edit existing posts
  - Delete posts
- ✅ SQLite database with WAL mode
- ✅ Server-side form validation
- ✅ HTML sanitization (XSS protection)
- ✅ EJS template rendering
- ✅ Deployed to production

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR-USERNAME/backend-project.git
   cd backend-project
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
```bash
   cp .env.example .env
```
   
   Then edit `.env` and add your secrets:
```env
   JWTSECRET=your_secret_key_here_min_32_characters
```

4. **Run the application**
```bash
   node server.js
```

5. **Open your browser**
```
   http://localhost:3000
```

The app will automatically create the SQLite database (`ourApp.db`) on first run.

## 📁 Project Structure
```
BACKEND-PROJECT/
├── public/              # Static files
│   ├── styles.css      # CSS styling
│   └── views/          # EJS templates
│       ├── homepage.ejs
│       ├── login.ejs
│       ├── dashboard.ejs
│       ├── create-post.ejs
│       ├── edit-post.ejs
│       └── single-post.ejs
├── server.js           # Main application file
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username STRING NOT NULL UNIQUE,
    password STRING NOT NULL
)
```

### Posts Table
```sql
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    createdDate TEXT,
    title STRING NOT NULL,
    body TEXT NOT NULL,
    authorid INTEGER,
    FOREIGN KEY (authorid) REFERENCES users (id)
)
```

## 🔒 Security Features

- ✅ Passwords hashed with bcrypt (salt rounds: 10)
- ✅ JWT tokens for stateless authentication
- ✅ HTTP-only cookies (can't be accessed by JavaScript)
- ✅ Secure cookie flag (HTTPS only in production)
- ✅ SameSite cookie attribute (CSRF protection)
- ✅ HTML sanitization to prevent XSS attacks
- ✅ Protected routes with authentication middleware

## 🔒 Validation Rules

### Username:
- Required
- 3-10 characters
- Alphanumeric only (letters and numbers)
- Must be unique in database

### Password:
- Required
- 7-70 characters
- Hashed with bcrypt before storage

### Blog Posts:
- Title: Required
- Body: Required
- HTML tags stripped for security

## 🧪 Testing the App

### Locally:
1. Navigate to `http://localhost:3000`
2. Register a new account
3. Create a blog post
4. Try editing and deleting posts
5. Test validation by entering invalid data

### Live Demo:
Visit [https://notes-2c12.onrender.com/](https://notes-2c12.onrender.com/) and try the features!

## 📚 Learning Path

This project follows a structured tutorial by **LearnWebCode** ([YouTube Channel](https://www.youtube.com/@LearnWebCode)):

| Timestamp | Topic | Status |
|-----------|-------|--------|
| 0:00 | Introduction | ✅ |
| 2:58 | Getting Started | ✅ |
| 12:49 | Basic Styling | ✅ |
| 17:49 | User Registration | ✅ |
| 37:00 | SQLite Database Integration | ✅ |
| 47:47 | Cookies | ✅ |
| 53:04 | JSON Web Tokens | ✅ |
| 1:07:16 | User Login System | ✅ |
| 1:28:22 | Blog Posts CRUD | ✅ |
| 2:25:38 | Deployment | ✅ |

## 🔧 Development

### Available Scripts
```bash
# Start the server
node server.js

# Start with auto-reload (if nodemon installed)
npm run dev
```

### Making Changes

1. Edit your code
2. Restart the server (Ctrl+C, then `node server.js` again)
3. Refresh your browser

For development, consider installing nodemon:
```bash
npm install -D nodemon
```

## 🚀 Deployment

This project is deployed on [Render](https://render.com/).

### Deployment Setup:
- ✅ Auto-deploys on every push to `main` branch
- ✅ Environment variables configured in Render dashboard
- ✅ Free tier hosting with automatic SSL
- ✅ Start command: `npm start`

### Deploy Your Own:
1. Fork this repository
2. Create a [Render](https://render.com/) account
3. Create a new Web Service
4. Connect your GitHub repo
5. Add environment variable: `JWTSECRET=your_secret_here`
6. Deploy! 🎉

**Live URL:** [https://notes-2c12.onrender.com/](https://notes-2c12.onrender.com/)

## 🚫 What's NOT in GitHub

The following files are ignored (see `.gitignore`):
- `node_modules/` - Dependencies (install via `npm install`)
- `*.db` files - Database files (created automatically)
- `*.db-shm`, `*.db-wal` - SQLite temp files
- `.env` - Environment variables (contains secrets!)
- `.DS_Store` - macOS system files

## ⚙️ Environment Variables

Required environment variables (create a `.env` file):
```env
JWTSECRET=your_jwt_secret_key_here_minimum_32_characters
```

See `.env.example` for template.

## 🤝 Contributing

This is a personal learning project, but feel free to:
- Fork it and experiment
- Open issues for bugs or suggestions
- Use it as a reference for your own learning

## 📝 Notes

- This is a **server-side rendered** application (SSR, not SPA)
- **Authentication is secure** with JWT and bcrypt
- **Database is local** SQLite (file-based, persistent)
- **Production-ready** with basic security features
- Uses **WAL mode** for better SQLite performance

## ✅ Completed Features

- [x] User registration and authentication
- [x] Cookie-based sessions with JWT
- [x] Password hashing with bcrypt
- [x] Blog post CRUD operations
- [x] Protected routes
- [x] Input validation and sanitization
- [x] Production deployment

## 📄 License

MIT License - Feel free to use this for learning purposes.

---

**Happy Coding!** 🚀

Built while learning backend development with Node.js and Express.

Tutorial by [LearnWebCode](https://www.youtube.com/@LearnWebCode) | Live at [notes-2c12.onrender.com](https://notes-2c12.onrender.com/)