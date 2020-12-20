import Calc from '../calc';

it('with strings from inputs can calculate right stats', () => {
    expect(Calc('1000000', '100000', '1', '10')).toEqual({
        loanBody: '900 000',
        monthlyPayment: '79 124',
        overpayment: '49 488',
        requiredIncome: '131 873',
    });
});