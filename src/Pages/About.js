import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <p className="about-heading">About</p>
            <div className="about-content">
                <div className="purple-section">
                    Currently, I'm a third-year undergraduate studying Computer Science at the University of California in Santa Cruz.
                    I hope to develop software projects that can benefit people
                    because programming gives a meaningful purpose to the computer and mobile applications that we use in our daily lives.
                </div>
                <div className="blue-section">
                    Whenever possible, I like to incorporate digital art into my projects.
                    It's a nice way to visually express emotions and interactively connect with the people who look at my work.
                </div>
            </div>
            <p className="about-heading">Resume</p>
            <div className="resume-content">
                <div className="blue-section">
                    <p className="download">Download</p>
                </div>
            </div>
        </div>
    );
}

export default About;
