let inputUnidades = document.querySelector('.select-options')
let origemInput = document.querySelector('.select-unidades-one')
let destinoInput = document.querySelector('.select-unidades-two')
let inputValue = document.querySelector('.valor-input')
let buttonConvert = document.querySelector('.button-convert')


let units = {
    comprimento: ["Metro (m)","Quilômetro (km)", "Milímetro (mm)",],
    temperatura: ["Celsius (°C)", "Graus Fahrenheit (°F)","Kelvin (K)"],
    peso: ["Tonelada (t)", "Quilograma (kg)", "Grama (g)"]
}

function uptadeSelectOptions (){
    let selectUnits = units[inputUnidades.value] || [];

        origemInput.innerHTML = '';

        selectUnits.forEach(unit => {
            let newOption = document.createElement('option');
            newOption.textContent = unit;
            origemInput.appendChild(newOption);
        })

        destinoInput.innerHTML = '';

        selectUnits.forEach(unit => {
            let newOption = document.createElement('option');
            newOption.textContent = unit;
            destinoInput.appendChild(newOption);
        })
}


function calcComprimento(valor, valorOrigem, ValorDestino){
    if(valorOrigem === 'm' || valorOrigem === 'Metro (m)' && ValorDestino === 'km' || ValorDestino === 'Quilômetro (Km)'){
        console.log(valor * 100);
    }
}


console.log(calcComprimento(inputValue.value, origemInput.value, destinoInput.value))
inputUnidades.addEventListener('change', uptadeSelectOptions);