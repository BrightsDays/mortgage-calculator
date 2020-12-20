import Calc from '../calc';

it('with zeros from inputs can return zeros', () => {
    expect(Calc('0', '0', '0', '0')).toEqual({
        loanBody: '0',
        monthlyPayment: '0',
        overpayment: '0',
        requiredIncome: '0',
    });
});

it('can calculate right stats', () => {
    expect(Calc('1000000', '100000', '1', '10')).toEqual({
        loanBody: '900 000',
        monthlyPayment: '79 124',
        overpayment: '49 488',
        requiredIncome: '131 873',
    });
});

it('can calculate right stats', () => {
    expect(Calc('25600000', '5120000', '3', '30')).toEqual({
        loanBody: '20 480 000',
        monthlyPayment: '869 408',
        overpayment: '10 818 688',
        requiredIncome: '1 449 013',
    });
});

it('returns zeros instead of negative numbers', () => {
    expect(Calc('5120000', '25600000', '3', '30')).toEqual({
        loanBody: '0',
        monthlyPayment: '0',
        overpayment: '20 480 000',
        requiredIncome: '0',
    });
});