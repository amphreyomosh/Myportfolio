import React from 'react';
import { Link } from 'react-router-dom';

const ResumeButton = () => {
  
  const resumePath = `./src/assets.pdf`;

  return (
    <Link to={resumePath}>
      <button>Open Resume</button>
    </Link>
  );
};

export default ResumeButton;
