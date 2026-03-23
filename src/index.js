import React from "react";
import ReactDOM from "react-dom/client";
import "./tableStyle.css";
import profilePic from "./download.jpg";

function App() {

  const boxStyle = {
    border: "2px solid black",
    padding: "20px",
    margin: "20px",
    width: "60%"
  };

  return (
    <div>

      <img
        src={profilePic}
        alt="profile"
        style={{ float: "right", width: "150px", height: "150px" }}
      />

      <h1>My Profile</h1>

      <div style={{ backgroundColor: "gray", padding: "10px", width: "50%" }}>
        <p>
          Name: Sahasra <br/>
          Address: Chennai, India <br/>
          Email: sahasra@email.com
        </p>
      </div>

      <p
        style={{
          fontFamily: "Arial",
          color: "green",
          columnCount: 2,
          fontSize: "16px"
        }}
      >
        I am a B.Tech Computer Science student specializing in Artificial Intelligence and
        Machine Learning. I am interested in software development, machine learning,
        and building intelligent systems. I enjoy working on projects that combine
        programming, data analysis, and problem solving.
      </p>

      <h2>Academic Qualifications</h2>

      <table className="tableStyle">
        <tbody>

          <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Percentage/CGPA</th>
          </tr>

          <tr>
            <td>10th</td>
            <td>ABC School</td>
            <td>95%</td>
          </tr>

          <tr>
            <td>12th</td>
            <td>XYZ Junior College</td>
            <td>92%</td>
          </tr>

          <tr>
            <td>B.Tech (Till Sem CGPA)</td>
            <td>ABC University</td>
            <td>8.5</td>
          </tr>

        </tbody>
      </table>

      <h2>Technologies Known</h2>

      <ol style={{ color: "blue", fontSize: "16px" }}>
        <li>Java</li>
        <li>Python</li>
        <li>ReactJS</li>
        <li>Machine Learning</li>
      </ol>

      <h2>Awards / Certifications</h2>

      <div style={boxStyle}>
        <ul>
          <li>Machine Learning Certification</li>
          <li>Winner – College Hackathon</li>
          <li>Bharatanatyam Performer</li>
        </ul>
      </div>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);