var showVals = document.querySelector("#showVals");

var val1 = 7;
var val2 = 12;
var val3 = 93;

if(val1 < val2 && val2 < val3) {
    showVals.textContent = `Valor val3: ${val3}, \r\nValor val2: ${val2}, \r\nValor val1: ${val1}`;
} else if(val3 < val2 && val2 < val1) {
    showVals.textContent = `Valor val1: ${val1}, \r\nValor val3: ${val3}, \r\nValor val2: ${val2}`;
} else {
    showVals.textContent = `Valor val2: ${val2}, \r\nValor val1: ${val1}, \r\nValor val3: ${val3}`;
}


// var randomNumArr = [7, 13, 99];

// for(var c = 0; c < randomNumArr.length; c++) {
//     var randomNumInd = randomNumArr[c];

//     console.log(randomNumInd);
// }