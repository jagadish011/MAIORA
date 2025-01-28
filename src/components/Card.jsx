import React from 'react';
import { CiFilter } from "react-icons/ci";
import './Card.css';

const Card = ({ amount, model, year }) => {
    return (
        <div className="card-container">
            <div className="card-title">Maximum Funding</div>
            <div className="card-amount">{amount}</div>
            <hr className='card-line' />
            <div className='card-below'>
                <div>
                    <div className="card-model">{model}</div>
                </div>
                <div>
                    <div> <CiFilter /></div>
                </div>
            </div>
            <div className="card-year">{year}</div>
        </div>
    );
};

export default Card;
