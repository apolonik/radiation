import React from 'react';
import {Placemark} from 'react-yandex-maps';
import uniqid from 'uniqid';
import {NPP_ICONS} from '../../constants/constants';

const NppPlacemark = ({
  props: {
    lat,
    lon,
    title,
    state,
    handlePlacemarkClick,
  }
}) => {
  const handleClick = () => {
    handlePlacemarkClick({title, type: 'npp'});
  };
  const props = {
    geometry: [lat, lon],
    properties: {
      hintContent: title,
    },
    options: {
      iconLayout: 'default#image',
      iconImageHref: NPP_ICONS[state],
      iconImageSize: [45, 45],
      iconImageOffset: [-5, -38],
    },
    modules: ['geoObject.addon.hint'],
  };

  return <Placemark {...props} key={uniqid()} onClick={handleClick}/>;
};

export default NppPlacemark;