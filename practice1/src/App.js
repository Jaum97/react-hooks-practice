import React, { useState, useEffect } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  async function getRepos(user) {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();

    return data;
  }

  useEffect(() => {
    getRepos("jaum97").then(response => setRepositories(response));
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
