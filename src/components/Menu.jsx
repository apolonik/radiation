import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dispatchEvent} from '../actions/StoreActions';

class Menu extends Component {
  handleClick = () => {
    this.props.dispatchEvent('nuclear_tests');
  };

  render() {
    return (
      <div className="menu">
        <button className="menu-btn" onClick={this.handleClick}>Ядерные испытания</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchEvent,
};

export default connect(null, mapDispatchToProps)(Menu);