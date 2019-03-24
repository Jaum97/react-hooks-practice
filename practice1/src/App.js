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

  useEffect(() => {
    const favs = repositories.filter(repo => repo.favorite);

    document.title = `You have ${favs.length} favorites`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepos = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(newRepos);
  }

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          <button onClick={() => handleFavorite(repo.id)}>Favorite</button>
          <strong>{repo.name}</strong>
          {repo.favorite && <span> ★</span>}
        </li>
      ))}
    </ul>
  );
}
