import React, { useState, useEffect } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://api.github.com/users/jaum97/repos");
    const data = await response.json();

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
