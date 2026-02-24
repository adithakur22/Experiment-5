import { useNavigate } from "react-router-dom";
import profilePic from "../profile.jpeg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>My Dashboard</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginTop: "30px"
        }}
      >
        <img
          src={profilePic}
          alt="Profile"
          loading="lazy"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top center",
            border: "3px solid #00e5ff"
          }}
        />

        <div>
          <h2>Aditya Thakur</h2>
          <p style={{ color: "#00e5ff", fontWeight: "600" }}>
            Frontend Developer | React Enthusiast
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "14px" }}>
            <button onClick={() => navigate("/profile")}>
              Go to Profile
            </button>

            <button onClick={() => navigate("/projects")}>
              Go to Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
