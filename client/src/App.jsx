import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import WorldMap from './Components/WorldMap'
import SignUp from './Components/SignUp'
import FindStarbucks from './Components/FindStarbucks'
import StarbucksMap from './Components/StarbucksMap'
import FindRobots from './Components/FindRobots'
import News from './Components/News'
import Toggle from './Components/Toggle'
import RobotMap from './Components/RobotMap'
import {Counter} from './Components/Counter';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
      <h1 className="Title">STARBUNKER</h1>
      <Counter />
      <Toggle />
        {/* <WorldMap /> */}
        {/* <StarbucksMap /> */}

{/* <FindStarbucks /> */}
{/* <StarbucksMap component={FindStarbucks}/> */}
{/* <RobotMap component={FindRobots}/> */}
<News />
{/* <NewsDetail /> */}
        <SignUp />
        <News />
</div>

    );
  }
}

export default App;
