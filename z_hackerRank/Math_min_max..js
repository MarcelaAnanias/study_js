//Implemente uma função MaxMin(arr) que recebe um array de 6 inteiros positivos e:
//Soma apenas 5 de cada vez
//Imprime a menor e a maior soma possíveis de 5 números (ou seja, exclui um diferente a cada vez)

arr = [1, 2, 3, 4, 5, 6]

function MaxMin(arr){

    const numbers = arr.reduce((soma, valorAtual) => {
        return soma + valorAtual; // A cada iteração, soma o valorAtual ao acumulador
    }, 0);

    const maxNum = Math.max(...arr) //Usando 'Math.max' que pega o maior valor do array
    const minNum = Math.min(...arr) //Usando 'Math.min' que pega o menor valor do array

    const somaMax = numbers - minNum;
    const somaMin = numbers - maxNum;

    console.log(somaMin + ' ' + somaMax);
}
