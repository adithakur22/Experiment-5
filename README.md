
# React Router Application with Lazy Loading and Protected Routes

This project is a React application built using React Router v6. It demonstrates lazy loading with React.lazy, Suspense fallback UI, protected routes using authentication logic, and a dashboard-style layout structure. The application simulates real-world page loading behavior by introducing an artificial three-second delay before rendering each page component.

The primary objective of this project is to demonstrate how modern React applications handle routing, code splitting, authentication control, and loading states in large-scale applications.

---

# Project Overview

The application follows a dashboard architecture where a shared layout contains navigation and dynamically renders nested routes using Outlet. Each page is loaded only when accessed, rather than being bundled at the initial load. This improves performance and simulates real-world asynchronous data fetching behavior.

All major pages including Home, Profile, Projects, Login, and NotFound are loaded using React.lazy. A Suspense component wraps each page and displays a loading message while the component is being fetched.

---

# Lazy Loading Implementation

Each page component is imported using dynamic import inside a Promise with a three-second timeout. This simulates network delay and helps demonstrate loading states clearly.

Example:

```javascript
const Home = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Home")), 3000);
  })
);
```

This ensures that the component loads only when required and displays a fallback message during the loading phase.

---

# Loading Behavior Across Pages

When a user navigates to any route, the corresponding page does not render immediately. Instead, a loading message appears for three seconds. After the delay, the actual page component is displayed.

For example, navigating to the home route displays “Loading Home...” before rendering the Home component. Similarly, the Profile page displays “Loading Profile...” before loading. This approach improves user experience by preventing blank screens and clearly indicating background loading activity.

---

# Protected Route Mechanism

The Profile page is protected using a custom ProtectedRoute component. This component checks whether an authentication value exists in localStorage. If authentication is present, the page renders normally. If authentication is missing, the user is redirected to the login page.

Example:

```javascript
const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");
  return auth ? children : <Navigate to="/login" />;
};
```

This demonstrates route guarding, which is commonly used in real-world applications such as dashboards and admin panels.

---

# Layout Structure

The application uses a shared Layout component that contains the navigation bar and an Outlet component. The Outlet renders child routes dynamically inside the layout.

This structure ensures consistent navigation across all pages while keeping routing clean and modular.

---

# Routing Structure

The application uses nested routing. The main layout wraps the Home, Profile, and Projects pages. The Login route exists outside the layout, and a wildcard route handles unknown paths by rendering the NotFound component.

Each route is wrapped inside a Suspense component with a fallback loading message to handle lazy loading properly.

---

# Performance Benefits

Lazy loading improves performance by reducing the initial bundle size. Instead of loading all components at once, the application loads only the required component when a user navigates to a specific route. This results in faster startup time and better scalability for large applications.

The artificial delay in this project is implemented purely for demonstration purposes to visualize the loading behavior clearly.

---

# Folder Structure

```
src/
 ├── pages/
 │    ├── Home.js
 │    ├── Profile.js
 │    ├── Projects.js
 │    ├── Login.js
 │    └── NotFound.js
 ├── App.js
 ├── logo.png
 └── index.js
```

---

# Installation and Setup

Install dependencies using:

```
npm install
```

Start the development server using:

```
npm start
```

Ensure that react-router-dom is installed:

```
npm install react-router-dom
```

---

# Authentication Testing

To simulate login, open the browser console and run:

```
localStorage.setItem("auth", "true");
```

To simulate logout, run:

```
localStorage.removeItem("auth");
```

---

# Concepts Demonstrated

This project demonstrates code splitting, dynamic imports, Suspense fallback handling, protected routing, nested routes, and dashboard-style layout architecture.

---<img width="1920" height="1020" alt="Screenshot 2026-02-24 145620" src="https://github.com/user-attachments/assets/b856019f-e5b0-4e5b-b8fe-1bebd73de42b" />

<img width="1920" height="1020" alt="Screenshot 2026-02-24 145717" src="https://github.com/user-attachments/assets/bda655e1-4448-4645-80f3-a17821fb0edb"/>

<img width="1920" height="1020" alt="Screenshot 2026-02-24 145723" src="https://github.com/user-attachments/assets/fd6aa0a4-5ed9-4ced-b901-e3bfd557579d" /> 

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/6ce23e0b-929f-42ef-8cdc-4e06a612c95f" />

<img width="1920" height="1020" alt="Screenshot 2026-02-24 145729" src="https://github.com/user-attachments/assets/0a51b359-4774-430c-a401-e93e3802270a" />

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/446b5daf-065a-4f6e-9b5f-0a8f47b4e1ca" />

