import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { Container } from 'react-bootstrap';

class StarbucksMap extends Component {
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
        <Container>
          <h4>Starbucks Map Page</h4>
          <h4>User will be redirected here after submitting zip</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro, saepe quia dolorum in accusamus necessitatibus, pariatur, totam fugiat aspernatur recusandae laboriosam quasi inventore soluta veniam quos. Animi, corrupti dolor.</p>
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
          </Container>
        </>
      );
    }
  }
  
  export default StarbucksMap;
  