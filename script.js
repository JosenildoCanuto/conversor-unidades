let inputUnidades = document.querySelector('.select-options');
let origemInput = document.querySelector('.select-unidades-one');
let destinoInput = document.querySelector('.select-unidades-two');
let inputValue = document.querySelector('.valor-input');
let buttonConvert = document.querySelector('.button-convert');
let buttonReset = document.querySelector('.reset');
let result = document.querySelector('.result');
let tResult = document.querySelector('.t-result')

let units = {
    comprimento: {"km": "Quilômetro (Km)", "m": "Metro (m)", "cm": "Centímetros (cm)"},
    temperatura: {"C": "Celsius (°C)", "F": "Graus Fahrenheit (°F)", "K": "Kelvin (K)"},
    peso: {"t": "Tonelada (t)", "kg": "Quilograma (kg)", "g": "Grama (g)"}
};

uptadeSelectOptions()

function uptadeSelectOptions (){
    let selectUnits = units[inputUnidades.value] || {};

    origemInput.innerHTML = '';
    destinoInput.innerHTML = '';

    for (let key in selectUnits) {
        let newOptionOrigem = document.createElement('option');
        newOptionOrigem.textContent = selectUnits[key];
        newOptionOrigem.value = key;
        origemInput.appendChild(newOptionOrigem);

        let newOptionDestino = document.createElement('option');
        newOptionDestino.textContent = selectUnits[key];
        newOptionDestino.value = key;
        destinoInput.appendChild(newOptionDestino);
    }
}


function calcComprimento(valor, valorOrigem, valorDestino){
    if((valorOrigem === 'km') && (valorDestino === 'm')){
        return valor * 1000
    } else if ((valorOrigem === 'km') && (valorDestino === 'cm')) {
        return valor * 100000
    } else if (valorOrigem === 'm' && valorDestino === 'km'){
        return valor / 1000;
    } else if (valorOrigem === 'm' && valorDestino === "cm"){
        return valor * 100;
    } else if (valorOrigem === 'cm' && valorDestino === 'km'){
        return valor / 100000;
    } else if (valorOrigem === 'cm' && valorDestino === 'm'){
        return valor / 100;
    } else {
        return valor
    }
}

function calcTemperatura(valor, valorOrigem, valorDestino) {
    if((valorOrigem === 'C') && (valorDestino === 'F')){
        return valor * 1.8 + 32;
    } else if ((valorOrigem === 'C') && (valorDestino === 'K')){
        return valor + 273.15;
    } else if((valorOrigem === 'F') && (valorDestino === 'C')){
        return (valor - 32) / 1.8;
    } else if ((valorOrigem === 'F') && (valorDestino === 'K')){
        return (valor - 32) * 5 / 9 + 273.15;
    } else if((valorOrigem === 'K') && (valorDestino === 'C')){
        return valor - 273.15;
    } else if ((valorOrigem === 'K') && (valorDestino === 'F')){
        return (valor - 273.15) * 1.8 + 32;
    } else {
        return valor;
    }
}

function calcMassa(valor, valorOrigem, valorDestino) {
    if((valorOrigem === 't') && (valorDestino === 'kg')){
        return valor * 1000;
    } else if ((valorOrigem === 't') && (valorDestino === 'g')){
        return valor * 1000000;
    } else if((valorOrigem === 'kg') && (valorDestino === 't')){
        return valor / 1000;
    } else if ((valorOrigem === 'kg') && (valorDestino === 'g')){
        return valor * 1000;
    } else if((valorOrigem === 'g') && (valorDestino === 't')){
        return valor * 1000000;
    } else if ((valorOrigem === 'g') && (valorDestino === 'kg')){
        return valor / 1000;
    } else {
        return valor;
    }
}

function calcular(){
    result.innerHTML = '';

    let valor = parseFloat(inputValue.value);

    if(inputValue.value === ''){
        result.innerHTML = 'Digite algum valor'
        return
    }

    let origem = origemInput.value;
    let destino = destinoInput.value;
    
    resultValor = ''

    if(inputUnidades.value === 'comprimento'){
        resultValor = (calcComprimento(valor, origem, destino));
    } else if(inputUnidades.value === 'temperatura'){
        resultValor = (calcTemperatura(valor, origem, destino));
    } else {
        resultValor = (calcMassa(valor, origem, destino));
    }

    result.innerHTML = (inputUnidades.value === 'temperatura')
    ? resultValor.toFixed(2) + ' ' + destino 
    : resultValor + ' ' + destino;

    tResult.classList.add('visible')
}

function reset(){
    inputValue.value = '';
    result.innerHTML = '';
    inputUnidades.value = 'comprimento';
    uptadeSelectOptions();
}

buttonConvert.addEventListener('click', calcular)
buttonReset.addEventListener('click', reset)

inputUnidades.addEventListener('change', uptadeSelectOptions);