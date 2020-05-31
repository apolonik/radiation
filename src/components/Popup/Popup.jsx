import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dispatchData} from '../../actions/storeActions';
import {getAdditionalData} from '../../utils/request-utils';
import PopupContent from './PopupContent';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  };

  closePopup = () => {
    this.setState({
      data: null,
    });
    this.props.dispatchData(null);
  };

  async componentDidUpdate(prevProps, prevState, prevContext) {
    if (!this.state.data && this.props.title) {
      switch (this.props.type) {
        case ('npp'):
          const data = await getAdditionalData({
            title: this.props.title,
            type: 'reactors',
          });
          const [{link}] = await getAdditionalData({
            title: this.props.title,   
            type: 'link',
          });
          data[0].link = link;
          this.setState({data});
          break;
        case ('nf'):
          const nfData = await getAdditionalData({
            type: 'nf',
          });
          const nfaData = await getAdditionalData({
            country: this.props.title,
            type: 'nfa',
          });
          const filteredNfData = nfData.filter((item) => item.country === this.props.title);
          this.setState({
            data: {
              nfaData,
              nfData: filteredNfData,
            }
          });
          break;
        default:
          return null;
      }
    };
  };

  render() {
    return (
      <>
        {this.state.data && 
          <div className="popup">
            <div className="popup__content">
              <button 
                className="popup__content-close-btn"
                onClick={this.closePopup}>
                  ЗАКРЫТЬ
              </button>
              <PopupContent data={this.state.data} type={this.props.type}/>
            </div>
        </div>}
      </>
    );
  };
}

const mapStateToProps = ({data}) => ({title: data?.title, type: data?.type});

const mapDispatchToProps = {
  dispatchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
