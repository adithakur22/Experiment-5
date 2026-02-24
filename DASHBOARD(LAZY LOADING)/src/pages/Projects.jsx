import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <h1>My Projects</h1>

      <ul>
        <li>Multi-Page SPA using React Router</li>
        <li>Profile Dashboard</li>
        <li>Full Stack Application</li>
      </ul>

      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "20px" }}
      >
        Go Home
      </button>
    </>
  );
}
