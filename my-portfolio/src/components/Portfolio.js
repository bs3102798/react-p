import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'This is the description of Project 1.',
            demoLink: 'https://project1-demo.com',
            githubLink: 'https://github.com/yourusername/project1'
        },
        {
            title: 'Project 2',
            description: 'This is the description of Project 2.',
            demoLink: 'https://project2-demo.com',
            githubLink: 'https://github.com/yourusername/project2'
        },

        {
            title: 'Project 2',
            description: 'This is the description of Project 2.',
            demoLink: 'https://project2-demo.com',
            githubLink: 'https://github.com/yourusername/project2'
        },
        {
            title: 'Project 2',
            description: 'This is the description of Project 2.',
            demoLink: 'https://project2-demo.com',
            githubLink: 'https://github.com/yourusername/project2'
        },
        // Add more project objects as needed
    ];

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
