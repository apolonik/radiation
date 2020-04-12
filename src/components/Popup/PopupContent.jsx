import React, {Component} from 'react';
import AdditionalInfo from './AdditionalInfo';
import PieChart from './PieChart';

export default class PopupContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      id: props.id,
      type: props.type,
    }
  }

  render() {
    const {id, type} = this.state;
    if (id) {
      return (
        <AdditionalInfo id={id} type={type} />
      );
    } else {
      return (<PieChart type={type} />);
    }
  }
}