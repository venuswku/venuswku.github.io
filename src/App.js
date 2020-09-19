import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import './App.css';
// import ReactPlayer from 'react-player';
// import NavBar from './NavBar/NavBar';
import NavigationBar from './NavigationBar/NavigationBar';
import Home from './Menu/Home';
import About from './Menu/About';
import Projects from './Menu/Projects';
import Contact from './Menu/Contact';

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/about" component={withRouter(About)} />
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
