import React from 'react';
import './About.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SeaLionBody } from '../../Assets/SeaLionBody.svg';
import Resume from '../../Assets/Ku_Venus_Resume.pdf';

function About() {
    const resumeRef = React.useRef();
    const scrollToResume = () => window.scrollTo({ behavior: 'smooth', top: resumeRef.current.offsetTop });
    return (
        <div className="about">
            <p className="heading">About</p>
            <div className="about-me">
                <div className="sea-lion-speech">
                    <div className="speech-bubble about-speech-bubble" onClick={scrollToResume}>More info can be found in the resume below!</div>
                    <SeaLionBody className="sea-lion" />
                </div>
                <div className="about-me-section">
                    Currently, I'm looking for opportunities to work on meaningful projects that include a mix of sustainability and engineering.
                    I graduated in 2022 from the University of California: Santa Cruz with a bachelor's degree in Computer Science.
                </div>
            </div>
            <div className="about-me-section hobby-section">
                Whenever possible, I like to incorporate digital art into my projects.
                It's a nice way to visually express emotions and interactively connect with the people who look at my work.
                Check out some of my work in the <NavLink exact to="/projects">Projects</NavLink> page!
            </div>
            <p className="heading" ref={resumeRef}>Resume</p>
            <div className="resume">
                <object data={Resume} type="application/pdf" width="100%" height="100%">
                    <a href={Resume} target="_blank" rel="noopener noreferrer">Ku_Venus_Resume.pdf</a>
                </object>
            </div>
        </div>
    );
}

export default About;
