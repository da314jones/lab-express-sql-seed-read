import React from 'react'
import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'
const API = process.env.REACT_APP_API


export default function SongsDetail() {
    const [oneSong, setOneSong] = useState([]);

    useEffect(() => {
        fetch(`${API}/songs`)
        .then((res) => res.json())
        .then((results) => {
         const { payload: songsData } = results.data;
         setOneSong(songsData)   })
        .catch((err) => {console.log("Fetch error")})
       }, [])



  return (
    <Card>
      <Card.Body>
      <Card.Title>{oneSong.name}</Card.Title><span>{oneSong.is_favorite}</span>
      <Card.Text>
        {oneSong.artist}
      </Card.Text>
      {oneSong.time}
      </Card.Body>
    </Card>
  )
}
