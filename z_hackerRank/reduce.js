// ----------------------------------------------------------------------------------------------------------------------




// 1 Nível Básico → "Soma de Danos"
//Objetivo: Criar uma função que recebe um array de números e retorna a soma total deles.
//Dica: Use um for loop ou o método .reduce().

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual; // A cada iteração, soma o valorAtual ao acumulador
}, 0); // O acumulador começa em 0

console.log(sum); // 1

//O .reduce() é útil quando você precisa combinar todos os valores de um array de forma acumulativa. Ele pode ser usado para:
//Somar valores.
//Encontrar o maior ou menor número.
//Concatenar strings.
//Criar um objeto a partir de um array de chaves/valores.




// ----------------------------------------------------------------------------------------------------------------------




// 2 Nível Intermediário → "Maior Dano"
//Objetivo: Criar uma função que recebe um array e retorna o maior número dentro desse array.
//Dica: Use Math.max() ou percorra o array comparando valores.


const numbers2 = [1, 2, 3, 4]

console.log(Math.max(...numbers2)) //Usando 'Math.max' que pega o maior valor do array

//ou 

numbers2.sort()
console.log(`O maior valor informado foi ${numbers2[numbers2.length - 1]}`)




// ----------------------------------------------------------------------------------------------------------------------




// 3 Nível Avançado → "Sobrevivência com Armadura"
//Objetivo: Resolver exatamente o problema, ou seja, calcular a saúde inicial mínima necessária.
//Dica: Junte as duas funções anteriores para calcular a soma total do dano e encontrar o maior valor do array.


function getMinimumValue (dano, armor) {

    const perdendoVida = dano.reduce((acumulador, valorAtual) => { //soma total do dano
        return acumulador + valorAtual
    }, 0)

    const maxdano = Math.max(...dano)

    const damageReduced = Math.min(maxdano, armor);
    //O Math.min(maxdano, armor) retorna o menor valor entre os dois argumentos fornecidos: maxdano e armor. 
    //Se maxPower (o maior dano em uma rodada) for maior que armor, ele vai retornar armor. 
    //Se armor for maior que maxPower, ele vai retornar maxPower. Ou seja, ele aplica a redução de dano máxima baseada no valor da armadura.

    let initialHealth = perdendoVida - damageReduced + 1;

    return initialHealth;
}

console.log(getMinimumValue([1, 2, 6, 7], 5))
