import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <h1>My Resume</h1>

      <h3>Education</h3>
      <ul>
        <li>B.Tech CSE-AIML</li>
        <li>Chandigarh University</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, React Router</li>
        <li>Bootstrap, Material UI</li>
      </ul>

      <h3>Projects</h3>
      <ul>
        <li>Multi-Page SPA using React Router</li>
        <li>Profile Dashboard</li>
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
