import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <p className="about-heading">About</p>
            <div className="about-content">
                <div className="purple-section">
                    <p className="about-section">Education</p>
                    <p>University of California: Santa Cruz, CA<br/>
                        B.S. in Computer Science (Dean’s Honor, Winter 2018 – Present)<br/>
                        Expected Graduation: June 2022<br/>
                        GPA: 3.91/4.0
                    </p>
                </div>
                <div className="blue-section">
                    <p className="about-section">Related Coursework</p>
                    <ul>
                        <li>Principles of Computer Systems Design</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Comparative Programming Languages</li>
                        <li>Computer Architecture</li>
                        <li>Computer Networks</li>
                        <li>Computer Systems and Assembly Language</li>
                        <li>Applied Machine Learning</li>
                    </ul>
                </div>
                <div className="blue-section">
                    <p className="about-section">Experience</p>
                </div>
                <div className="purple-section">
                    <p className="about-section">Skills</p>
                </div>
            </div>
            <p className="about-heading">Resume</p>
            <p className="resume-description">Printable version of the above info.</p>
            <div className="resume-content">
                <div className="blue-section">
                    <p className="about-section">Download</p>
                </div>
            </div>
        </div>
    );
}

export default About;
