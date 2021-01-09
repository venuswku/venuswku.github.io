import React from 'react';
import './Projects.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as OctopusBody } from '../../Assets/OctopusBody.svg';
import { ReactComponent as OctopusLeftTentacle } from '../../Assets/OctopusLeftTentacle.svg';
import { ReactComponent as OctopusRightTentacle } from '../../Assets/OctopusRightTentacle.svg';
import PersonalWebsite from '../../Assets/PersonalWebsite.gif';
import momGif from '../../Assets/Mom.gif';

function Projects() {
    return (
        <div className="projects">
            <div className="octopus">
                <OctopusBody className="octopus-head" />
                <OctopusRightTentacle className="right-tentacle" />
                <OctopusLeftTentacle className="left-tentacle" />
                <OctopusRightTentacle className="right-tentacle" />
                <OctopusLeftTentacle className="left-tentacle" />
            </div>
            <p className="heading">Projects</p>
            <div className="project">
                <img src={PersonalWebsite} alt="gif of my personal website" className="project-gif" />
                <div className="project-text">
                    <p className="project-name">Personal Website</p>
                    <p className="project-description">Online portfolio to display my projects and tell more information about me.</p>
                    <div className="project-links">
                        <NavLink exact to="/" className="project-link-button" target="_blank">Demo</NavLink>
                        <a className="project-link-button" href="https://github.com/venuswku/venuswku.github.io" target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                </div>
            </div>
            <p className="heading art-heading">Digital Art</p>
            <div className="art">
                <iframe title="video1" width="560" height="315" src="https://www.youtube.com/embed/ih4mPJ6KJSo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="art-description">
                    Food for Thought <span role="img" aria-label="thinking-face">🤔</span>
                    <br/>Based on some thoughts I had when I was young.
                    <br/>Created using Adobe After Effects and Photoshop.
                </p>
                <iframe title="video2" width="560" height="315" src="https://www.youtube.com/embed/_rqA5OehlNM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="art-description">
                    It's amusing how this flight attendant managed to make safety instructions entertaining, so I thought it'd be fun to share this through text animation.
                    Since he speeds through the safety instructions, I hope this also helps people who couldn't hear him clearly.
                    <br/><span role="img" aria-label="airplane">✈</span> Created using Adobe After Effects and Photoshop.
                </p>
                <iframe title="video3" width="560" height="315" src="https://www.youtube.com/embed/YAVaJB_MkUM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="art-description">
                    The unique variety of eerie sound effects mixed into the song's instrumentals inspired me to represent the music in an abstract way. <span role="img" aria-label="music-note">🎵</span>
                    <br/>It was challenging to omit the use of symbolism, but I think using abstract shapes and patterns really enhanced the song's composition.
                    <br/>Each frame was hand-drawn using Adobe Photoshop.
                </p>
                <img src={momGif} alt="gif of my mom" className="mom" />
                <p className="art-description">
                    Some of my mom's life memories~
                    <br/>Rotoscope animation created by tracing over a video of my mom picking up a plushie.
                    <br/><span role="img" aria-label="mom">👩</span> Frames were hand-drawn using Adobe Photoshop and lots of imagination!
                </p>
            </div>
        </div>
    );
}

export default Projects;
