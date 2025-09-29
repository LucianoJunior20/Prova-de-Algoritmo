const readline = require('readline-sync');

let matriz = [];

console.log("Informe os valores para uma matriz 3x3:");
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        let valor = parseInt(readline.question(`Digite o valor da posição [${i}][${j}]: `));
        matriz[i][j] = valor;
    }
}

console.log("\nMatriz informada:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i]);
}

function somarLinha1() {
    let soma = matriz[0].reduce((acc, val) => acc + val, 0);
    console.log(`\nSoma da primeira linha: ${soma}`);
}

function multiplicarDiagonal() {
    let produto = 1;
    for (let i = 0; i < 3; i++) {
        produto *= matriz[i][i];
    }
    console.log(`\nMultiplicação da diagonal principal: ${produto}`);
}

function contarPares() {
    let pares = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] % 2 === 0) {
                pares++;
            }
        }
    }
    console.log(`\nQuantidade de números pares: ${pares}`);
}

while (true) {
    console.log("\nEscolha uma das opções:");
    console.log("1 - Somar os elementos da primeira linha");
    console.log("2 - Multiplicar os elementos da diagonal principal");
    console.log("3 - Contar os números pares na matriz");
    console.log("4 - Encerrar o programa");

    let opcao = parseInt(readline.question("Digite sua opção: "));

    if (opcao === 4) {
        console.log("Encerrando o programa...");
        break;
    }

    switch (opcao) {
        case 1:
            somarLinha1();
            break;
        case 2:
            multiplicarDiagonal();
            break;
        case 3:
            contarPares();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
