import React from 'react';
import {Placemark} from 'react-yandex-maps';
import uniqid from 'uniqid';
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

  const generateHintContent = () => {
    const str = parser(data.reduce(
      (str, item) => {
        return str +=`<p>${item.type} - ${item.accumulated} м<sup>3</sup></p>`
      }, ''));    
    return `<h3>${country}</h3> ${str}`;
  }
  const accumulatedFuel = data.reduce((s, item) => {
    s += item.accumulated || 0;
    s += item.declined || 0;
    s += item.resumption || 0;
    return s;
  }, 0);
  const futureFormation = data.reduce((s, item) => {
    s += item.future_formation || 0;
    s += item.year_formation || 0;
    return s;
  }, 0);
  const props = {
    geometry: [lat, lon],
    properties: {
      hintContent: generateHintContent(),
      data: [
        {weight: accumulatedFuel, color: '#FF0000'},
        {weight: futureFormation, color: '#FBFF00'}],
    },
    options: {
      iconLayout: 'default#pieChart',
      iconPieChartRadius: 35,
      iconPieChartCoreRadius: 30,
    },
    modules: ['geoObject.addon.hint', 'layout.PieChart'],
  };

  return <Placemark {...props} key={uniqid()} onClick={handleClick}/>;
};

export default NfPlacemark;