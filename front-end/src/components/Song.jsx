import React from "react";

export default function Song({ song }) {
    
  return (
    <tr>
      <td style={{ cursor: "alias" }}>
        <a href={`/songs/${song.id}`}>{song.album}</a>
      </td>
      <td style={{ cursor: "alias" }}>
        {song.is_favorite ? <span>🎶</span> : <span></span>}
      </td>
    </tr>/*changed this line from index to song.id*/
  );
}
