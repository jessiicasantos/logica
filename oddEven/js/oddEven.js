var btnOddEven = document.querySelector('#btnOddEven');

var pShowVal = document.querySelector('#showVal');
 
function oddOrEven() {
    for(var i = 0; i <= 15; i++) {
        if(i % 2 == 0) { 
            console.log(`Número: ${i} é par`);
            pShowVal.textContent += `O valor: ${i} é par!\r\n`;
        } else if(i % 2 === 1) {
            console.log(`Número: ${i} é ímpar`);
            pShowVal.textContent += `O valor: ${i} é ímpar!\r\n`;
        }
    }
}

btnOddEven.addEventListener('click', oddOrEven);

// i % 2 === 0 par
// i % 2 === 1 impar