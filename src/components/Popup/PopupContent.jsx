import React from 'react';
import NppContent from './NppContent';
import NfaContent from './NfaContent';

const PopupContent = ({data, type}) => {
  switch(type) {
    case ('npp'):
      return (<NppContent data={data}/>);
    case ('nf'):
      return (<NfaContent data={data} />);
    default:
      return null;
  }
}

export default PopupContent;