let inputVal1 = document.querySelector('#inputVal1');
let inputVal2 = document.querySelector('#inputVal2');
let inputVal3 = document.querySelector('#inputVal3');
let inputVal4 = document.querySelector('#inputVal4');
let inputVal5 = document.querySelector('#inputVal5');

let submitVal = document.querySelector('#submitVal');

let showVals = document.querySelector("#showVals");
let showBigVal =  document.querySelector("#showBigVal");

function submitBigVal() {
    let numInput1 = Number(inputVal1.value);
    let numInput2 = Number(inputVal2.value);
    let numInput3 = Number(inputVal3.value);
    let numInput4 = Number(inputVal4.value);
    let numInput5 = Number(inputVal5.value);

    showVals.textContent = `Num1: ${numInput1}\r\nNum2: ${numInput2}\r\nNum3: ${numInput3}\r\nNum4: ${numInput4}\r\nNum5: ${numInput5}`;

    if(numInput1 > numInput2 && numInput1 > numInput3 && numInput1 > numInput4 && numInput1 > numInput5) {
        showBigVal.textContent = `Num 1 cujo valor é: ${numInput1} é o maior!`;
    } else if(numInput2 > numInput1 && numInput2 > numInput3 && numInput2 > numInput4 && numInput2 > numInput5) {
        showBigVal.textContent = `Num 2 cujo valor é: ${numInput2} é o maior!`;
    } else if(numInput3 > numInput1 && numInput3 > numInput2 && numInput3 > numInput4 && numInput3 > numInput5) {
     showBigVal.textContent = `Num 3 cujo valor é: ${numInput3} é o maior!`;
    } else if(numInput4 > numInput1 && numInput4 > numInput2 && numInput4 > numInput3 && numInput4 > numInput5) {
        showBigVal.textContent = `Num4 cujo valor é: ${numInput4} é o maior!`;
    } else if(numInput5 > numInput1 && numInput5 > numInput2  && numInput5 > numInput3 && numInput5 > numInput4) {
        showBigVal.textContent = `Num5 cujo valor é: ${numInput5} é o maior!`;
    } else {
        showBigVal.textContent = `Valor inválido! Por favor, insira um número.`;
    }
}

submitVal.addEventListener('click', submitBigVal);