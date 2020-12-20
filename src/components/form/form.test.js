import Calc from './calc';

it('can calculate right results', () => {
    expect(Calc('1000000', '100000', '1', '10')).toEqual({
        loanBody: '900 000',
        monthlyPayment: '79 124',
        overpayment: '49 488',
        requiredIncome: '131 873',
    });
    expect(Calc('25600000', '5120000', '3', '30')).toEqual({
        loanBody: '20 480 000',
        monthlyPayment: '869 408',
        overpayment: '10 818 688',
        requiredIncome: '1 449 013',
    });
});

it('if price more than part will return zero for overpayment', () => {
    expect(Calc('5120000', '25600000', '3', '30')).toEqual({
        loanBody: '0',
        monthlyPayment: '0',
        overpayment: '0',
        requiredIncome: '0',
    });

    expect(Calc('512656456', '2566546600', '23', '19')).toEqual({
        loanBody: '0',
        monthlyPayment: '0',
        overpayment: '0',
        requiredIncome: '0',
    });

    expect(Calc('1000', '30000', '16', '5')).toEqual({
        loanBody: '0',
        monthlyPayment: '0',
        overpayment: '0',
        requiredIncome: '0',
    });
});

it('with zeros from inputs will return zeros', () => {
    expect(Calc('0', '0', '0', '0')).toEqual({
        loanBody: '0',
        monthlyPayment: '0',
        overpayment: '0',
        requiredIncome: '0',
    });
});

it('without values from inputs will return zeros', () => {
    expect(Calc()).toEqual({
        loanBody: '0',
        monthlyPayment: '0',
        overpayment: '0',
        requiredIncome: '0',
    });
});