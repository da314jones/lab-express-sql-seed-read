import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = process.env.VITE_API_URL

export default function Songs()  {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
   fetch(`${API}/songs`)
   console.log(API)
   .then((res) => res.json())
   .then((songsData) => 
   console.log(songs),
    setSongs(songs)
   )
   .catch((err) => {console.log("Fetch error")})
  }, [songs])

  return (
    <tr>
      <td>
        {songs.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp;&nbsp;&nbsp;</span>
        )}
      </td>
    <td style={{ cursor: "alias" }}>
        <a href={songs.album} target="_blank" rel="noreferrer">
          {songs.name}
        </a>
      </td>
      <td>
        <Link to={`/songs/${songs.id}`}>✏️</Link>
      </td>
    </tr>
  );
}
