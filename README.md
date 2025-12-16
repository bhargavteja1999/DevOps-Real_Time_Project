# Full-Stack MERN Application

A complete full-stack web application built with React (Frontend) and Node.js/Express (Backend).

## Features
- **Authentication**: Register and Login functionality using JWT and Bcrypt.
- **Protected Routes**: Dashboard and Profile pages are only accessible to logged-in users.
- **Responsive Design**: Built with TailwindCSS for mobile and desktop.
- **API**: RESTful API with error handling and secure password hashing.

## Project Structure
- `server/`: Backend Node.js API
- `client/`: Frontend React application

## Prerequisites
- Node.js installed
- MongoDB installed and running (default: `mongodb://localhost:27017`)

## Setup & Run

### 1. Backend Setup
```bash
cd server
npm install
# Create a .env file with:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/mern-test-db
# JWT_SECRET=your_secret_key

npm run dev
# Server runs on http://localhost:5000
```

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
# App runs on http://localhost:5173
```

## API Endpoints
- `POST /api/register` - Create a new user
- `POST /api/login` - Authenticate user
- `GET /api/profile` - Get user details (Protected)
- `GET /api/users` - Get all users (Protected)

## Technologies
- MongoDB, Express, React, Node.js
- TailwindCSS, Axios, React Router, JSONWebToken
