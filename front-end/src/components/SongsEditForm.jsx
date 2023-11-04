import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API;

export default function SongsEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const updateSong = () => {
    console.log(`${API}/songs/${id}`);

    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setSong(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Ex. Bobby Caldwell"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album Name:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Bad"
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <label htmlFor="time">Song Duration:</label>
        <input
          id="time"
          name="time"
          value={song.time}
          onChange={handleTextChange}
          placeholder="3:34"
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
};

