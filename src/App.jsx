// src/App.jsx
import { useState } from 'react';
import episodes from './data';
import './App.css'; // Assuming you'll create this for styling

function EpisodeList({ episodes, onEpisodeSelect }) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.id} onClick={() => onEpisodeSelect(episode.id)}>
          {episode.name}
        </li>
      ))}
    </ul>
  );
}

function EpisodeDetails({ episode }) {
  return (
    <div>
      <h2>Episode {episode.number}: {episode.name}</h2>
      <p>{episode.description}</p>
    </div>
  );
}


function App() {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);
  const selectedEpisode = episodes.find(episode => episode.id === selectedEpisodeId);


  const handleEpisodeSelect = (episodeId) => {
    setSelectedEpisodeId(episodeId);
  };


  return (
    <div className="app-container">
      <h1>Dark Echoes</h1>
      <EpisodeList episodes={episodes} onEpisodeSelect={handleEpisodeSelect} />
      <div className="episode-details">
        {selectedEpisode ? (
          <EpisodeDetails episode={selectedEpisode} />
        ) : (
          <p>Select an episode to view details.</p>
        )}
      </div>
    </div>
  );
}

export default App;
