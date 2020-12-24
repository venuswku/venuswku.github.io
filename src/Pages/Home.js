import React from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import { SentimentSatisfiedRounded } from '@material-ui/icons';
import { NavLink } from "react-router-dom";

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
            <div className="home-title">Welcome!<SentimentSatisfiedRounded className={classes.smileIcon}/></div>
            <div className="intro">
                Hello! I'm Venus, a third-year undergraduate student studying Computer Science at the University of California in Santa Cruz.
                <br/>
                I have a passion for creating meaningful projects that can benefit people in any way possible.
            </div>
            
            <div className="wave-background">
                <div className="dive" onClick={scrollToOcean}>Dive in to explore more!</div>
                <div className="wave"></div>
                <div className="website-guide">
                    <NavLink exact to="/about" className="website-section" ref={oceanRef}>
                        <div className="section-name">About</div>
                        <p className="section-description">My education, work experience, and skills. Downloadable resume is provided at the bottom of this section.</p>
                    </NavLink>
                    <NavLink exact to="/projects" className="website-section">
                        <div className="section-name">Projects</div>
                        <p className="section-description">Brief descriptions, source code, and demos of my projects.</p>
                    </NavLink>
                    <NavLink exact to="/contact" className="website-section">
                        <div className="section-name">Contact</div>
                        <p className="section-description">How to contact me.</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Home;
