import React from 'react';
import './DrawerToggleButton.css'

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="button-line"></div>
        <div className="button-line"></div>
        <div className="button-line"></div>
    </button>
);

export default drawerToggleButton;