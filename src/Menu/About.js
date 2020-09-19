import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    purpleBackground: {
        color: 'white',
        background: '#715AFF',
        width: '40%',
        padding: 20,
        marginLeft: 50,
    },
    blueBackground: {
        color: 'white',
        background: '#5887FF',
        width: '40%',
        position: 'absolute',
        right: 0,
        padding: 20,
        marginRight: 50,
    },
}));

function About() {
    const classes = useStyles();
    return (
        <div className="About">
            <div className="space"></div>
            <p className="title">About Me</p>
            <div className={classes.purpleBackground} style={{ fontSize:23 }}>
                <p>Hello, it's Venus! I'm a third-year undergraduate student studying Computer Science at the University of California in Santa Cruz.</p>
                <p>I have a passion for ... </p>
            </div>
            <p className="title">Resume</p>
            <div className={classes.blueBackground}>
                Download
            </div>
        </div>
    );
}

export default About;
