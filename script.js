let inputUnidades = document.querySelector('.select-options')
let selectsOne = document.querySelectorAll('.select-unidades')

let unitsComprimento = ["Quilômetro (km)", "Hectômetro (hm)", "Decâmetro (dam)", "Milímetro (mm)", "Centímetro (cm)", "Decímetro (dm)"]
let unitsTemperatura = ["Celsius (°C)", "Graus Fahrenheit (°F)","Kelvin (K)"]
let unitsPeso = ["Decagrama (dag)","Hectograma (hg)", "Quilograma (kg)", "Decigrama (dg)", "Centigrama (cg)", "Miligrama (mg)"]


function unitsPropeties (){
    for(let index in selectsOne){
        selectsOne[index].innerHTML = '';

        function propetiest (valor){
            for(let i in valor) {
                let selectOptionOne = document.createElement('option');
                selectOptionOne.innerHTML = valor[i];
                selectsOne[index].appendChild(selectOptionOne);
            }
        }

        if(inputUnidades.value === 'comprimento'){
            propetiest(unitsComprimento)
        } else if (inputUnidades.value === 'temperatura'){
            propetiest(unitsTemperatura)
        } else {
            propetiest(unitsPeso)
        }
        propetiest()
    }
    }

    

unitsPropeties();


