import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { AccountCircleRounded, ContactMailRounded, FolderRounded, HomeRounded, MenuRounded } from '@material-ui/icons';
import { NavLink } from "react-router-dom";

const navbarWidth = 300;
const navbarHeight = 65;
const useStyles = makeStyles((theme) => ({
    appbar: {
        height: navbarHeight,
    },
    menuButton: {
        color: 'white',
        fontSize: 30,
    },
    menuList: {
        background: 'rgba(0, 0, 0, 0.9)',
        width: navbarWidth,
        height: '100vh',
        // backgroundImage: 'url(${https://www.wallpaperup.com/uploads/wallpapers/2014/03/17/300346/cf2ec88c94ec9fffe9cebb7eca53bae5-700.jpg})',
    },
    name: {
        marginLeft: 530,
        textShadow: '1px 1px 5px #000000',
    },
    activeTab: {
        // for active menu tab's icon
        "& path": {
            fill: "white",
        },
        // for active menu tab's name
        "& span": {
            color: 'white',
        },
    },
    menuTab: {
        color: "rgba(255, 255, 255, 0.31)",
        textDecoration: "none",
        marginTop: 10,
        marginBottom: 10,
        // makes menu tab's name and icon appear white when cursor hovers over either of them
        "&:hover": {
            color: "white",
        },
        "&:hover $menuTabIcon": {
            color: "white",
        },
    },
    menuTabIcon: {
        color: "rgba(255, 255, 255, 0.31)",
        fontSize: 25,
    },
    menuTabName: {
        "& span": {
            fontSize: 25,
        },
    },
    space: {
        height: 120,
    },
  }));

export default function NavigationBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
    //   top: false,
      menu: false,
    //   bottom: false,
    //   right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  
    const menuList = (anchor) => (
      <div className={classes.menuList}
        // className={clsx(classes.menuList, {
        //   [classes.fullMenuList]: anchor === 'top' || anchor === 'bottom',
        // })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div className={classes.space}></div>
        <List>
            {/* {['Home', 'About Me', 'Projects', 'Contact Info'].map((menuTabName, menuTabIndex) => (
                <ListItem button 
                    key={menuTabName} 
                    className={classes.menuTab}
                    activeStyle={{color: 'white'}}
                >
                    <ListItemIcon className={classes.menuTabIcon}>
                        {menuTabIndex === 0 ? <HomeRounded />
                        : menuTabIndex === 1 ? <AccountCircleRounded />
                        : menuTabIndex === 2 ? <FolderRounded />
                        : <EmailRounded />
                        }
                    </ListItemIcon>
                    <ListItemText primary={menuTabName} />
                </ListItem>
            ))} */}
            <NavLink exact to='/' 
                className={classes.menuTab}
                activeClassName={classes.activeTab}
            >
                <ListItem button>
                    <ListItemIcon>
                        <HomeRounded className={classes.menuTabIcon} />
                    </ListItemIcon>
                    <ListItemText className={classes.menuTabName} primary="Home" />
                </ListItem>
            </NavLink>
            <NavLink to='/about'
                className={classes.menuTab}
                activeClassName={classes.activeTab}
            >
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleRounded className={classes.menuTabIcon} />
                    </ListItemIcon>
                    <ListItemText className={classes.menuTabName} primary="About Me" />
                </ListItem>
            </NavLink>
            <NavLink to='/projects'
                className={classes.menuTab}
                activeClassName={classes.activeTab}
            >
                <ListItem button>
                    <ListItemIcon>
                        <FolderRounded className={classes.menuTabIcon} />
                    </ListItemIcon>
                    <ListItemText className={classes.menuTabName} primary="Projects" />
                </ListItem>
            </NavLink>
            <NavLink to='/contact'
                className={classes.menuTab}
                activeClassName={classes.activeTab}
            >
                <ListItem button>
                    <ListItemIcon>
                        <ContactMailRounded className={classes.menuTabIcon} />
                    </ListItemIcon>
                    <ListItemText className={classes.menuTabName} primary="Contact Info" />
                </ListItem>
            </NavLink>
        </List>
      </div>
    );
  
    return (
      <div>
        <AppBar
            className={classes.appbar}
            position="fixed"
            style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', boxShadow: 'none'}}
        >
            <Toolbar>
                <IconButton 
                    color="inherit"
                    aria-label="Menu"
                    onClick={toggleDrawer('menu', true)}>
                    <MenuRounded className={classes.menuButton} />
                </IconButton>
                <Drawer anchor={'menu'} open={state['menu']} onClose={toggleDrawer('menu', false)}>
                    {menuList('menu')}
                </Drawer>
                <NavLink to='/' style={{color: 'white', textDecoration: 'none'}}>
                    <Typography 
                        className={classes.name}
                        variant="h4"
                    >
                        Venus Ku
                    </Typography>
                </NavLink>
            </Toolbar>
        </AppBar>
        {/* {['menu', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))} */}
      </div>
    );
}
