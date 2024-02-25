//Angelica Lindström NET23
import React, { useState, useEffect } from "react";
import "./github.css";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await fetch(
          // fetching from my github
          "https://api.github.com/users/Angelicalindstrom/repos",
          {
            headers: {
              //my personal acessToken
              Authorization: "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",
            },
          }
        );
        if (!response.ok) {
          // if response is not ok. erroe message
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error while fetching GitHub repos:", error);
        setLoading(false);
      }
    };

    getRepos();
  }, []);

  return (
    <div className="totalgit">
      {loading ? (
        <h3>Loading........ get a coffee while waiting</h3> // Message while loading
      ) : (
        <ul className="ulgit">
          {repos.map((repo) => (
            <li className="list" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubRepos;
