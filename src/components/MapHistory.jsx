import React from 'react';
import {NPP_ICONS} from '../constants/constants';

const MapHistory = () => {
  const defaultText = 'Атомные Электростанции';
  return (
    <>
      <div className='map-history'>
        <div>
          <div className='map-history-wrap'>
            <img className='map-history-wrap-img' src={NPP_ICONS.under_construction} alt=''></img>
            Строящиеся {defaultText}
          </div>
          <div className='map-history-wrap'>
            <img className='map-history-wrap-img' src={NPP_ICONS.not_started} alt=''></img>
            Не запущеные {defaultText}
          </div>
          <div className='map-history-wrap'>
            <img className='map-history-wrap-img' src={NPP_ICONS.operational} alt=''></img>
            Действующие {defaultText}
          </div>
          <div className='map-history-wrap'>
            <img className='map-history-wrap-img' src={NPP_ICONS.not_work} alt=''></img>
            Не работающие {defaultText}
          </div>
          <div className='map-history-wrap'>
          <img className='map-history-wrap-img' src={NPP_ICONS.closed} alt=''></img>
          Закрытые {defaultText}
        </div>
        </div>
        <div className="map-history-circle">
          <div className="map-history-circle__circle">42</div>
          <div className="map-history-circle__text">
            <div><div className="map-history-red"></div>Текущие накопления РАО</div>
            <div><div className="map-history-yellow"></div>Прогнозируемые накопления РАО</div>
            <div>42 - Оъем текущих накоплений РАО в м<sup>3</sup></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapHistory;