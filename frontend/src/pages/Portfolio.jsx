
import React from 'react';
import image1 from '../dataimg/easybank.png';


const data = [
    {
        title: "Easybank Landing Page",
        image: image1,
        liveLink: "https://landingpage-f63de.web.app/",
        githubLink:"https://github.com/tutich/landingpage",
    },
    {
        title: "Movie Database",
        image: require('../dataimg/movieDB.png'),
        liveLink: "https://moviedb-8eee9.web.app/home",
        githubLink:"https://github.com/tutich/movie",
    },
    {
        title: "Shoe Hub e-commmerce",
        image: require('../dataimg/ShoeHub.png'),
        liveLink: "https://shoehub-331a6.web.app/",
        githubLink:"https://github.com/tutich/shoeHub",
    },
    {
        title: "Weather App",
        image: require('../dataimg/weatherApp.png'),
        liveLink: "https://weatherapp-c53ee.web.app/",
        githubLink:"https://github.com/tutich/weather",
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