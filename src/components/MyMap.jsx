import React, {Component} from 'react';
import {connect} from 'react-redux';
import {YMaps, Map} from 'react-yandex-maps';
import generatePlacemark from './Placemark.jsx';

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placemarks: [],
      cachedPlacemarks: [],
      currentYear: null,
    }
  }

  componentDidMount() {
    this.initPlacemarks();
  }

  componentDidUpdate() {
    if (this.state.currentYear !== this.props.currentYear) {
      const filteredPlacemarks = this.state.cachedPlacemarks
        .filter(placemark => {
          if (placemark.date) {
            return +placemark.date.slice(0, 4) <= this.props.currentYear;
          }
          return true;
        });
      this.setState({
        currentYear: this.props.currentYear,
        placemarks: filteredPlacemarks
      });
    }
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
                .map(({latitude, longitude, title, preview, id, date}) => ({
                  coords: [latitude, longitude],
                  title,
                  preview,
                  id,
                  type: key,
                  display: true,
                  date,
                }));
              }).flat();
        this.setState({
          cachedPlacemarks: modifiedData,
          placemarks: modifiedData,
          currentYear: this.props.currentYear
        });
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

const mapStateToProps = ({currentYear}) => ({currentYear});

export default connect(mapStateToProps)(MyMap);