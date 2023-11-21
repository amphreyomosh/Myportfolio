import React from 'react';
import Skill from './Skill'; 
import './About.css'

function About() {
  const skillsData = [
    { id: 1, name: 'HTML5', level: 'Advanced' },
    { id: 2, name: 'CSS3', level: 'Advanced' },
    { id: 3, name: 'JavaScript', level: 'Advanced' },
    { id: 4, name: 'C', level: 'Advanced' },
    { id: 3, name: 'Node.js', level: 'Intermediate' },
    { id: 3, name: 'React.js', level: 'Advanced' },
    { id: 3, name: 'Bootstrap', level: 'Advanced' },
    { id: 3, name: 'Python', level: 'intermediate' },

    // ... Add more skills
  ];

  return (
    <div className="about-container">
      <h1>About Me</h1>
      
Hello there! I'm Humphrey Omondi, a passionate web developer with a knack for turning ideas into dynamic and user-friendly websites. My journey into the world of web development began with a fascination for creating digital experiences that leave a lasting impression.
<br/><br></br>

Tech Stack
<br></br>
I'm proficient in a variety of technologies, including Bootstrap, React, C language, Python and use of Git. 
<br></br>
Projects That Define Me
<br></br>
Explore my portfolio to discover the projects that define my journey. Each project reflects not just my technical skills but also my commitment to solving real-world problems. I take pride in collaborating with clients and turning their visions into reality.
<br></br>
Continuous Learning
<br></br>
Web development is a field that never stands still, and neither do I. I'm committed to continuous learning, staying updated on the latest industry trends, and mastering new technologies to ensure that my skills are at the forefront of innovation.
<br></br>
Let's Connect!
<br></br>
Whether you're a fellow developer, a potential collaborator, or someone with a great project idea, I'd love to connect. Feel free to explore my portfolio, check out my GitHub repositories, and drop me a message. Let's build something amazing together!
Thanks for stopping by, and I look forward to the exciting opportunities that the world of web development has to offer.
<br></br><br></br>
Humphrey Omondi,<br></br>
Web Developer
      <div className="skills-container">
        {skillsData.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default About;
