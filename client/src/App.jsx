import React, { Component } from 'react';
import WorldMap from './Components/WorldMap';
import News from './Components/News';
import NewsDetail from './Components/NewsDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <News />
        <NewsDetail />
        <WorldMap />
        <News />
      </div>
    );
  }
}

export default App;
