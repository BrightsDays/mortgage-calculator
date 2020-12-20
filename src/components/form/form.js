import React, { useState, useEffect } from 'react';
import './form.sass';
import Validate from './validate';
import Results from './results';
import Calc from './calc';

const Form = () => {
  const savedPrice = localStorage.getItem('price');
  const savedPart = localStorage.getItem('part');
  const savedTime = localStorage.getItem('time');
  const savedPercent = localStorage.getItem('percent');

  const [price, setPrice] = useState(savedPrice || '0');
  const [part, setPart] = useState(savedPart || '0');
  const [time, setTime] = useState(savedTime || '0');
  const [percent, setPercent] = useState(savedPercent || '0');

  const [data, setData] = useState({
    loanBody: 0,
    monthlyPayment: 0,
    requiredIncome: 0,
    overpayment: 0,
  });
  const [disabled, setDisabled] = useState(false);
  const [factor, setFactor] = useState(false);
  const [lockClass, setLockClass] = useState('mortgage-form__lock mortgage-form__lock_opened');

  useEffect(() => setData(Calc(price, part, time, percent)), [price, part, time, percent]);
  useEffect(() => {
    const numPrice = +(price.replace(/\s/g, ""));
    if (factor) setPart(Math.round(+numPrice * factor / 100)
      .toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
  }, [price, factor]);

  const anchor = (value) => {
    setFactor(value);
    setDisabled(true);
    setLockClass('mortgage-form__lock mortgage-form__lock_locked');
  };

  const SaveButton = () => {
    return (
      <button onClick={e => {
        e.preventDefault();
        localStorage.setItem('price', price);
        localStorage.setItem('part', part);
        localStorage.setItem('time', time);
        localStorage.setItem('percent', percent);
      }}>Сохранить</button>
    );
  };

  const ClearButton = () => {
    return(
      <button onClick={e => {
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
        setDisabled(false);
        setFactor(false);
        document.querySelectorAll('input').forEach(item => item.value = '');
        document.querySelectorAll('input[name="anchor"]').forEach(item => item.checked = false);
      }}>Очистить</button>
    );
  };

  const Lock = () => {
    return(
      <div className={lockClass} onClick={e => {
        if (disabled) {
          setDisabled(false);
          setFactor(false);
          setLockClass('mortgage-form__lock mortgage-form__lock_opened');
          document.querySelectorAll('input[name="anchor"]').forEach(item => item.checked = false);
        }
      }}></div>
    );
  };

  return (
    <div>
      <form className="mortgage-form">
        <div className="mortgage-form__input mortgage-form__input_rub">
          <label>Стоимость недвижимости</label>
          <input onInput={e => {
                            Validate(e.target, 10000000000);
                            setPrice(e.target.value);}}
                 placeholder="До 10 000 000 000" 
                 value={price}></input>
        </div>
        <div className="mortgage-form__input mortgage-form__input_part mortgage-form__input_rub">
          <label>Первоначальный взнос</label>
          <Lock />
          <input onInput={e => {
                            Validate(e.target, 5000000000);
                            setPart(e.target.value);
                            }} 
                 placeholder="До 5 000 000 000"
                 value={part}
                 disabled={disabled}></input>
        </div>
        <div className="mortgage-form__anchors">
          <input className="mortgage-form__anchor mortgage-form__anchor_10" 
                 type="radio" 
                 name="anchor" 
                 value="10" 
                 onChange={e => anchor(e.target.value)}/>
          <input className="mortgage-form__anchor mortgage-form__anchor_15" 
                 type="radio" 
                 name="anchor" 
                 value="15" 
                 onChange={e => anchor(e.target.value)}/>
          <input className="mortgage-form__anchor mortgage-form__anchor_20" 
                 type="radio" 
                 name="anchor" 
                 value="20" 
                 onChange={e => anchor(e.target.value)}/>
          <input className="mortgage-form__anchor mortgage-form__anchor_25" 
                 type="radio" 
                 name="anchor" 
                 value="25" 
                 onChange={e => anchor(e.target.value)}/>
          <input className="mortgage-form__anchor mortgage-form__anchor_30" 
                 type="radio" 
                 name="anchor" 
                 value="30" 
                 onChange={e => anchor(e.target.value)}/>
        </div>
        <div className="mortgage-form__input mortgage-form__input_year">
          <label>Срок кредита</label>
          <input onInput={e => {
                            Validate(e.target, 30);
                            setTime(e.target.value);}}
                 placeholder="До 30"
                 value={time}></input>
        </div>
        <div className="mortgage-form__input mortgage-form__input_perc">
          <label>Процентная ставка</label>
          <input onInput={e => {
                            Validate(e.target, 30);
                            setPercent(e.target.value);}}
                 placeholder="До 30"
                 value={percent}></input>
        </div>
        <div className="mortgage-form__buttons">
          <SaveButton />
          <ClearButton />
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