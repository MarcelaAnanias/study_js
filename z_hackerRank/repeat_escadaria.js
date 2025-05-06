const n = 6;

function staircase(n) {
    for (let i = 1; i <= n; i++){

        // Cria os espaços em branco antes do "#"
        // A quantidade de espaços vai diminuindo a cada linha
        const espacos = ' '.repeat(n - i); // .repeat(x) repete a string x vezes

        // Cria os "degraus" usando o símbolo "#"
        // A quantidade de "#" vai aumentando a cada linha
        const degrau = '#'.repeat(i); // .repeat(x) repete o caractere '#' x vez
        console.log(espacos + degrau)
    }
}

staircase(n);


/////////////////////////////////////////////////////////////////////////////////////////
//Desafio: Escada Invertida
//Crie uma função chamada reverseStaircase(n) que imprime uma escada invertida, com n degraus, usando o caractere #.


const x = 4 

function reverseStaircase(x) {
    for (let r = 0; r < x; r++){

        const space = '#'.repeat(x - r)
        const step = ' '.repeat(r)

        console.log(space + step)
    }
}

reverseStaircase(x);

/////////////////////////////////////////////////////////////////////////////////////////
//Desafio: Pirâmide Centralizada
//Faça uma função que desenhe uma pirâmide centralizada com n degraus (ou seja, linhas)


const y = 4

function pyramid(y){

    for (let p = 1; p <= y; p++){

        const ladoA = ' '.repeat(y - p)
        const ladoB = '#'.repeat(2 * p - 1)

        console.log(ladoA + ladoB)

    }
}

pyramid(y)