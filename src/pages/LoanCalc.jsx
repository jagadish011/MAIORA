import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import './LoanCss.css';
import Card from '../components/Card';
import CardSlider from '../components/CardSlider';
import CardSliderMonth from '../components/CardSliderMonth';

const LoanCalc = () => {
    const [loanAmount, setLoanAmount] = useState(5000);
    const [loanPeriod, setLoanPeriod] = useState(6);

    const handleApplyLoan = () => {
        const totalLoanAmount = loanAmount * loanPeriod;
        console.log(`Loan Amount: Rp ${loanAmount.toLocaleString('en-US')}`);
        console.log(`Loan Period: ${loanPeriod} ${loanPeriod === 1 ? 'Month' : 'Months'}`);
        console.log(`Total Loan Amount: Rp ${totalLoanAmount.toLocaleString('en-US')}`);
        alert(`Loan Amount: Rp ${loanAmount.toLocaleString('en-US')}\nLoan Period: ${loanPeriod} ${loanPeriod === 1 ? 'Month' : 'Months'}\nTotal Loan Amount: Rp ${totalLoanAmount.toLocaleString('en-US')}`);
    };

    return (
        <div className='Hero'>
            <div className='loanCalc'>
                <div><MdOutlineKeyboardArrowLeft className='arrow' /></div>
                <div><h1>Loan Calculator</h1></div>
                <div><BsThreeDotsVertical className='arrow' /></div>
            </div>

            {/* Cards */}
            <div className="card-container1">
                <Card
                    className="card"
                    title="Maximum Funding"
                    amount="Rp 17.484.500"
                    model="Honda ADV 150 CBS"
                    year="2022"
                />
            </div>

            {/* Loan Amount Slider */}
            <div className='card-loan'>
                <CardSlider value={loanAmount} setValue={setLoanAmount} />
            </div>

            {/* Loan Period Slider */}
            <div className='card-month'>
                <CardSliderMonth value={loanPeriod} setValue={setLoanPeriod} />
            </div>

            {/* Calculation */}
            <div className='calculation'>
                <div className='calculation-container'>
                    <p className='title'>Estimated Monthly Installment</p>
                    <p className='amount'>Rp 150.000</p>
                    <p className='note'>Installment fees may change according to the results of the location and physical condition of the vehicle.</p>
                    <button className='btn' onClick={handleApplyLoan}>Apply Loan</button>
                </div>
            </div>
        </div>
    );
};

export default LoanCalc;
