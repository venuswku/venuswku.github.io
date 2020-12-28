import React from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import { SentimentSatisfiedRounded } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SeaLionBody } from '../Assets/SeaLionBody.svg';
import { ReactComponent as SeaLionTail } from '../Assets/SeaLionTail.svg';
import { ReactComponent as Starfish } from '../Assets/Starfish.svg';
import { ReactComponent as OctopusBody } from '../Assets/OctopusBody.svg';
import { ReactComponent as OctopusTentaclesLeft } from '../Assets/OctopusTentaclesLeft.svg';
import { ReactComponent as OctopusTentaclesRight } from '../Assets/OctopusTentaclesRight.svg';

const useStyles = makeStyles((theme) => ({
    smileIcon: {
        color: '#55C1FF',
        fontSize: 50,
    },
}));

const Home = () => {
    const classes = useStyles();
    const oceanRef = React.useRef();
    const scrollToOcean = () => window.scrollTo({ behavior: 'smooth', top: oceanRef.current.offsetTop });
    return (
        <div className="home">
            <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
            <div className="cloud cloud3"></div>
            <div className="home-heading">Welcome!<SentimentSatisfiedRounded className={classes.smileIcon}/></div>
            <div className="intro">
                <p className="intro-content">Hello, I'm Venus! I have a passion for combining creativity and programming to create engaging projects that are beneficial for people.</p>
            </div>
            <div className="wave-background">
                <div className="dive" onClick={scrollToOcean}>Dive in to explore more!</div>
                <div className="wave"></div>
                <div className="website-guide" ref={oceanRef}>
                    <NavLink exact to="/about" className="website-section about-section">
                        <SeaLionBody className="animal sea-lion-body" />
                        <SeaLionTail className="animal sea-lion-tail" />
                        <div className="section-name about-name">About</div>
                        <p className="section-description">My background and what I'm passionate about. Downloadable resume is provided at the bottom of this section.</p>
                    </NavLink>
                    <NavLink exact to="/projects" className="website-section projects-section">
                        <OctopusTentaclesLeft className="animal octopus-tentacle-left" />
                        <OctopusTentaclesRight className="animal octopus-tentacle-right" />
                        <OctopusBody className="animal octopus-body" />
                        <div className="section-name projects-name">Projects</div>
                        <p className="section-description">Brief descriptions, source code, and demos of my projects.</p>
                        
                    </NavLink>
                    <NavLink exact to="/contact" className="website-section contact-section">
                        <Starfish className="animal starfish" />
                        <div className="section-name contact-name">Contact</div>
                        <p className="section-description">How to contact me!</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Home;
