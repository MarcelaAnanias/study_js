let num = [5,8,2,9,3]
num.push(1)//Adiciona um dado ao vetor
num.sort()//Coloca o vetor/array em ordem
console.log(num) //Como não tem string coloco direto a var
console.log(`O vetor tem ${num.length} posições`)//length mostra posições do vetor/array
console.log(`O primeiro número do vetor é ${num[0]}`)

let pos = num.indexOf(9)//Mostra em que chave se encontra o dado. Se o dado não for encontrado retorna -1
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor está na posição ${pos}`)
}
