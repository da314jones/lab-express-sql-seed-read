import React from 'react'

export default function Secondary({ secondary }) {
  return (
    <div>
      <h4>{secondary.title}<span>{secondary.rating}</span></h4>
      <h5>{secondary.reviewer}</h5>
      <p>{secondary.content}</p>
    </div>
  )
}
