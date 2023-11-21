// import React from "react";
// import "./Home.css";

// function Home() {
//   return (
//     <>
//       <div className="home-container">
//         <div className="intro">
//           <h1 className="name">HUMPHREY OMONDI</h1>
//           <h2 className="profession">Web Developer</h2>
//           <div className="welcome-text">
//             <h2>Welcome to My Portfolio</h2>
//             <p>
//               Hello! I'm Humphrey Omondi, a passionate web developer. Explore my
//               projects and skills to get to know more about me.
//             </p>
//           </div>
//         </div>
//         <div className="photo">
//           <img src="./src/assets/photos/IMG_5194.JPG" alt="youngman" />
//         </div>
//       </div>
//       <div className="button-container">
//         <button className="button-cv">View CV</button>
//       </div>
//     </>
//   );
// }

// export default Home;
import React from "react";
import "./Home.css";

function Home() {
  const openResume = () => {
    // Replace '/path/to/your/resume.pdf' with the actual path to your resume file
    const resumePath = '/path/to/your/resume.pdf';

    // Open the resume in a new tab or window
    window.open(resumePath, '_blank');
  };

  return (
    <>
      <div className="home-container">
        <div className="intro">
          <h1 className="name">HUMPHREY OMONDI</h1>
          <h2 className="profession">Web Developer</h2>
          <div className="welcome-text">
            <h2>Welcome to My Portfolio</h2>
            <p>
              Hello! I'm Humphrey Omondi, a passionate web developer. Explore my
              projects and skills to get to know more about me.
            </p>
          </div>
        </div>
        <div className="photo">
          <img src="./src/assets/photos/IMG_5194.JPG" alt="youngman" />
        </div>
      </div>
      <div className="button-container">
        <button className="button-cv" onClick={openResume}>
          View CV
        </button>
      </div>
    </>
  );
}

export default Home;

