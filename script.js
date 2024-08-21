let inputUnidades = document.querySelector('.select-options')
let selectsOne = document.querySelector('.select-unidades-one')
let selectsTwo = document.querySelector('.select-unidades-two')
let inputValue = document.querySelector('.valor-input')


let units = {
    comprimento: ["Quilômetro (km)", "Hectômetro (hm)", "Decâmetro (dam)", "Milímetro (mm)", "Centímetro (cm)", "Decímetro (dm)"],
    temperatura: ["Celsius (°C)", "Graus Fahrenheit (°F)","Kelvin (K)"],
    peso: ["Decagrama (dag)","Hectograma (hg)", "Quilograma (kg)", "Decigrama (dg)", "Centigrama (cg)", "Miligrama (mg)"]
}

function uptadeSelectOptions (){
    let selectUnits = units[inputUnidades.value] || [];

        selectsOne.innerHTML = '';

        selectUnits.forEach(unit => {
            let newOption = document.createElement('option');
            newOption.textContent = unit;
            selectsOne.appendChild(newOption);
        })

        selectsTwo.innerHTML = '';

        selectUnits.forEach(unit => {
            let newOption = document.createElement('option');
            newOption.textContent = unit;
            selectsTwo.appendChild(newOption);
        })
}

selectsOne.addEventListener('change', function() {
    selectedIndexOne = parseInt(selectsOne.value, 10);
    calcComprimento();
});

selectsTwo.addEventListener('change', function() {
    selectedIndexTwo = parseInt(selectsTwo.value, 10);
    calcComprimento();
});

function calcComprimento (){
    if(selectedIndexOne > selectedIndexTwo){
        console.log(inputValue.value * Math.pow(10, selectedIndexTwo));
    }
}

uptadeSelectOptions();