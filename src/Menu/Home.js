import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { SentimentSatisfiedRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    smileIcon: {
        color: '#55C1FF',
        fontSize: 50,
        float: 'left',
        marginTop: -105,
        marginLeft: 277,
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className="home">
            <p className="title">Welcome!</p>
            <SentimentSatisfiedRounded className={classes.smileIcon}/>
            <div style={{ background: '#715AFF' }}>
                <p>Hello, it's Venus! I'm a third-year undergraduate student studying Computer Science at the University of California in Santa Cruz.</p>
            </div>
        </div>
    );
}

export default Home;
