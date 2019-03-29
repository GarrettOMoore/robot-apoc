import React, { Component } from 'react'
// import { Route } from 'react-router-dom';
import WorldMap from './Components/WorldMap'
import SignUp from './Components/SignUp'
import FindStarbucks from './Components/FindStarbucks'
import StarbucksMap from './Components/StarbucksMap'
import FindRobots from './Components/FindRobots'
import News from './Components/News'
import Toggle from './Components/Toggle'
import RobotMap from './Components/RobotMap'
// import StarbucksMap from './Components/StarbucksMap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="Title">STARBUNKER</h1>
        {/* <WorldMap /> */}
        <Toggle />
        <StarbucksMap component={FindStarbucks}/>
        {/* <RobotMap component={FindRobots}/> */}
        {/* <News /> */}
        {/* <SignUp /> */}
          <News />
        {/* <WorldMap /> */}
      </div>
    );
  }
}

export default App;
