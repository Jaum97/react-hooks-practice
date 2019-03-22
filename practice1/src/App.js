import React, { useState } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: "repo-teste" },
    { id: 2, name: "repo-teste" },
    { id: 3, name: "repo-teste" }
  ]);

  function handleAddRepository() {
    setRepositories([...repositories, { id: Math.random, name: "new-repo" }]);
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Add repository</button>
    </>
  );
}
