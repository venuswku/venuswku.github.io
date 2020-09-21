import { Drawer } from '@material-ui/core';
import React from 'react';
import './MenuDrawer.css';
import { CloseRounded, HomeRounded, AccountCircleRounded, FolderRounded, ContactMailRounded } from '@material-ui/icons';
import { NavLink } from "react-router-dom";

const MenuDrawer = props => {
    let drawerClasses = 'drawer';
    if (props.show) {
        drawerClasses = 'drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <CloseRounded className="close-button"/>
            <li><NavLink exact to="/" activeStyle={{color: 'white'}}><HomeRounded className="menu-drawer-icons" />Home</NavLink></li>
            <li><NavLink to="/about" activeStyle={{color: 'white'}}><AccountCircleRounded className="menu-drawer-icons" />About</NavLink></li>
            <li><NavLink to="/projects" activeStyle={{color: 'white'}}><FolderRounded className="menu-drawer-icons" />Projects</NavLink></li>
            <li><NavLink to="/contact" activeStyle={{color: 'white'}}><ContactMailRounded className="menu-drawer-icons" />Contact</NavLink></li>
        </ul>
    </nav>
    );
};

export default MenuDrawer;