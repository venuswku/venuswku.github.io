import React from 'react';
import './CloseDrawerButton.css'
import { CloseRounded } from '@material-ui/icons';

const closeDrawerButton = props => (
    <button className="close-button" onClick={props.click}>
        <CloseRounded style={{color: 'rgba(255, 255, 255, 0.31)', fontSize: '35px'}} />
    </button>
);

export default closeDrawerButton;