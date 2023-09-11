const form = document.querySelector('#form');

form.addEventListener('submit', function (event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc (imc);
    const message = `Seu IMC é: ${imc} (${nivelImc}).`;
    if (nivelImc >= 18.5) {
        
    }
    showresult (message, true)
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel [5];  
    if (imc >= 34.9) return nivel [4]; 
    if (imc >= 29.9) return nivel [3];   
    if (imc >= 24.9) return nivel [2];
    if (imc >= 18.5) return nivel [1];
    if (imc < 18.5) return nivel [0];
}


function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarP () {
    const p = document.createElement('p');
    return p;
}

function showresult (message) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = criarP();
    p.innerHTML  = message;
    resultado.appendChild(p);
    
}