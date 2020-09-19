// ALTERNATIVE NAVIGATION BAR
import React from 'react';
import ReactPlayer from 'react-player';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded, Inbox, Mail, MenuRounded } from '@material-ui/icons';

const drawerWidth = 300;
const drawerHeight = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'linear-gradient(0deg, rgba(195,34,186,1) 0%, rgba(51,21,128,1) 85%)',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: drawerHeight,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
//   navbar: {
//     opacity: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
  menuButton: {
    marginRight: 120,
    marginLeft: -12,
  },
  name: {
      marginLeft: 435,
  },
//   rightToolbar: {
//     marginLeft: "auto",
//     marginRight: -12
//   },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    height: '100vh',
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    height: drawerHeight,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed" //background: '#38383b', opacity: 0.5,
        style={{ color: 'white', backgroundColor: 'black', boxShadow: 'none'}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.navbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuRounded />
          </IconButton>
          <Typography 
            variant="h4" 
            className={classes.name}
            noWrap
          >
            Venus Ku
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ArrowBackIosRounded /> : <ArrowForwardIosRounded />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Hello!
        </Typography>
        <p>
          Welcome to Venus' website!
          {/* <ReactPlayer
            url="https://soundcloud.com/bangtan/thankyouarmy2020"
           /> */}
        </p>
        <ReactPlayer
            className='react-player'
            url='https://soundcloud.com/bangtan/thankyouarmy2020'
            width='80'
            height='200'
        />
      </main>
    </div>
  );
}
