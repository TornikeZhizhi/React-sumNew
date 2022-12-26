import React from 'react';

const currency_formatter = new Intl.NumberFormat(undefined,{
    currency:"USD", style:"currency"
})

const formatCurrency = (number) => {
    return (
        currency_formatter.format(number)
    );
};

export default formatCurrency;