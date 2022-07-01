var btnVals = document.querySelector('#btnShowVals');
var showVals = document.querySelector('#showVals');

function multiple() {
    for(var i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('É múltiplo de 3 e 5. Valor: ' + i + '.');
//             showVals.textContent +=  `É múltiplo de 3 e 5. Valor: ${i}.\r\n`;
              showVals.textContent +=  `FizzBuzz\r\n`;
        } else if(i % 3 == 0) {
            console.log('É múltiplo de 3. Valor: ' + i + '.');
            showVals.textContent += `Fizz\r\n`;
        } else if(i % 5 == 0) {
            console.log('É múltiplo de 5. Valor: ' + i + '.');
            showVals.textContent += `Buzz\r\n`;
        }
        btnVals.classList.add('hide');
    }
}

btnVals.addEventListener('click', multiple);

/* 
    Steps:
    1. Percorrer os números de 1 a 100.
    2. Se for múltiplo de 3 e cinco, imprima "FizzBuzz".
    3. Se for múltiplo de 3 (i % 3 == 0)
        3.1. Imprima "Fizz".
    4. Se for múltiplo de 5 (i % 5 == 0)
        4.1. Imprima "Buzz".
*/