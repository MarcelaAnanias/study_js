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