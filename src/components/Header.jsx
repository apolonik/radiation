import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Карта техногенных катастроф с 1947 по {this.props.currentYear} год</h1>
      </div>
    );
  }
}

const mapStateToProps = ({currentYear}) => ({
  currentYear,
});

export default connect(mapStateToProps)(Header);