import React from 'react';
import uniqid from 'uniqid';

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner">
        <div className="spinner-item" key={uniqid()}></div>
        <div className="spinner-item" key={uniqid()}></div>
        <div className="spinner-item" key={uniqid()}></div>
        <div className="spinner-item" key={uniqid()}></div>
      </div>
    </div>
  )
}

export default Spinner;