import React, { useState, useEffect } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  /*
  function handleAddRepository() {
    setRepositories([
      ...repositories, 
      { id: Math.random, name: "new-repo" }
    ]);
  }
  */

  useEffect(async () => {
    const responde = await fetch("https://api.github.com/users/jaum97/repos");
    const data = await responde.json();

    setRepositories(data);
  }, []);

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}
