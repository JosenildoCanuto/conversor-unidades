let inputUnidades = document.querySelector('.select-options');
let origemInput = document.querySelector('.select-unidades-one');
let destinoInput = document.querySelector('.select-unidades-two');
let inputValue = document.querySelector('.valor-input');
let buttonConvert = document.querySelector('.button-convert');
let result = document.querySelector('.result');

let units = {
    comprimento: ["Quilômetro (km)", "Metro (m)", "Centímetros (cm)",],
    temperatura: ["Celsius (°C)", "Graus Fahrenheit (°F)","Kelvin (K)"],
    peso: ["Tonelada (t)", "Quilograma (kg)", "Grama (g)"]
}

let valueUnits = {
    comprimento: ["km", "m", "cm"],
    temperatura: ["°C", "°F","K"],
    peso: ["t", "kg", "g"]
}

uptadeSelectOptions()

function uptadeSelectOptions (){
    let selectUnits = units[inputUnidades.value] || [];

        origemInput.innerHTML = '';

        selectUnits.forEach((unit, i) => {
            let newOption = document.createElement('option');
            newOption.textContent = unit;
            origemInput.appendChild(newOption);
            console.log(i)
        })

        destinoInput.innerHTML = '';

        selectUnits.forEach(unit => {
            let newOption = document.createElement('option');
            newOption.textContent = unit;
            destinoInput.appendChild(newOption);
        })
}


function calcComprimento(valor, valorOrigem, valorDestino){
    if(valorOrigem === valorDestino){
        return valor
    }

    if (valorOrigem === 'Quilômetro (Km)' && valorDestino === 'Metro (m)'){
        return valor*1000;
    } else if (valorOrigem === 'Quilômetro (Km)' && valorDestino === 'Centímetros (cm)'){
        return valor*100000;
    } else if (valorOrigem === 'Metro (m)' && valorDestino === 'Quilômetro (Km)'){
        return valor / 1000;
    } else if (valorOrigem === 'Metro (m)' && valorDestino === "Centímetros (cm)"){
        return valor * 100;
    } else if (valorOrigem === 'Centímetros (cm)' && valorDestino === 'Quilômetro (Km)'){
        return valor / 100000;
    } else if (valorOrigem === 'Centímetros (cm)' && valorDestino === 'Metro (m)'){
        return valor / 100;
    } 
}

function calcTemperatura(valor, valorOrigem, valorDestino) {
    if((valorOrigem === 'Celsius (°C)') && (valorDestino === 'Graus Fahrenheit (°F)')){
        return valor * 1.8 + 32;
    } else if ((valorOrigem === 'Celsius (°C)') && (valorDestino === 'Kelvin (K)')){
        return valor + 273.15;
    } else if((valorOrigem === 'Graus Fahrenheit (°F)') && (valorDestino === 'Celsius (°C)')){
        return (valor - 32) / 1.8;
    } else if ((valorOrigem === 'Graus Fahrenheit (°F)') && (valorDestino === 'Kelvin (K)')){
        return (valor - 32) * 5 / 9 + 273.15;
    } else if((valorOrigem === 'Kelvin (K)') && (valorDestino === 'Celsius (°C)')){
        return valor - 273.15;
    } else if ((valorOrigem === 'Kelvin (K)') && (valorDestino === 'Graus Fahrenheit (°F)')){
        return (valor - 273.15) * 1.8 + 32;
    } else {
        return valor;
    }
}

function calcMassa(valor, valorOrigem, valorDestino) {
    if((valorOrigem === 'Tonelada (t)') && (valorDestino === 'Quilograma (kg)')){
        return valor * 1000;
    } else if ((valorOrigem === 'Tonelada (t)') && (valorDestino === 'Grama (g)')){
        return valor * 1000000;
    } else if((valorOrigem === 'Quilograma (kg)') && (valorDestino === 'Tonelada (t)')){
        return valor / 1000;
    } else if ((valorOrigem === 'Quilograma (kg)') && (valorDestino === 'Grama (g)')){
        return valor * 1000;
    } else if((valorOrigem === 'Grama (g)') && (valorDestino === 'Tonelada (t)')){
        return valor * 1000000;
    } else if ((valorOrigem === 'Grama (g)') && (valorDestino === 'Quilograma (kg)')){
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
    }

    let origem = origemInput.value;
    let destino = destinoInput.value;
    
    if(inputUnidades.value === 'comprimento'){
        resultValor = (calcComprimento(valor, origem, destino));
    } else if(inputUnidades.value === 'temperatura'){
        resultValor = (calcTemperatura(valor, origem, destino));
    } else {
        resultValor = (calcMassa(valor, origem, destino));
    }

    result.innerHTML = resultValor+ ' ' + destino;

}

buttonConvert.addEventListener('click', calcular)
inputUnidades.addEventListener('change', uptadeSelectOptions);