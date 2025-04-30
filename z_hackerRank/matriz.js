// ----------------------------------------------------------------------------------------------------------------------


// RESOLVA A MATRIZ 1
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

let arr = [
    [11, 2,  4],   // linha 0 [i] |  coluna 0 [i]
    [4,  5,  6],   // linha 1 [i] |  coluna 1 [i]
    [10, 8, -12]   // linha 2 [i] | coluna 2 [i]
  ];

  function diagonalDifference(arr) {
    let somaPrincipal = 0
    let somaSecundaria = 0 
    
    let n = arr.length 	//Tamanho da matriz (linhas/colunas) = n 3x3
    
    for ( let i=0; i<n; i++) { // i começa com 0 e enquanto for menor que n (tamanho da matriz), ele anda uma linha e uma coluna ou seja [0][0], [1][1] e [2][2]
        somaPrincipal += arr[i][i]; //[i] linha + [i]  coluna
        somaSecundaria += arr[i][n - 1 - i]; //O -1 acontece pois é de trás para frente e tem que começar do 0
    }
    
    return Math.abs(somaPrincipal - somaSecundaria);


}


// RESOLVA A MATRIZ 2
//Soma dos elementos nas bordas da matriz
//OBS: Quando repito a coluna, exemplo: [0][1], [0][2], será necessario 2 variveis, uma para linha e outra pra coluna.

let arrTotal = [
    [1, 2, 3],   
    [4,  5, 6],  
    [7, 8, 9]
]

  function totalBorda(arrTotal) {
    
    let a = arrTotal.length //a = 3
    let soma = 0
    
    for ( let j=0; j < a; j++) { //para linha
        for (let b = 0; b < a; b++) { //para coluna

            if(j === 1 && b===1){
                continue;         //pula a casa [1][1] que é o meio
            } 

            soma += arrTotal[j][b];
        }
    }
    return console.log(soma)
}



// RESOLVA A MATRIZ 3
//Somar Somente os Cantos da Matriz

let matriz = [
    [1,  2,  3],
    [4,  5,  6],
    [7,  8,  9]
];

    function totalCantos(matriz) {

        let c = matriz.length //c = 3x3
        let somaCantos = 0

        for (let d = 0; d < c; d++){ //linhas
            for (let e = 0; e < c; e++ ) { //colunas
                if ((d === 0 || d === c - 1) && (e === 0 || e === c - 1 )){
                    somaCantos += matriz[d][e]
                }
            }
        }
        return somaCantos;
    }
