//Angelica Lindström NET23
import "../css/Project.css";
import GitHubGet from "../components/GitHubGet.js";

export default function Project() {
  return (
    <div className="Project-container">
      <header>
        <h1>MY GITHUB PROJECTS</h1>
      </header>
      <body>
        <h2>
          <GitHubGet />
        </h2>
      </body>
    </div>
  );
}
