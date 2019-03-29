import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import WorldMap from './WorldMap';
import RobotMap from './RobotMap';
import StarbucksMap from './StarbucksMap';

const Toggle = (props) => {

    return (
        <Router>
        <div className='button-box'>
        <Link to='/WorldMap'><button type='text'>World</button></Link>
        <Link to='/RobotMap'><button type='text'>Robot</button></Link>
        <Link to='/StarbucksMap'><button type='text'>Starbunker</button></Link>
        </div>
        <Route path='/WorldMap' component={WorldMap} />
        <Route path='/RobotMap' component={RobotMap} />
        <Route path='/StarbucksMap' component={StarbucksMap} />
        </Router>
    )
}

export default Toggle