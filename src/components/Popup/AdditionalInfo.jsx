import React, {Component} from 'react';
import Spinner from '../Spinner';
import {getAdditionalData} from '../../utils/request-utils';
import uniqid from 'uniqid';

export default class PopupContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      id: props.id,
      type: props.type,
    }
  }

  async componentDidMount() {
    try {
      const content = await getAdditionalData({id: this.state.id, type: this.state.type});
      setTimeout(() => this.setState({content}), 1000);
    } catch (e) {
      console.warn(e);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.content) {
      return true;
    } else {
      return false;
    }
  }

  createElement = (elem) => {
    switch(elem.type) {
      case 'p': {
        return (<p className="popup__content-text" key={uniqid()}>{elem.content}</p>);
      }
      case 'img': {
        return (
          <div className="popup__content-img" key={uniqid()}>
            <img alt="Oops - Not found" src={elem.content} />
          </div>
        );
      }
      case 'h2': {
        return (<h2 className="popup__content-header" key={uniqid()}>{elem.content}</h2>);
      }
      default: {
        return (<div key={uniqid()}>Ошибка</div>)
      }
    }
  }

  render() {
    const {content} = this.state;
    if (content) {
      return (
        <>
          <h2 className="popup__content-title">
            {content.title}
          </h2>
          <div className="popup__content-text">
            {content.preview}
          </div>
          <div>
            {content.description.map(item => this.createElement(item))}
          </div>
        </>
      );
    } else {
      return <Spinner />;
    }
  }
}