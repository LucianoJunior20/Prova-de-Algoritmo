const readline = require('readline-sync');

const cinema = Array.from({ length: 4 }, () => Array(4).fill('L'));

function exibirCinema() {
    console.log("(index)  0   1   2   3");
    for (let i = 0; i < 4; i++) {
        let linha = `${i}       `;
        for (let j = 0; j < 4; j++) {
            linha += ` '${cinema[i][j]}'`;
        }
        console.log(linha);
    }
    console.log("\n------TELA DO CINEMA------\n");
}

while (true) {
    console.clear();
    exibirCinema();

    let linha = parseInt(readline.question("Digite o numero da LINHA (0 a 3): "));
    let coluna = parseInt(readline.question("Digite o numero da COLUNA (0 a 3): "));

    if (linha >= 0 && linha < 4 && coluna >= 0 && coluna < 4) {
        if (cinema[linha][coluna] === 'L') {
            cinema[linha][coluna] = '#';
            console.log("Compra realizada com sucesso!");
        } else {
            console.log("Essa cadeira já está ocupada. Tente outra.");
        }
    } else {
        console.log("Posição inválida. Digite um número entre 0 e 3.");
    }

    readline.question("\nPressione ENTER para continuar...");
}
