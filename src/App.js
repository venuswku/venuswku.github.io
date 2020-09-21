import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import ReactPlayer from 'react-player';
import NavigationBar from './NavigationBar/NavigationBar';
import MenuDrawer from './NavigationBar/MenuDrawer';
import Backdrop from './NavigationBar/Backdrop';
import Home from './Menu/Home';
import About from './Menu/About';
import Projects from './Menu/Projects';
import Contact from './Menu/Contact';

export default function App() {
  let backdrop;
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const showDrawer = () => setDrawerOpen(!drawerOpen);
  const backdropClickHandler = () => setDrawerOpen(false);

  if (drawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }
  
  return (
    <div style={{height: '100%'}}>
      <Router>
        <NavigationBar drawerButtonClickHandler={showDrawer} />
        <MenuDrawer show={drawerOpen} />
        {backdrop}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />          
        </Switch>
      </Router>
      {/* <header className="App-header">
        <p>
          Welcome to Venus' website!
          <ReactPlayer
            url="https://soundcloud.com/bangtan/thankyouarmy2020"
          />
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my favorite website
        </a>
      </header> */}
    </div>
  );
}
