import React from 'react';
import './Projects.css';
import { ReactComponent as OctopusBody } from '../../Assets/OctopusBody.svg';
import { ReactComponent as OctopusLeftTentacle } from '../../Assets/OctopusLeftTentacle.svg';
import { ReactComponent as OctopusRightTentacle } from '../../Assets/OctopusRightTentacle.svg';
import PerfectGift from '../../Assets/PerfectGiftLogo.svg';
import PersonalWebsite from '../../Assets/PersonalWebsite.gif';
import CompassLogo from '../../Assets/CompassLogo.svg';
import RelateWebsite from '../../Assets/RelateWebsite.svg';
import dancingBabyGif from '../../Assets/DancingBabyRotoscope.gif';
import momGif from '../../Assets/Mom.gif';

const projects = [
    {
        name: "CoastSnap",
        description: "Pilot community coastline monitoring project sponsored by the City of Santa Cruz and the United States Geological Survey.",
        website: "https://coastsnap.ucsc.edu/",
        code: "https://github.com/venuswku/CoastSnap",
        image: "https://raw.githubusercontent.com/venuswku/CoastSnap/main/src/images/README/AboutPage.gif",
        alt: "Gif of About Page from CoastSnap in Santa Cruz Website",
        imageClass: "project-gif",
    },
    {
        name: "Perfect Gift",
        description: "Provides gift suggestions for friends and family based on their interests or wishlist!",
        website: "https://venuswku.github.io/perfect-gift",
        demo: "http://www.youtube.com/watch?v=WDyAbhEy0fc",
        code: "https://github.com/venuswku/perfect-gift",
        image: PerfectGift,
        alt: "Perfect Gift Logo",
        imageClass: "perfectGift",
    },
    {
        name: "Personal Website",
        description: "Online portfolio to display my projects and tell more information about me.",
        website: "https://venuswku.github.io/",
        code: "https://github.com/venuswku/venuswku.github.io",
        image: PersonalWebsite,
        alt: "Gif of My Personal Website",
        imageClass: "project-gif",
    },
    {
        name: "Compass",
        description: "Chat-based web platform facilitating large group mentoring sessions. This project is used for research purposes at the Tech4Good Lab in UC Santa Cruz, so the code is not publically available.",
        website: "https://compass-ucsc.firebaseapp.com",
        image: CompassLogo,
        alt: "Compass Logo",
        imageClass: "compassLogo",
    },
    {
        name: "Relate",
        description: "Collects community feedback through interactive online activities. This project is used for research purposes at the Tech4Good Lab in UC Santa Cruz, so the code is not publically available.",
        website: "https://relate-dev-36d63.firebaseapp.com/",
        image: RelateWebsite,
        alt: "Relate Website",
        imageClass: "relateWebsite",
    },
];

function Projects() {
    return (
        <div className="projects">
            <div className="octopus">
                <OctopusBody className="octopus-head" />
                <OctopusRightTentacle className="right-tentacle" />
                <OctopusLeftTentacle className="left-tentacle" />
                <OctopusRightTentacle className="right-tentacle" />
                <OctopusLeftTentacle className="left-tentacle" />
                <OctopusRightTentacle className="right-tentacle" />
                <OctopusLeftTentacle className="left-tentacle" />
                <OctopusRightTentacle className="right-tentacle" />
            </div>
            <p className="heading">Projects</p>
            {projects.map(({name, description, website, demo, code, image, alt, imageClass}) => {
                return <div className="project">
                    <img src={image} alt={alt} className={imageClass} />
                    <div className="project-text">
                        <p className="project-name">{name}</p>
                        <p className="project-description">{description}</p>
                        <div className="project-links">
                            <a className="project-link-button" href={website} title={name} target="_blank" rel="noopener noreferrer">Website</a>
                            {demo &&
                                <a className="project-link-button" href={demo} title="Video Demo" target="_blank" rel="noopener noreferrer">Demo</a>
                            }
                            {code &&
                                <a className="project-link-button" href={code} title="GitHub Repository" target="_blank" rel="noopener noreferrer">Code</a>
                            }
                        </div>
                    </div>
                </div>;
            })}
            <p className="heading art-heading">Digital Art</p>
            <div className="art">
                <img src={dancingBabyGif} alt="gif of dancing baby" className="baby" />
                <p className="art-description">
                    Happy dance! <span role="img" aria-label="baby-dancing">👶🕺</span>
                    <br/><a href="https://github.com/venuswku/venuswku.github.io/blob/970387156406fa7e9c913d7a66805e313aa7b160/src/Assets/DancingBabyReference.gif" title="Dancing Baby Reference" target="_blank" rel="noopener noreferrer">This baby</a> perfectly captures how I feel whenever something exciting happens. He's so adorable that I had to draw him!
                    <br/>Each frame was hand-drawn using Adobe Photoshop.
                </p>
                <iframe title="video3" width="560" height="315" src="https://www.youtube.com/embed/ih4mPJ6KJSo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <iframe title="video1" width="560" height="315" src="https://www.youtube.com/embed/YAVaJB_MkUM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
