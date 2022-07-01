var inputNum = document.querySelector('#inputNum');
var btnOddEven = document.querySelector('#btnOddEven');

var userOut = document.querySelector(".userOut");
var pShowVal = document.querySelector('#showVal');
var wrongVal = document.querySelector('#wrongVal');
 
function oddOrEven() {
    for(var i = 1; i <= 15; i++) {
        wrongVal.classList.add('hide');
        pShowVal.classList.remove('hide');
        userOut.classList.add('on')

        if(inputNum.value % 2 == 0) {
            pShowVal.textContent = `O valor: ${inputNum.value} é par.`;
        } else if(inputNum.value % 2 == 1) {
            pShowVal.textContent = `O valor: ${inputNum.value} é ímpar.`;
        } else {
           hideAddRemove();
            wrongVal.textContent = 'Valor inválido! Por favor insira um valor numérico.';
        }
    }

    // not value expected
    if(inputNum.value > 15 || inputNum.value < 0 || inputNum.value == '') {
       hideAddRemove();
        wrongVal.textContent = 'Por favor, insira um valor entre 0 e 15!';
    } else if(inputNum.value == 0) {
       hideAddRemove();
        wrongVal.textContent = '0 é um valor "vazio", por isso ele não pode ter um par ou ser ímpar.'
    } 
}

function hideAddRemove() {
    wrongVal.classList.remove('hide');
    pShowVal.classList.add('hide');
}

btnOddEven.addEventListener('click', oddOrEven);

// Steps:
    // 1. Fornecer uma maneira de o usuário dar os valores
    // 2. Armazenar os valores digitados pelo usuário e verificar se cada número tem os requisitos (valor min: 0, valor max: 15) 
    // 3. Se o valor inserido pelo usuário for par (i % 2 == 0)
        // 3.1. Mostre o valor para o usuário e informe que o número é par.
    // 4. Se o valor inserido pelo usuário for ímpar (i % 2 == 1)
        // 4.1. Mostre o valor para o usuário e informe que o número é ímpar.
    // 5. Se não
        // 5.1. Valor inválido

// Nota:
    // i % 2 === 0 par
    // i % 2 === 1 impar