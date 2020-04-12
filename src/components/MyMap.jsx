import React, {Component} from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import generatePlacemark from './Placemark.jsx';

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placemarks: [],
    }
  }

  async componentDidMount() {
    await this.initPlacemarks();
  }

  async initPlacemarks() {
    try {
      const response = await fetch('/api/init');
      if (response.ok) {
        const json = await response.json();
        //TODO Should make it more clear and simplify
        const modifiedData = 
          Object.keys(json)
            .map((key) => {
              return json[key]
                .map(({latitude, longitude, title, preview, id}) => ({
                  coords: [latitude, longitude],
                  title,
                  preview,
                  id,
                  type: key,
                }));
              }).flat();
        
        this.setState({placemarks: [...modifiedData]});
      } else {
        throw new Error('Request was failed');
      }
    } catch (e) {
      console.warn(e);
    }
  }

  render() {
    return (  
      <div className="map-wrapper">
        <YMaps>
          <Map
            defaultState={{center: [51.388969, 30.102989], zoom: 5}}
            width={"100%"}
            height={"100%"}
          >
            {this.state.placemarks.map(item => generatePlacemark(item))}
          </Map>
        </YMaps>
      </div>
    );
  }
}
