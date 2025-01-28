import React from 'react';
import './CardSliderMonth.css';

const CardSliderMonth = ({ value, setValue }) => {
  return (
    <div className="slider-container1">
      <div className="slider-title1">Loan Period</div>
      <div className="slider-value1">{value} {value === 1 ? 'Month' : 'Months'}</div>
      <input
        type="range"
        min="0"
        max="12"
        value={value}
        className="slider1"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div className="slider-labels1">
        <span>0 months</span>
        <span>12 months</span>
      </div>
    </div>
  );
};

export default CardSliderMonth;
