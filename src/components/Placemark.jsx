import React from 'react';
import {Placemark} from 'react-yandex-maps';
import uniqid from 'uniqid';
import generateBalloonTemplate from '../utils/generate-balloon-template';


const icons = {
  polygon: 'islands#blackCircleDotIcon',
  catastrophe: 'islands#redCircleDotIcon',
};

const generatePlacemark = ({latitude, longitude, title, preview, id, type}) => {
  const props = {
    geometry: [latitude, longitude],
    properties: {
      hintContent: title,
      balloonContent: generateBalloonTemplate(preview, id, type),
      balloonContentHeader: title,
    },
    options: {
      preset: icons[type],
    },

    modules: ['geoObject.addon.hint', 'geoObject.addon.balloon'],
  };

  return <Placemark {...props} key={uniqid()} />;
};

export default generatePlacemark;