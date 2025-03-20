const produtos = [
    {nome:'Camisa', preço: 15.00, categoria:'Roupas'},
    {nome:'Chaleira Elétrica', preço: 49.99, categoria:'Eletro'},
    {nome:'Fogão', preço: 750.00, categoria:'Eletro'},
    {nome:'Calça Jeans', preço: 69.00, categoria:'Roupas'},
]

const produtocomDesconto = produtos.map((desconto) => {
    if(desconto.categoria === 'Roupas') {
        desconto.preço = desconto.preço - (desconto.preço * 0.10) //Modifica o Array de Objetos
    } else {

    }
    return desconto
        
})

console.log(produtocomDesconto)
console.log(produtos)

/////////////////////////////


const numeros = [1, 2, 3, 4, 5];

// Usando map para criar um novo array onde cada número é multiplicado por 2
const numerosMultiplicados = numeros.map((num) => num * 2);

console.log(numeros); // [1, 2, 3, 4, 5] (array original, inalterado)
console.log(numerosMultiplicados); // [2, 4, 6, 8, 10] (novo array)

//quando se trata só de um array o map só cria um novo, sem alterar o original, mas quando se trata de 
//um objeto ou array de objetos ele modifica tanto o original quanto a cópia, sendo necessario usar o {...produto} para não alterar o array original;.