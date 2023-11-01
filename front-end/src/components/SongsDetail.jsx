import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
const API = process.env.REACT_APP_API;

export default function SongsDetail() {
  const [song, setSong] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
  
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => res.json())
      .then((results) => {
        const { payload: songsData } = results.data;
        setSong(songsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/songs/${id}`, httpOptions)
      .then((res) => {
        console.log(res);
        alert("Hey you deleted a song!");
        navigate("/songs")
      })
      .catch((err) => console.log(err));
  };



  return (
    <Card>
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <span>{song.is_favorite}</span>
        <Link to={`/songs/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <Card.Title>{song.name}</Card.Title>
        <span>{song.is_favorite}</span>
        <span>
          <button onClick={handleDelete}>Delete</button>
        </span>
        <Card.Text>{song.artist}</Card.Text>
        {song.time}
      </Card.Body>
    </Card>
  );
}
