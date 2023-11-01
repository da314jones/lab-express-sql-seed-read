import React from "react";

export default function Song({ song, index }) {
  return (
    <tr>

      <td style={{ cursor: "alias" }}>
        <a href={`/songs/${index}`}>{song.album}</a>
      </td>
      <td style={{ cursor: "alias" }}>
        {song.is_favorite ? <span>🎶</span> : <span></span>}
      </td>
    </tr>
  );
}
