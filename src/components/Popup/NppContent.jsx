import React from 'react';
import uniqid from 'uniqid';

const NppContent = ({data}) => {
  return (
    <>
      <h2>{data[0].title}</h2>
      {data.map((reactor, index) => {
        const startDate = reactor.start_work_date ? `Энергетический пуск: ${reactor.start_work_date} год` : '';
        const closedDate = reactor.closed_date ? `Закрытие: ${reactor.closed_date} год` : '';
      
        return (
          <div key={uniqid()}>
            {data.length > 1 && <h3>Реактор № {index + 1}</h3>}
            <p>Начало строительства: {reactor.start_build_date} год</p>
            <p>{startDate}</p>
            <p>{closedDate}</p>
          </div>
        );
      })}
    
      <a target="_blank" href={data[0].link}>Больше информации</a>
    </>
  );
}

export default NppContent;