import React, {useState} from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from './Navigation/ScrollToTop/ScrollToTop';
import NavigationBar from './Navigation/NavigationBar/NavigationBar';
import MenuDrawer from './Navigation/MenuDrawer/MenuDrawer';
import Backdrop from './Navigation/Backdrop/Backdrop';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

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
  
  return (
    <div>
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}
