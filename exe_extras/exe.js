//Exercício 1: Variáveis e Tipos de Dados
//Crie uma variável chamada nome e atribua o seu nome a ela. Em seguida, imprima no console a mensagem "Olá, [nome]!".
//Crie uma variável idade e atribua um número à idade. Imprima a mensagem "Eu tenho [idade] anos." no console.

const nome = "Marcela"
console.log(`Olá, ${nome}`)

const idade = 25
console.log(`Eu tenho ${idade}`)


//Exercício 2: Operadores
//Crie duas variáveis a e b com valores numéricos (qualquer número). Some esses dois números e imprima o resultado no console.
//Crie uma variável nome com seu nome e, em seguida, crie outra variável chamada sobrenome. Junte essas duas variáveis e imprima o resultado com a mensagem "Meu nome completo é [nome] [sobrenome]."

const a = 1
const b = 3
const soma = a + b
console.log(`A soma de ${a} + ${b} é ${soma}`)

const nome2 = "Marcela"
const sobrenome = "Silva"
console.log(`Meu nome completo é ${nome2} ${sobrenome}.`)

//Exercício 3: Controle de Fluxo
//Crie uma variável chamada idade e atribua a ela um valor numérico.
//Se a idade for maior ou igual a 18, imprima "Você é maior de idade".
//Caso contrário, imprima "Você é menor de idade".
//Crie uma variável nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, imprima "Aprovado", caso contrário, imprima "Reprovado".

const idade2 = 12

if (idade2 >= 18){
   console.log("Você é maior de idade") 
} else {
    console.log("Você é menor de idade") 
}

const nota = 7 
if (nota >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}


//Exercício 4: Funções
//Crie uma função chamada saudar, que recebe um parâmetro nome e imprime "Olá, [nome]!".
//Crie uma função soma que recebe dois parâmetros e retorna a soma desses dois números. Em seguida, chame essa função passando dois números e imprima o resultado.

function saudar(nome3){
    console.log(`Olá, ${nome3}`)
}
saudar("Lucas")

function soma(a, b) {
    const soma2 = a + b
    console.log(`A soma de ${a} + ${b} é ${soma2}`)
}
soma(4, 8)

//Exercício 5: Arrays
//Crie um array chamado frutas que contenha alguns nomes de frutas (ex: "maçã", "banana", "laranja").
//Imprima no console o nome da fruta na primeira posição do array.
//Adicione uma nova fruta ao final do array e imprima o array atualizado.
//Crie um array de números de 1 a 5. Utilize um loop for para imprimir cada número do array.

const frutas = [
    "maça",
    "banana",
    "perâ",
    "laranja"
]

console.log(`A primeira fruta é ${frutas[0]}`)

frutas.push("caqui")
console.log(`Frutas atualizadas: ${frutas}`)

const numeros = [1,2,3,4,5]
numeros.sort() //extra

for (let n = 0; i < numeros.length; n++) {
    console.log(numeros[n])
}

//Exercício 6: Objetos
//Crie um objeto chamado pessoa com as propriedades nome, idade e cidade.
//
//Imprima no console "Meu nome é [nome], tenho [idade] anos e moro em [cidade]."
//Acesse o valor da propriedade nome do objeto pessoa e imprima-o no console.

const pessoa = {
    nome: "Marina",
    idade: 18,
    cidade: "Limoeiro"
}

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}`)
console.log(`${pessoa.nome}`)


//Exercício 7: Arrow Functions
//Crie uma arrow function chamada multiplicar, que recebe dois parâmetros e retorna o resultado da multiplicação desses dois números.
//Crie uma função chamada quadrado que recebe um número e retorna o seu quadrado, utilizando uma arrow function.
//
//
//Exercício 8: Template Literals
//Crie uma variável nome e uma variável idade. Utilize template literals para criar uma string que imprima "Meu nome é [nome] e tenho [idade] anos."
//
//Crie uma função que recebe dois parâmetros e retorne uma string formatada com template literals: "A soma de [a] e [b] é [resultado]."



// ----------------------------------------------------------------------------------------------------------------------




// 1 Nível Básico → "Soma de Danos"
//Objetivo: Criar uma função que recebe um array de números e retorna a soma total deles.
//Dica: Use um for loop ou o método .reduce().

const numbers = [1, 2, 3, 4]

 // A cada iteração, somamos o valor atual ao acumulador
// O acumulador começa com 0

console.log(somaTotal)

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



// RESOLVA A MATRIZ 
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

let arr = [
    [11, 2,  4],   // linha 0 [i] |  coluna [n]
    [4,  5,  6],   // linha 1 [i] |
    [10, 8, -12]   // linha 2 [i] |
  ];

  function diagonalDifference(arr) {
    let somaPrincipal = 0
    let somaSecundaria = 0 
    
    let n = arr.length 
    
    for ( let i=0; i<n; i++) {
        somaPrincipal += arr[i][i]; //[i] linha + [i]  a posiçao do numero
        somaSecundaria += arr[i][n - 1 - i]; //[n] seria a coluna. O -1 acontece pois é de trás para frente 
    }
    
    return Math.abs(somaPrincipal - somaSecundaria);


}