import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

class WorldMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lat: 47.6062,
        lon: 122.3321
      };
    }
    render() {
      const Map = new ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoiZ2FycmV0dG1vb3JlIiwiYSI6ImNqdHQ0dWMyZzE3bDMzemxsNDJkM3hrdnoifQ.1v2jNBqVj1p6jhAKJkHY0A',
        center: [this.state.lon, this.state.lat]
      });
      return (
        <>
            <p>Ominous tagline here</p>
          <h4>Currently 3,467,856 Humans Alive...</h4>
          <Map
            height='200px'
            style={`mapbox://styles/garrettmoore/cjtt6bbyl06i81fnrf8jrb24u`}
            zoom={[13.5]}
            center={[this.state.lon, this.state.lat]}
            containerStyle={{ height: '40em' }}>
            <Marker
              coordinates={[this.state.lon, this.state.lat]}
              anchor='bottom'>
              <img
                alt='marker'
                src={
                  'https://www.shareicon.net/download/2015/12/05/682942_map.svg'
                }
                width='42px'
                height='42px'
              />
            </Marker>
          </Map>
        </>
      );
    }
  }
  
  export default WorldMap;
  