import React from 'react';
import {Placemark} from 'react-yandex-maps';
import uniqid from 'uniqid';
import {COLORS} from '../../constants/constants';
import {parser} from '../../utils/parse-string';

const NfPlacemark = ({
  props: {
    lat,
    lon,
    country,
    data,
    handlePlacemarkClick,
  }
}) => {
  const handleClick = () => {
    handlePlacemarkClick({title: country, type: 'nf'});
  };
  const colorsArr = COLORS.slice();
  const generateHintContent = () => {
    const str = parser(data.reduce(
      (str, item) => {
        return str +=`<p>${item.type} - ${item.accumulated} м<sup>3</sup></p>`
      }, ''));    
    return `<h3>${country}</h3> ${str}`;
  }
  const fuel = data.map((item) => ({weight: item.accumulated, color: colorsArr.pop()})).filter(item => item.weight);
  if (!fuel.length) {
    return null;
  };
  const props = {
    geometry: [lat, lon],
    properties: {
      hintContent: generateHintContent(),
      data: fuel,
    },
    options: {
      iconLayout: 'default#pieChart',
      iconPieChartRadius: 50,
      iconPieChartCoreRadius: 25,
    },
    modules: ['geoObject.addon.hint', 'layout.PieChart'],
  };

  return <Placemark {...props} key={uniqid()} onClick={handleClick}/>;
};

export default NfPlacemark;