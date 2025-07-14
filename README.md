# 🌀 React useReducer Examples

This repository contains **practical examples** demonstrating the use of the `useReducer` hook in React. It showcases real-world scenarios where `useReducer` is more suitable than `useState`, especially for managing complex state logic.

---

## 📚 What’s Inside

### 1. **Counter Example**
A simple counter app to demonstrate the basics of `useReducer`:
- Increment and decrement logic
- Action types and reducer pattern
- Clean state management

📂 Path: 
```
src/components/Counter.jsx
src/reducer/counter/counterReducer.jsx
src/reducer/counter/counterActionTypes.jsx
```
---

### 2. **Post Fetch Example**
A real-world use case where `useReducer` manages API states:
- Handles `loading`, `success`, and `error` states
- Uses `useEffect` for async API call
- Maintains cleaner and scalable state transitions

📂 Path: 
```
src/components/PostList.jsx
src/reducer/post/postReducer.jsx
src/reducer/post/postActionTypes.jsx
```
---

## 🧠 Why `useReducer`?

`useReducer` is a React Hook used for managing complex or interrelated state logic in a component.

It’s preferred over `useState` when:
- You have **multiple state values** that change together
- You want **clearer, centralized control** over state transitions
- You prefer a **Redux-style** approach without external libraries

### ✅ Benefits:
- Ideal for **complex state logic**
- Organizes transitions through **action types**
- Easier to **scale**, **test**, and **debug**
- Promotes **clean separation** of UI and logic
- Mimics **Redux principles** while keeping logic local

---

## 🛠️ Technologies Used

- React (with Hooks)
- JavaScript (ES6+)
- Fetch API
- Functional Components

---

## 🚀 Getting Started

### 1. Clone the repo:
```bash
git clone https://github.com/your-username/react-useReducer-examples.git
cd react-useReducer-examples
```

### Install dependencies:
```bash
npm install
```

### Start the development server
```bash
npm start
```

### Folder Structure

```bash
src/
│
├── components/
│   ├── Counter.jsx          # UI for counter example
│   └── PostList.jsx         # UI for post fetch example
│
├── reducer/
│   ├── counter/
│   │   ├── counterReducer.jsx           # Counter logic
│   │   └── counterActionTypes.jsx       # Counter Action Types
│   │
│   └── post/
│       ├── postReducer.jsx            # Post Logic
│       └── postActionTypes.jsx        # Post Action Types
│
├── App.js
└── index.js
```

### 🙌 Author

👤 Marri Saikrishna

GitHub: @Saikrishna-flex