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

function Home() {
    const classes = useStyles();
    const oceanRef = React.createRef();
    const scrollToOcean = () => oceanRef.current.scrollIntoView({behavior: 'smooth'});
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
                <button onClick={scrollToOcean}>Dive in to explore more about me!</button>
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
