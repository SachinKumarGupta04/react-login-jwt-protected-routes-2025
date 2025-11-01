# React Login JWT Protected Routes

A React application demonstrating login form implementation with state management and JWT-based protected routes.

## Features

### Login Form with React State Management
- Username and password input fields managed with `useState` hook
- Real-time state updates as user types
- Form validation to ensure fields are not empty
- Console logging of credentials on submit
- Validation messages displayed for empty fields

### Protected Routes with JWT Verification
- Route protection based on JWT token in localStorage
- Secure access control for protected pages
- Automatic redirection to login for unauthorized access

## Project Structure

```
src/
├── App.js                 # Main app with routing setup
├── LoginForm.js           # Login form component with state management
├── ProtectedRoute.js      # JWT-based route protection component
└── index.js              # Application entry point
```

## Components

### LoginForm.js
Implements a login form with:
- Username and password fields
- State management using `useState`
- Input validation
- Console output of credentials
- Error messages for empty submissions

### ProtectedRoute.js
Provides route protection by:
- Checking for valid JWT token in localStorage
- Redirecting unauthorized users to login page
- Allowing access to protected content for authenticated users

### App.js
Sets up application routes:
- `/login` - Displays the login form
- `/protected` - Shows protected content (requires valid JWT)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SachinKumarGupta04/react-login-jwt-protected-routes-2025.git

# Navigate to project directory
cd react-login-jwt-protected-routes-2025

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at `http://localhost:3000`

## Usage

1. Navigate to `/login` to see the login form
2. Enter username and password
3. Click submit to log credentials to console
4. A JWT token will be stored in localStorage upon successful login
5. Try accessing `/protected` to see the protected content
6. Protected routes will redirect to login if no valid JWT is present

## Technologies Used

- React 18
- React Router DOM
- React Hooks (useState)
- JWT (JSON Web Tokens)
- Local Storage for token persistence

## Learning Objectives

- Understanding React state management with `useState`
- Handling form inputs and validation
- Implementing authentication flow
- Working with protected routes
- JWT token storage and verification
- React Router navigation

## License

MIT License
