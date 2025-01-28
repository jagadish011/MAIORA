import React from 'react';
import './CardSlider.css';

const CardSlider = ({ value, setValue }) => {
  const formatNumberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="slider-container">
      <div className="slider-title">Loan Amount</div>
      <div className="slider-value">Rp {formatNumberWithCommas(value)}</div>
      <input
        type="range"
        min="0"
        max="10000"
        value={value}
        className="slider"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div className="slider-labels">
        <span>0</span>
        <span>10,000</span>
      </div>
    </div>
  );
};

export default CardSlider;
