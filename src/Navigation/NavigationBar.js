import React from 'react';
import './NavigationBar.css';
import DrawerToggleButton from './DrawerToggleButton';
import { Typography } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const NavigationBar = props => (
      <div className="navigation-bar">
        <div className="menu-button">
            <DrawerToggleButton click={props.drawerButtonClickHandler} />
        </div>
        <div className="mobile-space"></div>
        <a href="/" className="logo">
            <Typography variant="h4">Venus Ku</Typography>
        </a>
        <div className="space"></div>
        <div className="navbar-items">
            <ul>
                <li><NavLink exact to="/" activeStyle={{color: 'white'}}>Home</NavLink></li>
                <li><NavLink to="/about" activeStyle={{color: 'white'}}>About</NavLink></li>
                <li><NavLink to="/projects" activeStyle={{color: 'white'}}>Projects</NavLink></li>
                <li><NavLink to="/contact" activeStyle={{color: 'white'}}>Contact</NavLink></li>
            </ul>
        </div>
      </div>
    );

export default NavigationBar;
