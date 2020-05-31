import React from 'react';
import uniqid from 'uniqid';
import NppPlacemark from './NppPlacemark';
import NfPlacemark from './NfPlacemark';

const Placemark = ({
  data,
  type,
  handlePlacemarkClick,
}) => {
  switch(type) {
    case ('npp'):
      return <NppPlacemark props={{...data, handlePlacemarkClick}} key={uniqid()}/>;
    case ('nf'):
      return <NfPlacemark props={{...data, handlePlacemarkClick}} key={uniqid()}/>;
    default:
      return null;
  };
};

export default Placemark;