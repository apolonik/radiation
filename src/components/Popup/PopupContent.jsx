import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import PieChart from './PieChart';

const PopupContent = ({id, type}) => {
  if (id) {
    return (
      <AdditionalInfo id={id} type={type} />
    );
  } else {
     return (<PieChart type={type} />);
  }
}

export default PopupContent;