var x = 7;
var y = -3;
var z = 2;

var showSign = document.querySelector('#showSign');
var showVals = document.querySelector('#showVals');

document.addEventListener("DOMContentLoaded", function() {
    // forma 2 
    if(x * y * z > 0) {
        console.log('O sinal do produto é: +.');
        showSign.textContent = 'O sinal do produto é: +.';
    } else {
        console.log('O sinal é: menos.');
        showSign.textContent = 'O sinal do produto é: -.';
    }
    
    // forma 1
    // if (x > 0 && y > 0 && z > 0) {
    //     console.log('O valor é +');
    //     showSign.textContent = 'O sinal do produto é: +.';
    // } else if(x > 0 && y < 0 && z < 0) {
    //     console.log('O valor é +');
    //     showSign.textContent = 'O sinal do produto é: +.';
    // } else if(x < 0 && y > 0 && z < 0) {
    //     console.log('O valor é +');
    //     showSign.textContent = 'O sinal do produto é: +.';
    // } else if(x < 0 && y < 0 && z > 0) {
    //     console.log('O valor é +');
    //     showSign.textContent = 'O sinal do produto é: +.';
    // } else {
    //     console.log('O valor é -')
    //     showSign.textContent = 'O sinal do produto é: -.';
    // }

    showVals.textContent = `O valor armazenado na variável x é: ${x}.\r\nO valor armazenado na variável y é: ${y}.\r\nO valor armazenado na variável z é: ${z}.`
});

/*  
    Steps:
    * 1. Descobrir os sinais que podem ser utilizados antes dos números (+,-). 
    * Se o valor for menor que 0 o sinal é menor (-) se o valor for maior que 0 o sinal é +.
    * 2. Armazenar os valores fornecidos pelo usuário.
    * 4. SE os 3 valores forem menores que 0.
         4.1. Exiba a caixa de alerta: O valor é -. (o valor é menor que 0. ex: -7).
    * 5. MAIS SE os 3 valores forem maiores que 0.
         5.1. Exiba a caixa de alerta: O valor é +. (o valor é maior que 0. ex: +7).
    * 6. MAIS SE o valor1 for maior que 0 e o valor2 for menor que 0 e o valor3 for menor que 0.
         5.2. Exibir a caixa de alerta: O valor é +.
    * 7. MAIS SE o valor1 for menor que 0 e o valor2 for maior que 0 e o valor3 for menor que 0.
         6.2. Exiba a caixa de alerta: O valor é +.
    * 8. MAIS SE o valor1 for menor que 0 e o valor2 for menor que 0 e o valor3 for maior que 0.
         7.2. Exiba a caixa de alerta: O valor é +.
    * 9. Se não.
         8.2. Exiba a caixa de alerta: O valor é -.
    * 10. Exibir os 3 valores armazenados 

    Search Math.sign - O sign() método verifica se um número é negativo, positivo ou zero.
*/