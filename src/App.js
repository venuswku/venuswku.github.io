import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactPlayer from 'react-player';
import ScrollToTop from './Navigation/ScrollToTop';
import NavigationBar from './Navigation/NavigationBar';
import MenuDrawer from './Navigation/MenuDrawer';
import Backdrop from './Navigation/Backdrop';
import Canvas from './Canvas/Canvas';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

export default function App() {
  let backdrop;
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const showDrawer = () => setDrawerOpen(!drawerOpen);

  // close drawer
  const closeDrawer = () => setDrawerOpen(false);

  // close drawer when backdrop is clicked
  if (drawerOpen) {
    backdrop = <Backdrop click={closeDrawer} />
  }

  // water wave
  const draw = (ctx, frameCount) => {
    const { width, height } = ctx.canvas.getBoundingClientRect()
    if (ctx.canvas.width !== width || ctx.canvas.height !== height) {
      ctx.canvas.width = width;
      ctx.canvas.height = height;
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI);
    ctx.fill();
  }
  
  return (
    <div style={{height: '100%'}}>
      <Router>
        <ScrollToTop />
        <NavigationBar drawerButtonClickHandler={showDrawer} />
        <MenuDrawer show={drawerOpen} closeDrawerClickHandler={closeDrawer} />
        {backdrop}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />          
        </Switch>
      </Router>
      <Canvas draw={draw} />
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
