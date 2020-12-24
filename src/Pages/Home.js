import React from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import { SentimentSatisfiedRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    smileIcon: {
        color: '#55C1FF',
        fontSize: 50,
    },
}));

const Home = () => {
    const classes = useStyles();
    const oceanRef = React.useRef();
    const scrollToOcean = () => {
        const oceanSection = document.querySelector('.website-guide').style.backgroundColor = "red";
        oceanSection.scrollIntoView({ behavior: 'smooth' });
        // window.scrollTo({ behavior: 'smooth', top: oceanRef.current.offsetTop });
    };
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
            <div className="dive" onClick={scrollToOcean}>Dive in to explore more!</div>
            <div className="wave-background">
                <div className="wave"></div>
                <div className="website-guide" ref={oceanRef}>
                    put navigation and brief details about each website section here
                    About
                    Projects
                    Contact
                </div>
            </div>
        </div>
    );
}

export default Home;
