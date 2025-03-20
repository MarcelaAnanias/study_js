const a1 = [1, 2, 3] //Array
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2] //Spread Operator representado por "..."" 

console.log(a3) //É a união de 2 array e objetos, criando assim um novo array 

const a4 = [0, ...a1, 4] //outro exemplo

console.log(a4)

//////////// Objeto //////////////

const makName = {name: 'Maquiagem'}
const makMarca = {marca: 'Eudora'}
const outrasInf = {tipo: 'Base', price: 89.90}

const makeup = { ...makName, ...makMarca, ...outrasInf, cor: 2} //União de Objetos representado por ...

console.log(makeup)