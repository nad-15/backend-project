# Backend Practice Project - User Authentication & Blog System

A server-side rendered web application built with Node.js, Express, and SQLite. This project demonstrates fundamental backend concepts including user authentication, database management, session handling, and CRUD operations.

## 🎯 Project Overview

This is a learning project that implements:
- User registration with validation
- User authentication (login/logout)
- Session management with cookies and JWT
- Blog post CRUD operations
- Server-side rendering with EJS templates
- SQLite database integration

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Template engine for server-side rendering
- **SQLite (better-sqlite3)** - Lightweight database
- **JWT** - JSON Web Tokens for authentication
- **Cookies** - Session management

## 📋 Features Implemented

### Current Features:
- ✅ User registration with validation
  - Username: 3-10 characters, alphanumeric only
  - Password: 12-70 characters
- ✅ SQLite database setup with WAL mode
- ✅ Server-side form validation
- ✅ EJS template rendering

### Upcoming Features (Based on Tutorial):
- 🔄 Cookie-based sessions (47:47)
- 🔄 JWT authentication (53:04)
- 🔄 User login system (1:07:16)
- 🔄 Blog post CRUD operations (1:28:22)
- 🔄 Deployment to production (2:25:38)

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
   
   This will install:
   - express
   - better-sqlite3
   - ejs
   - (and all other dependencies listed in package.json)

3. **Run the application**
```bash
   node server.js
```

4. **Open your browser**
```
   http://localhost:3000
```

That's it! The app will automatically create the SQLite database (`ourApp.db`) on first run.

## 📁 Project Structure
```
BACKEND-PROJECT/
├── public/              # Static files
│   ├── styles.css      # CSS styling
│   └── views/          # EJS templates
│       ├── homepage.ejs
│       └── login.ejs
├── server.js           # Main application file
├── package.json        # Dependencies and scripts
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

*(More tables will be added as the project progresses)*

## 🔒 Validation Rules

### Username:
- Required
- 3-10 characters
- Alphanumeric only (letters and numbers)
- Must be unique

### Password:
- Required
- 12-70 characters
- *(Hashing will be implemented with JWT)*

## 🧪 Testing the App

1. Navigate to `http://localhost:3000`
2. Fill out the registration form
3. Try different inputs to test validation:
   - Short username (< 3 chars)
   - Long username (> 10 chars)
   - Special characters in username
   - Short password (< 12 chars)

## 📚 Learning Path

This project follows a structured tutorial by LearnWebCode (https://www.youtube.com/@LearnWebCode)  covering:


| Timestamp | Topic |
|-----------|-------|
| 0:00 | Introduction |
| 2:58 | Getting Started |
| 12:49 | Basic Styling |
| 17:49 | User Registration |
| 37:00 | SQLite Database Integration ✅ |
| 47:47 | Cookies |
| 53:04 | JSON Web Tokens |
| 1:07:16 | User Login System |
| 1:28:22 | Blog Posts CRUD |
| 2:25:38 | Deployment |

## 🔧 Development

### Available Scripts
```bash
# Start the server
node server.js

# (Add more scripts as needed, e.g., npm start, npm test)
```

### Making Changes

1. Edit your code
2. Restart the server (Ctrl+C, then `node server.js` again)
3. Refresh your browser

*(Hot reload can be added with nodemon later)*

## 🚫 What's NOT in GitHub

The following files are ignored (see `.gitignore`):
- `node_modules/` - Dependencies (installed via `npm install`)
- `*.db` files - Database files (created automatically)
- `.env` - Environment variables (if/when added)

## 🤝 Contributing

This is a personal learning project, but feel free to:
- Fork it and experiment
- Suggest improvements via issues
- Use it as a reference for your own learning

## 📝 Notes

- This is a **server-side rendered** application (not a SPA)
- Authentication is **not yet secure** (passwords will be hashed later with JWT)
- The database is **local** (SQLite file-based)
- Currently for **development/learning only** (not production-ready)

## 🔮 Next Steps

- [ ] Implement cookie-based sessions
- [ ] Add JWT authentication
- [ ] Build login functionality
- [ ] Create blog post system (CRUD)
- [ ] Deploy to production server

## 📄 License

MIT License - Feel free to use this for learning purposes.

---

**Happy Coding!** 🚀

Built while learning backend development with Node.js and Express.