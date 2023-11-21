import React from 'react';
import './Card.css'

function Card({ project }) {
  const { title, description, imageUrl } = project;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#">View Project</a>
      </div>
    </div>
  );
}

export default Card;
