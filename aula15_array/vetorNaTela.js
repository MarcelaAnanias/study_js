let valores = [9,2,7,3]
valores.sort()
/*
for(let pos=0; pos < valores.length; pos++) { 
//Leitura: Enquanto pos(posiçao) que foi iniciada com 0
//for menor do que a posição do vetor adicione mais 1. Isso mostrara as posições dos vetores
//com seu respectivo dados sem precisar por vários console.log ou console.log(valores)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){ //Leitura: Para cada pos(posiçao) no valores(vetor/array) mostre no console.log
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //Forma atualizada e simplificada do cód 
}
//Este formato só serve para variaveis compostas 