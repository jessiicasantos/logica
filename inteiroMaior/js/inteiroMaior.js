var userEntryOne = document.getElementById("inputValOne");
var userEntryTwo = document.getElementById("inputValTwo");
var submitVals = document.getElementById("submitVals");

var showVals = document.querySelector("#showValsInput");
var wrongVal = document.querySelector('#wrongVal');

function checkVals() {
    showVals.textContent = '';
    wrongVal.style.display = 'none';

    if(parseInt(userEntryOne.value, 10) > parseInt(userEntryTwo.value, 10)) {
        showVals.textContent += 'Valor da primeira caixa é maior: ' + parseInt(userEntryOne.value, 10);
        // console.log('typeof parseInt(userEntryOne): ' +  typeof parseInt(userEntryOne));
    } else if(parseInt(userEntryTwo.value, 10) > parseInt(userEntryOne.value, 10)) {
        showVals.textContent += 'Valor da segunda caixa é maior: ' + parseInt(userEntryTwo.value, 10);
        // console.log('typeof parseInt(userEntryTwo)' + typeof parseInt(userEntryTwo));
    } else {
        wrongVal.textContent += 'Valor inválido! Por favor, Insira um valor numérico nas duas caixas de entrada. \r\n';
        wrongVal.style.display = 'flex';
    }
}

submitVals.addEventListener('click', checkVals);

// steps:
// 1. Registrar dois numeros digitados pelo usuário
// 2. Fornecer uma maneira do usuário saber se o valor inserido é válido.
// 2. Se os números fornecidos forem validos
    // 1. Aceito. Exiba o maior número.
// 3. Se estiver errado
    // 1. Exiba número inválido!
// 4. Se não houver valores.
    // 1. Por favor, insira os valores nas caixas de entrada!
// 5. Se os valores forem iguais
    // 1. Os valores são iguais. Mostrar valor.
// 4. Limpe os números da caixa de entrada.
// 5. Limpe os números exibidos.

// steps 4 e 5 não foram feitos