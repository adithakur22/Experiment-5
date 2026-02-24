import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Navigate
} from "react-router-dom";

import { Suspense, lazy } from "react";
import logo from "./logo.png";

/* ---------- LAZY PAGES WITH 3s DELAY ---------- */

const Home = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Home")), 3000);
  })
);

const Profile = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Profile")), 3000);
  })
);

const Projects = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Projects")), 3000);
  })
);

const Login = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Login")), 3000);
  })
);

const NotFound = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/NotFound")), 3000);
  })
);

/* ---------- PROTECTED ROUTE ---------- */

const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");
  return auth ? children : <Navigate to="/login" />;
};

/* ---------- LAYOUT ---------- */

const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px", padding: "15px" }}>
        <NavLink to="/" end>
          <img src={logo} alt="Logo" width="40" />
        </NavLink>

        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>

      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
};

/* ---------- APP ---------- */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* HOME */}
          <Route
            index
            element={
              <Suspense fallback={<h2>Loading Home...</h2>}>
                <Home />
              </Suspense>
            }
          />

          {/* PROFILE (PROTECTED) */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Suspense fallback={<h2>Loading Profile...</h2>}>
                  <Profile />
                </Suspense>
              </ProtectedRoute>
            }
          />

          {/* PROJECTS */}
          <Route
            path="projects"
            element={
              <Suspense fallback={<h2>Loading Projects...</h2>}>
                <Projects />
              </Suspense>
            }
          />

        </Route>

        {/* LOGIN */}
        <Route
          path="login"
          element={
            <Suspense fallback={<h2>Loading Login...</h2>}>
              <Login />
            </Suspense>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
