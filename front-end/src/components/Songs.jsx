import { useState, useEffect } from "react";
import Song from "./Song";
const API = process.env.REACT_APP_API


export default function Songs()  {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
   fetch(`${API}/songs`)
   .then((res) => res.json())
   .then((results) => {
    const { payload: songsData } = results.data;
    setSongs(songsData)   })
   .catch((err) => {console.log("Fetch error")})
  }, [])

  return (
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Album</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <Song key={index} song={song} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}