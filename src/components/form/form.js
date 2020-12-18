import React, { useState } from 'react';
import './form.sass';

const Form = () => {

  return (
    <div className="mortgage-form">
      <form>
        <div className="mortgage-form__input">
          <label>Стоимость недвижимости</label>
          <input></input>
        </div>
        <div className="mortgage-form__input">
          <label>Первоначальный взнос</label>
          <input></input>
        </div>
        <div className="mortgage-form__anchors">
          <button value="10">10%</button>
          <button value="15">15%</button>
          <button value="20">20%</button>
          <button value="25">25%</button>
          <button value="30">30%</button>
        </div>
        <div className="mortgage-form__input">
          <label>Срок кредита</label>
          <input></input>
        </div>
        <div className="mortgage-form__input">
          <label>Процентная ставка</label>
          <input></input>
        </div>
        <div className="mortgage-form__buttons">
          <button>Сохранить</button>
          <button>Очистить</button>
        </div>
      </form>
    </div>
  );
}

export default Form;