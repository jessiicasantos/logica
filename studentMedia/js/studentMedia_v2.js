var students = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68]
];

var btnMedia = document.querySelector('#btnMedia');
var showVal = document.querySelector('#showVal');

// armazena 0 (ou o número pra conta) à variável avgMarks
var avgMarks = 0;
var avgName = '';
// console.log(students);

function studentsMedia() {
    for(var c = 0; c < students.length; c++) {
        // avg recebe incremento de atribuição (isso vai fazer as contas em cada elemento do array 80 + 77...), percorre students.length com a var c e pega o item na posição [1] do array
        avgMarks += students[c][1];
        // console.log(avgMarks);
        avg = avgMarks / students.length;
        // console.log(avg);
        avgName += 'Nome e marca atingidos pelo estudante: ' + students[c] + ".\r\n";
    }

    if(avg < 60) {
        showVal.textContent = `${avgName}Média dos alunos (Marca): ${avg}. Grau F.`
        console.log(`${avgName}Média dos alunos (Marca): ${avg}. Grau F.`);
    } else if(avg < 70) {
        showVal.textContent = `${avgName}Média dos alunos (Marca): ${avg}. Grau D.`
        console.log(`${avgName}Média dos alunos (Marca): ${avg}. Grau D.`);
    } else if(avg < 80) {
        showVal.textContent = `${avgName}Média dos alunos (Marca): ${avg}. Grau C.`
        console.log(`${avgName}Média dos alunos (Marca): ${avg}. Grau C.`);
    } else if(avg < 90) {
        showVal.textContent = `${avgName}Média dos alunos (Marca): ${avg}. Grau B.`
        console.log(`${avgName}Média dos alunos (Marca): ${avg}. Grau B.`);
    } else if(avg < 100) {
        showVal.textContent = `${avgName}Média dos alunos (Marca): ${avg}. Grau A.`
        console.log(`${avgName}Média dos alunos (Marca): ${avg}. Grau A.`);
    }
}

btnMedia.addEventListener('click', studentsMedia);

/*
    Nome aluno | Marcas
    David      | 80
    Vinoth     | 77
    Divya      | 88
    Ishitha    | 95
    Thomas     | 68

    As notas são calculadas da seguinte forma:
    Faixa      | Grau
    <60          F
    <70          D
    <80          C
    <90          B
    <100         A

    Steps:
        1. Armazenar os alunos e suas marcas
        2. Calcular a média dos alunos (80 + 77 + 88 + 95 + 68) / 5 = média / 5 = result. final
        3. Se marca for < 60
            3.1. Exiba Grau F, a marca que o aluno alcançou e como o grau é calculado (Faixa <60, Grau F)
        4. Se marca for < 70
            4.1. Grau D
        5. Se marca for < 80
            5.1. Grau C
        6. Se marca for < 90
            6.1. Grau B
        7. Se marca for < 100
            7.1. Grau A

        https://blog.betrybe.com/javascript/javascript-array/#array-o-que-e

    // Notas:
        /*  Método array filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.  
*/