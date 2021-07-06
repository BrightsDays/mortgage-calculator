const calc = (price = '0', part = '0', time = '0', percent = '0') => {
  let result = {
    loanBody: 0,
    monthlyPayment: 0,
    overpayment: 0,
    requiredIncome: 0,
  };
  const months = +time * 12;

  const calcLoanBody = (price, part) => {
    const numPrice = +(price.replace(/\s/g, ""));
    const numPart = +(part.replace(/\s/g, ""));

    const resultLoanBody = Math.round(numPrice - numPart);

    if (typeof resultLoanBody == 'number' && resultLoanBody >= 0) {
      result.loanBody = resultLoanBody.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
      result.loanBody = '0';
    }
  };

  const calcMonthlyPayment = (percent, months) => {
    const numPercent = +(percent.replace(/\s/g, ""));
    const resultLoanBody = +(result.loanBody.replace(/\s/g, ""));

    const resultMonthlyPayment = Math.round(resultLoanBody *
      (numPercent/1200 + ((numPercent/1200)/(Math.pow((1 + (numPercent/1200)), months) - 1))));

      if (typeof resultMonthlyPayment == 'number' && resultMonthlyPayment >= 0 && resultMonthlyPayment !== Infinity) {
        result.monthlyPayment = resultMonthlyPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      } else {
        result.monthlyPayment = '0';
      }
  };

  const calcRequiredIncome = () => {
    const resultMonthlyPayment = result.monthlyPayment.replace(/\s/g, "");

    const resultRequiredIncome = Math.round(5 * (+resultMonthlyPayment/3));

    if (typeof resultRequiredIncome == 'number' && resultRequiredIncome >= 0 && resultRequiredIncome !== Infinity) {
      result.requiredIncome = resultRequiredIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
      result.requiredIncome = '0';
    }
  };

  const calcOverpayment = (price, part, months) => {
    const numPrice = +(price.replace(/\s/g, ""));
    const numPart = +(part.replace(/\s/g, ""));
    const resultMonthlyPayment = result.monthlyPayment.replace(/\s/g, "");

    const resultOverpayment = Math.round(resultMonthlyPayment * months - numPrice + numPart);

    if (typeof resultOverpayment == 'number' && resultOverpayment >= 0 && numPrice > numPart) {
      result.overpayment = resultOverpayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else {
      result.overpayment = '0';
    }
  };

  calcLoanBody(price, part);
  calcMonthlyPayment(percent, months);
  calcRequiredIncome();
  calcOverpayment(price, part, months);

  return result;
};

export default calc;