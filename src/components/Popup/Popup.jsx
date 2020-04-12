import React, {Component} from 'react';
import {connect} from 'react-redux';
import PopupContent from './PopupContent';
import {dispatchEvent} from '../../actions/StoreActions';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      type: null,
    };
  }

  componentDidMount() {
    window.getpolygons = (id) => {
      this.setState({id, type: 'polygons'});
    }
    window.getcatastrophes = (id) => {
      this.setState({id, type: 'catastrophes'});
    }
  }

  closePopup = () => {
    this.props.dispatchEvent(null);
    this.setState({
      id: null,
      type: null,
    });
  }

  render() {
    const {id} = this.state;
    const type = this.state.type || this.props.type;
    if (id || type) {
      return (
        <div className="popup">
          <div className="popup__content">
            <button 
              className="popup__content-close-btn"
              onClick={this.closePopup}>
                ЗАКРЫТЬ
            </button>
            <PopupContent id={id} type={type} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({type: state.event});

const mapDispatchToProps = {
  dispatchEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
