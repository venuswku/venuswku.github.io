import React from 'react';
import './About.css';
import { ReactComponent as SeaLionBody } from '../Assets/SeaLionBody.svg';

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
                    Currently, I'm a third-year undergraduate studying Computer Science at the University of California in Santa Cruz.
                    I hope to develop software projects that can benefit people
                    because programming gives a meaningful purpose to the computer and mobile applications that we use every day.
                </div>
            </div>
            <div className="about-me-section hobby-section">
                Whenever possible, I like to incorporate digital art into my projects.
                It's a nice way to visually express emotions and interactively connect with the people who look at my work.
            </div>
            <p className="heading">Resume</p>
            <div className="resume-content" ref={resumeRef}>
                <div className="download">Download</div>
            </div>
        </div>
    );
}

export default About;
