import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import ReactPlayer from 'react-player';
import ScrollToTop from './Navigation/ScrollToTop';
import NavigationBar from './Navigation/NavigationBar';
import MenuDrawer from './Navigation/MenuDrawer';
import Backdrop from './Navigation/Backdrop';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

export default function App() {
  let backdrop;
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const showDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawerClickHandler = () => setDrawerOpen(false);

  if (drawerOpen) {
    backdrop = <Backdrop click={closeDrawerClickHandler} />
  }
  
  return (
    <div style={{height: '100%'}}>
      <Router>
        <ScrollToTop />
        <NavigationBar drawerButtonClickHandler={showDrawer} />
        <MenuDrawer show={drawerOpen} close={closeDrawerClickHandler} />
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
