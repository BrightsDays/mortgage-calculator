import React, {useState, useEffect} from 'react';
import './form.sass';
import calc from '../../helpers/calc';
import Input from "../input";
import Anchors from "../anchors";
import Button from "../button/button";
import Results from '../results';

const Form = () => {
    const savedPrice = localStorage.getItem('price');
    const savedPart = localStorage.getItem('part');
    const savedTime = localStorage.getItem('time');
    const savedPercent = localStorage.getItem('percent');

    const [price, setPrice] = useState(savedPrice || '');
    const [part, setPart] = useState(savedPart || '');
    const [time, setTime] = useState(savedTime || '');
    const [percent, setPercent] = useState(savedPercent || '');

    const [data, setData] = useState({
        loanBody: 0,
        monthlyPayment: 0,
        requiredIncome: 0,
        overpayment: 0,
    });
    const [factor, setFactor] = useState(false);

    useEffect(() => setData(calc(price, part, time, percent)), [price, part, time, percent]);

    useEffect(() => {
        const numPrice = +(price.replace(/\s/g, ""));
        if (factor) setPart(Math.round(+numPrice * factor / 100)
            .toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    }, [price, factor]);

    const save = () => {
        localStorage.setItem('price', price);
        localStorage.setItem('part', part);
        localStorage.setItem('time', time);
        localStorage.setItem('percent', percent);
    };
    const clear = () => {
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
        setFactor(false);

        localStorage.clear();
    };

    return (
        <div>
            <form className="mortgage-form">
                <Input label="Стоимость недвижимости"
                       classList="mortgage-input--rub"
                       placeholder="До 10 000 000 000"
                       value={price}
                       validateNum="10000000000"
                       action={val => setPrice(val)}/>
                <Input label={"Первоначальный взнос"}
                       classList="mortgage-input--part mortgage-input--rub"
                       placeholder="До 5 000 000 000"
                       value={part}
                       validateNum="5000000000"
                       action={val => setPart(val)}/>
                <Anchors onClick={val => setFactor(val)}/>
                <Input label="Срок кредита"
                       classList="mortgage-input--year"
                       placeholder="До 30"
                       value={time}
                       validateNum="30"
                       action={val => setTime(val)}/>
                <Input label="Процентная ставка"
                       classList="mortgage-input--perc"
                       placeholder="До 30"
                       value={percent}
                       validateNum="30"
                       action={val => setPercent(val)}/>
                <div className="mortgage-form__buttons">
                    <Button name="Сохранить" action={save}/>
                    <Button name="Очистить" action={clear}/>
                </div>
            </form>
            <Results loanBody={data.loanBody}
                     monthlyPayment={data.monthlyPayment}
                     requiredIncome={data.requiredIncome}
                     overpayment={data.overpayment}/>
        </div>
    );
}

export default Form;