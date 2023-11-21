import React from 'react';
import Card from './Card'; 
import './Projects.css'

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Bus Reservation System',
      description: 'This is a bus reservation system where the admin can add bus details, manage the information of the bus, view the seats and also book the seats for the customers. ',
      imageUrl: './src/assets/photos/images.jpeg',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description of Project 2.',
        imageUrl: 'url-to-image-1.jpg',
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'Description of Project 3.',
        imageUrl: 'url-to-image-1.jpg',
      },
      {
        id: 2,
        title: 'Project 4',
        description: 'Description of Project 4.',
        imageUrl: 'url-to-image-1.jpg',
      },
      {
        id: 2,
        title: 'Project 5',
        description: 'Description of Project 5.',
        imageUrl: 'url-to-image-1.jpg',
      },
      {
        id: 2,
        title: 'Project 6',
        description: 'Description of Project 6.',
        imageUrl: 'url-to-image-1.jpg',
      },
      {
        id: 2,
        title: 'Project 7',
        description: 'Description of Project 7.',
        imageUrl: 'url-to-image-1.jpg',
      },

    // ... Repeat for other projects
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="cards-container">
        {projectsData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
