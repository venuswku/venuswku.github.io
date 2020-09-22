import React from 'react';
import './MenuDrawer.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import CloseDrawerButton from './CloseDrawerButton';
import { HomeRounded, AccountCircleRounded, FolderRounded, ContactMailRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    pageIcons: {
        fontSize: '35px',
        margin: '0% 10% 0% 0%', /* top right bottom left */
    }
}));

const MenuDrawer = props => {
    const classes = useStyles();

    let drawerClasses = ['drawer'];
    if (props.show) {
        drawerClasses = ['drawer', 'open'];
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <CloseDrawerButton click={props.close} />
            <ul>    
                <li><NavLink exact to="/" activeStyle={{color: 'white'}} onClick={props.close}><HomeRounded className={classes.pageIcons} />Home</NavLink></li>
                <li><NavLink to="/about" activeStyle={{color: 'white'}} onClick={props.close}><AccountCircleRounded className={classes.pageIcons} />About</NavLink></li>
                <li><NavLink to="/projects" activeStyle={{color: 'white'}} onClick={props.close}><FolderRounded className={classes.pageIcons} />Projects</NavLink></li>
                <li><NavLink to="/contact" activeStyle={{color: 'white'}} onClick={props.close}><ContactMailRounded className={classes.pageIcons} />Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default MenuDrawer;