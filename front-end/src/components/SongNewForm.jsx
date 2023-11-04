import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API;


export default function SongsNewForm() {
    const navigate = useNavigate();
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
      });

      const addSong = () => {
        fetch(`${API}/songs`, {
          method: "POST",
          body: JSON.stringify(song),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            navigate(`/songs`);
          })
          .catch((error) => console.error("catch", error));
      };
    
      const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addSong();
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
    </div>
    );
}

