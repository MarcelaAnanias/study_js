class Produtos {
    constructor(name, price) { //O comando constructor é a fábrica onde os objetos e suas propriedades iniciais são criadas.
    //e para acessa-los só usar o this
        this.name = name //Aqui estou acessando e dizendo que valor de name vai ser 
        //o que for passado para ela. (não posso só acessar, preciso atribuir um valor)
        this.price = price 
    }

    produtoComDesconto = (desconto) => {
        return this.price * ((100 - desconto) / 100) //100 se refere a 100% do valor, após eu 
        //atribuir o valor do desconto ele sera subtraido. Por exemplo 100-50 = 50% de desconto
    }
}

const shirt = new Produtos("Camisa golva V", 20) //Criando um produto e seus valores, que já vão ser retornados com o desconto acima

console.log(shirt.name)
console.log(shirt.produtoComDesconto(50)) //Definindo 50% de desconto

const livro = new Produtos("A lágrima de vridro", 60)

console.log(livro.name)
console.log(livro.produtoComDesconto(10))