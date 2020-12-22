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
    return (
        <div className="home">
            <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
            <div className="cloud cloud3"></div>
            <div className="title">Welcome!<SentimentSatisfiedRounded className={classes.smileIcon}/></div>
            <div className="intro">
                <p>Hello, I'm Venus! I'm a third-year undergraduate student studying Computer Science at the University of California in Santa Cruz.</p>
                <p>I have a passion for applying what I've learned to create projects that can benefit people in any way possible. </p>
            </div>
            <div className="wave-background">
                <div className="wave"></div>
            </div>
        </div>
    );
}

export default Home;
