//Destructuring é um recurso que transforma os itens de array e objeto
//em variáveis, simplificando assim a declraçÀo de várias var em 1 linha.

const frutas = ['maçã', 'banana', 'laranja'];

// Destructuring do array
const [primeira, segunda, terceira] = frutas;

console.log(primeira); // 'maçã'
console.log(segunda); // 'banana'
console.log(terceira); // 'laranja'


////////////////// Obejtos ////////////

const productDetails = {
    name: "teclado",
    price: 69.99,
    category: "periféricos",
    color: "branca"
}

const {name: productName, price, category: productCategory, color} = productDetails
//name: productName e category: productCategory é a alteração do nome pra variavel

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)