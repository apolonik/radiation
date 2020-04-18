import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dispatchEvent, updateCurrentYear} from '../actions/StoreActions';

class Menu extends Component {
  handleClick = () => {
    this.props.dispatchEvent('nuclear_tests');
  };

  handleChange = ({currentTarget}) => {
    this.props.updateCurrentYear(+currentTarget.value);
  };

  render() {
    return (
      <div className="menu">
        <div className="menu-input-wrapper">
          <span className="menu-input-date">1947</span>
          <input 
            type="range" 
            className="menu-input-range" 
            min="1947" 
            max="2020" 
            step="1" 
            value={this.props.currentYear}
            onChange={this.handleChange}>
          </input>
          <span className="menu-input-date">2020</span>
        </div>
        <button className="menu-btn" onClick={this.handleClick}>Ядерные испытания</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchEvent,
  updateCurrentYear,
};

const mapStateToProps = ({currentYear}) => ({currentYear});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);