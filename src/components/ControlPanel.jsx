import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dispatchRequest} from '../actions/storeActions';
import MapHistory from '../components/MapHistory';
class ControlPanel extends Component {
  displayNpp = () => {
    this.props.dispatchRequest('npp');
  };

  displayFuelChart = () => {
    this.props.dispatchRequest('nf');
  };

  render() {
    return (
      <>
        <div className="control-panel">
          <MapHistory />
          <div className="control-panel-btn-wrapper">
            <button className="control-panel-btn" onClick={this.displayNpp}>Отобразить АЭС</button>
            <button className="control-panel-btn" onClick={this.displayFuelChart}>Отобразить накопления радиоактивных отходов</button>
          </div>
        </div>
      </>
    );
  };
}

const mapDispatchToProps = {
  dispatchRequest,
};

export default connect(null, mapDispatchToProps)(ControlPanel);