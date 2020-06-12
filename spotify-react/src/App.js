import React from 'react';
//BOOTSTRAP
import './App.css';
import SideBar from "./components/SideBar"
import SideNav from "./components/SideNav"
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SideBar} />
        <Route path="/" exact component={SideNav} />
        <Home />
      </Router>
    </div>
  );
}
//ROUTE SIDENAV-BAR IN EVERY PAGES

export default App;
