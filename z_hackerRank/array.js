//Exercício 5: Arrays
//Crie um array chamado frutas que contenha alguns nomes de frutas (ex: "maçã", "banana", "laranja").
//Imprima no console o nome da fruta na primeira posição do array.
//Adicione uma nova fruta ao final do array e imprima o array atualizado.


const frutas = [
    "maça",
    "banana",
    "perâ",
    "laranja"
]

console.log(`A primeira fruta é ${frutas[0]}`)

frutas.push("caqui")
console.log(`Frutas atualizadas: ${frutas}`)

//Crie um array de números de 1 a 5. Utilize um loop for para imprimir cada número do array.

const numeros = [1,2,3,4,5]
numeros.sort() //extra

for (let n = 0; i < numeros.length; n++) {
    console.log(numeros[n])
}
