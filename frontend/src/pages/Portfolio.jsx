
import React from 'react';
import image1 from '../dataimg/tipCalc.png';


const data = [
    {
        title: "Tip Calculator",
        image: image1,
        liveLink: "https://tip-calc-indol.vercel.app/",
        githubLink:"https://github.com/tutich/tip-calc",
    },
    {
        title: "Sign-Up Page",
        image: require('../dataimg/intSignUp.png'),
        liveLink: "https://int-sig.vercel.app/",
        githubLink:"https://github.com/tutich/int-sig",
    },
    {
        title: "Fitness Tracker",
        image: require('../dataimg/fitnessTracker.png'),
        liveLink: "https://jsc-sabw.vercel.app/",
        githubLink:"https://github.com/tutich/jsc.",
    }
];

function Portfolio() {
    return (
        <div className="">
            <h2 className='myport'>My Portfolio</h2>
            <div className="portfolio-container">
                {data.map((project, index) => (
                    <div key={index} className="project">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                        </a>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View in GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;