import React, { useEffect, useState } from 'react';
import { fetchNewReleases} from './utils/spotifyAPI';
import './App.css';

function App() {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newReleasesData = await fetchNewReleases();
      console.log("newReleasesData ",newReleasesData)
      setNewReleases(newReleasesData);
      
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Spotify Clone</h1>

      <section className="section">
        <h2>Released This Week</h2>
        <div className="list">
          {newReleases.length>0 ? newReleases.map((album) => (
            <div key={album.id} className="card">
              <img src={album.images[0].url} alt={album.name} />
              <p>{album.name}</p>
              <p>{album.artists.map((artist) => artist.name).join(', ')}</p>
            </div>
          )):"loading..."}
        </div>
      </section>

    </div>
  );
}

export default App;