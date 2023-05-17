const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById('result');
let valueCoverted = 0;

function handleSubmit(e) {
    e.preventDefault();

    if(!inputValue.value  || inputValue.value < 0) {
        alert('Informe um valor correto!');
        return; 
    } else if(!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }

    converter()
}

function converter() {
    if(selectedCurrency.value === 'eur'){
        valueCoverted = inputValue.value / 5.35;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');

        animateResult();
    }  else if(selectedCurrency.value === 'dol') {
        valueCoverted = inputValue.value / 4.93;
        result.innerHTML = valueFormatter('en-US', 'USD');
        animateResult();
    }

    inputValue.value = '';
    selectedCurrency = '';
}

function valueFormatter(locale, currency) {
    const value = valueCoverted.toLocaleString(`${locale}`, { style: 'currency', currency: `${currency}`})
    return `<span>🤑</span> ${value} <span>🤑</span>`
}

function animateResult() {
    return result.animate([
        { transform: 'translateY(-150px)' },
        { transform: 'translateY(opx)'}
    ], { duration: 500 })

}