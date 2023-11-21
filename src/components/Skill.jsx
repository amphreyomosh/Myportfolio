import React from 'react';

function Skill({ skill }) {
  const { name, level } = skill;

  return (
    <div className="skill-card">
      <h2>{name}</h2>
      <p>Level: {level}</p>
    </div>
  );
}

export default Skill;
