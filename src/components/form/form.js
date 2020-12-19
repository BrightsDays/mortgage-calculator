import React, { useState, useEffect } from 'react';
import './form.sass';
import Validate from './validate';
import Results from './results';
import Calc from './calc';

const Form = () => {
  const [price, setPrice] = useState('');
  const [part, setPart] = useState('');
  const [time, setTime] = useState('');
  const [percent, setPercent] = useState('');
  const [data, setData] = useState({
    loanBody: 0,
    monthlyPayment: 0,
    requiredIncome: 0,
    overpayment: 0,
  });
  //const [disabled, setDisabled] = useState(false);

  useEffect(() => setData(Calc(price, part, time, percent)), [price, part, time, percent]);

  const Clean = (e) => {
    e.preventDefault();

    setPrice('');
    setPart('');
    setTime('');
    setPercent('');
    setData({
      loanBody: 0,
      monthlyPayment: 0,
      requiredIncome: 0,
      overpayment: 0,
    });
    //setDisabled(false);
    document.querySelectorAll('input').forEach(item => item.value = '');
    document.querySelectorAll('input[name="anchor"]').forEach(item => item.checked = false);
  };

  const anchor = (value) => {
    const nPrice = price.replace(/\s/g, "");
    //setDisabled(true);
    setPart(Math.round(+nPrice * value / 100).toString());
    document.querySelector('.val').value = Math.round(+nPrice * value / 100)
                                               .toString()
                                               .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div>
      <form className="mortgage-form">
        <div className="mortgage-form__input">
          <label>Стоимость недвижимости</label>
          <input onInput={e => {
                            Validate(e.target, 10000000000);
                            setPrice(e.target.value);}} 
                 placeholder="До 10 000 000 000"></input>
        </div>
        <div className="mortgage-form__input">
          <label>Первоначальный взнос</label>
          <input className="val" onInput={e => {
                            Validate(e.target, 3300000000);
                            setPart(e.target.value);}} 
                 placeholder="До 3 300 000 000"
                 /*disabled={disabled}*/></input>
        </div>
        <div className="mortgage-form__anchors">
          <input type="radio" name="anchor" value="10" onChange={e => anchor(e.target.value)}/>
          <input type="radio" name="anchor" value="15" onChange={e => anchor(e.target.value)}/>
          <input type="radio" name="anchor" value="20" onChange={e => anchor(e.target.value)}/>
          <input type="radio" name="anchor" value="25" onChange={e => anchor(e.target.value)}/>
          <input type="radio" name="anchor" value="30" onChange={e => anchor(e.target.value)}/>
        </div>
        <div className="mortgage-form__input">
          <label>Срок кредита</label>
          <input onInput={e => {
                            Validate(e.target, 30);
                            setTime(e.target.value);}} 
                 placeholder="До 30"></input>
        </div>
        <div className="mortgage-form__input">
          <label>Процентная ставка</label>
          <input onInput={e => {
                            Validate(e.target, 30);
                            setPercent(e.target.value);}} 
                 placeholder="До 30"></input>
        </div>
        <div className="mortgage-form__buttons">
          <button onClick={(e) => {e.preventDefault();console.log(data)}}>Сохранить</button>
          <button onClick={e => Clean(e)}>Очистить</button>
        </div>
      </form>
      <Results loanBody={data.loanBody}
               monthlyPayment={data.monthlyPayment}
               requiredIncome={data.requiredIncome}
               overpayment={data.overpayment} />
    </div>
  );
}

export default Form;