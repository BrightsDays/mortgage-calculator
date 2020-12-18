import React, { useState } from 'react';
import './results.sass';

const Results = () => {

  return (
    <div className="mortgage-results">
      <div className="mortgage-results__item">
          <p>Тело кредита</p>
          <b>0 ₽</b>
      </div>
      <div className="mortgage-results__item">
          <p>Ежемесяный платеж</p>
          <b>0 ₽</b>
      </div>
      <div className="mortgage-results__item">
          <p>Необходимый доход</p>
          <b>0 ₽</b>
      </div>
      <div className="mortgage-results__item">
          <p>Переплата</p>
          <b>0 ₽</b>
      </div>
    </div>
  );
}

export default Results;