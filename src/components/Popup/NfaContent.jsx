import React from 'react';
import uniqid from 'uniqid';
import {AREA_STATE} from '../../constants/constants';
import {parser} from '../../utils/parse-string';

const NfaContent = ({data: {nfData, nfaData}}) => {
  const _nfData = nfData[0];
  return (
    <>
      <h1>{_nfData.country}</h1>
      {_nfData.data.map((item) => (
        <div className="nfa-content" key={uniqid()}>
          <p><strong>Тип отходов:</strong> {parser(item.type)}</p>
          {item.accumulated && <p><strong>Объёмы накопления:</strong> {item.accumulated} м<sup>3</sup></p>}
          {item.declined && <p><strong>Объемы накоплений не годные для переработки:</strong> {item.declined} м<sup>3</sup></p>}
          {item.resumption && <p><strong>Объемы накоплений для последующей переработки:</strong> {item.resumption} м<sup>3</sup></p>}
          {item.future_formation && <p><strong>Прогнозируемые объемы накоплений:</strong> {item.future_formation} м<sup>3</sup></p>}
        </div>
      ))}
      <h2>Перечень площадок для хранения отработанного ядерного топлива</h2>
      {nfaData.map((item) =>
        <>
          <h3>{item.title}</h3>
          <ul key={uniqid()}>
            <li key={uniqid()}>
              <p>Статус хранилища: {AREA_STATE[item.state]}</p>
            </li>
            <li key={uniqid()}>
              <p>Количество отработанных тепловыделающих сборок (шт.) - {
                item.bulk ? item.bulk : 'Нет данных'}
              </p>
              </li>
            <li key={uniqid()}>
              <p>Количество отработанного ядерного топлива - {
                item.bulk_m3 ? item.bulk_m3 : 'Нет данных'} {!!item.bulk_m3 && <>м<sup>3</sup></>}
              </p>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default NfaContent;