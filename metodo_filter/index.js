const array = [1, 2, 3, 4 ,5] //Array/Vetor

console.log(array)

const numCresc = array.filter((n)=> { // filter = filtro da array
    if(n >= 3) { //nesse caso, vai filtar os num maiores ou igual a 3
        return n //O n é como o nome temporário que você dá para cada número dentro da array
    } // ou seja 1, 2, 3, 4 ,5, vão ser chamados de n e o que for maior que três aparece 
})

console.log(numCresc)


/////////////////////////////


const user = [
    {name: "Pedro", available: true},
    {name: "Tiago", available: true},
    {name: "João", available: true}, //ARRAY [] COM OBJETOS {}
    {name: "Judas", available: false}
]

const avaliarUsers = user.filter((user) => user.available) //available identifica booleans true
const notAvaliadosUsers = user.filter((user => !user.available)) // ! = not, sendo assim retorna false

console.log(avaliarUsers)
console.log(notAvaliadosUsers)