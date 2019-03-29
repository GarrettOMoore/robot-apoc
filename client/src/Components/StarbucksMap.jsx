import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { Container } from 'react-bootstrap';

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

        <Container>
          <h4>Starbucks Map Page</h4>
          <h4>User will be redirected here after submitting zip</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro, saepe quia dolorum in accusamus necessitatibus, pariatur, totam fugiat aspernatur recusandae laboriosam quasi inventore soluta veniam quos. Animi, corrupti dolor.</p>
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
          </Container>
        </>
      );
    }
  }
  
  export default StarbucksMap;
  