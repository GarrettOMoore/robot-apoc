import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

class StarbucksMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        markers: {
            lon: 40.990555, 
            lat: 29.023407,
        }
      };
    }
    render() {
      const Map = new ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoiZ2FycmV0dG1vb3JlIiwiYSI6ImNqdHQ0dWMyZzE3bDMzemxsNDJkM3hrdnoifQ.1v2jNBqVj1p6jhAKJkHY0A',
        center: [this.state.markers.lon, this.state.markers.lat]
      });
      return (
        <>
          <h4>Starbunker Locator:</h4>
          <h4>Find salvation amongst your </h4>
          <p>Find a Starbunker near you!</p>
          <Map
            height='200px'
            style={`mapbox://styles/garrettmoore/cjtt6bbyl06i81fnrf8jrb24u`}
            zoom={[1.5]}
            center={[this.state.markers.lon, this.state.markers.lat]}
            containerStyle={{ height: '40em' }}>
            <Marker
              coordinates={[this.state.markers.lon, this.state.markers.lat]}
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
  
  export default StarbucksMap;
  