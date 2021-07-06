import React from 'react';
import "./results.sass";

const Results = ({ loanBody, monthlyPayment, requiredIncome, overpayment }) => {
  
  return (
    <div className="mortgage-results">
      <div className="mortgage-results__item">
          <p>Тело кредита</p>
          <b>{loanBody || '0'} ₽</b>
      </div>
      <div className="mortgage-results__item">
          <p>Ежемесяный платеж</p>
          <b>{monthlyPayment || '0'} ₽</b>
      </div>
      <div className="mortgage-results__item">
          <p>Необходимый доход</p>
          <b>{requiredIncome || '0'} ₽</b>
      </div>
      <div className="mortgage-results__item">
          <p>Переплата</p>
          <b>{overpayment || '0'} ₽</b>
      </div>
    </div>
  );
}

export default Results;