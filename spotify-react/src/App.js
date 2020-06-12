import React from 'react';
//BOOTSTRAP
import './App.css';
import SideBar from "./components/SideBar"
import SideNav from "./components/SideNav"
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Home />
      <SideBar />
      <SideNav />
    </div>
  );
}

export default App;
