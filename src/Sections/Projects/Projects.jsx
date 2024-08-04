import React from 'react'
import Cryptiq from '../../assets/Cryptiq.png';
import Monishz from '../../assets/Monish logo.jpg'
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id="projects" className={StyleSheet.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard 
      src={Cryptiq}
       link='https://github.com/Moniz03/Integration-of-Cryptography-and-Steganography-for-Secure-Communication'
       h3="Cryptiq"
       p="Software Tool to secure your data online"
       />
       <ProjectCard 
      src={Monishz}
       link='https://github.com/Moniz03/Monish-Babu-Arunagiri-Portfolio'
       h3="Portfolio"
       p="A personal portfolio website of my own"
       />
    </div>
    </section>
    );
}

export default Projects