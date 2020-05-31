import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dispatchData} from '../actions/storeActions';
import {YMaps, Map} from 'react-yandex-maps';
import Placemark from './Placemark/Placemark.jsx';
import {getAdditionalData} from '../utils/request-utils';

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placemarks: [],
      type: null,
    };
  };

  handlePlacemarkClick = (payload) => {
    this.props.dispatchData(payload);
  };

  componentDidUpdate(prevProps) {
    if (this.props.requestType !== prevProps.requestType) {
      this.fetchData(this.props.requestType);
    }
  };

  async fetchData(type) {
    try {
      const data = await getAdditionalData({type});
      this.setState({
        placemarks: data,
        type,
      });
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    const isShown = this.state.type === this.props.requestType;
    return (  
      <div className="map-wrapper">
        <YMaps>
          <Map
            defaultState={{center: [51.388969, 30.102989], zoom: 5}}
            width={"100%"}
            height={"100%"}
          >
            {isShown && this.state.placemarks.map(data => 
              Placemark({
                data,
                type: this.props.requestType,
                handlePlacemarkClick: this.handlePlacemarkClick,
              })
            )}
          </Map>
        </YMaps>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchData,
};

const mapStateToProps = ({requestType}) => ({requestType});

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);