import React from 'react';
import './About.css';
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
        <div className="about">
            <p className="title">About</p>
            <div className={classes.purpleBackground} style={{ fontSize:23 }}>
                <p>Education</p>
            </div>
            <p className="title">Resume</p>
            <div className={classes.blueBackground}>
                Download
            </div>
        </div>
    );
}

export default About;
