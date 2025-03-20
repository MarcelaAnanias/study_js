class Produtos { //Class mãe, superclass, etc
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

class ProdutosMais extends Produtos {
    constructor (name, price, colors) {
        super(name, price) //Super herda e inicializa as caracteriscas da class mãe 
        this.colors = colors
    }

    mostrarCores() {
        console.log('As cores são:')
        this.colors.forEach((cor) =>{ //forEach //Ele vai "andar" por cada item da lista e fazer algo com esse item.
            console.log(cor) //Nessa caso, ele vai mostrar todas as cores dentro do array
        } )

    }
}

const hat = new ProdutosMais('Chapéu',40.00, ['Preto', 'Verde', 'Azul'])

console.log(hat.name)
console.log(hat.produtoComDesconto(20))
hat.mostrarCores()