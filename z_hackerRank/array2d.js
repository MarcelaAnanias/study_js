//O que queremos fazer?
//Percorrer todas as possíveis posições de hourglass dentro da matriz. 
//Para cada uma, calcular a soma dos 7 elementos em formato de ampulheta.
//Guardar a maior soma de todas.

//a b c  Formato da Ampulheta 
// d  
//e f g


let arr3 = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0,-2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

    function hourglass(arr3) {
        let maxSum = -63; 

        for (let i = 0; i <= 3; i++) {
          for (let j = 0; j <= 3; j++) {
                let top = arr3[i][j] + arr3[i][j+1] + arr3[i][j+2];
                let middle = arr3[i+1][j+1];
                let bottom = arr3[i+2][j] + arr3[i+2][j+1] + arr3[i+2][j+2];
        
                let sum = top + middle + bottom;
        
                if (sum > maxSum) {
                    maxSum = sum;
                }
            }
        }
        return maxSum;
    }

console.log(hourglass(arr3))



//Desafio de treino: Soma da cruz em matriz 2D
//Dada uma matriz 5x5 de inteiros, encontre a maior soma que pode ser feita com este formato de cruz (sem percorrer): 
//  b  
//a c d  
//  e

const matriz = [
    [0, 0, 0, 0, 0], // índice da linha: 0
    [0, 1, 1, 1, 0], // índice da linha: 1
    [0, 1, 9, 1, 0], // índice da linha: 2
    [0, 1, 1, 1, 0], // índice da linha: 3
    [0, 0, 0, 0, 0], // índice da linha: 4
  ];
  // índices da coluna:  0  1  2  3  4

function cruz(matriz) {
    let max = 3; 

    for (let a = 1; a <= 3; a++) { // a = inicia a linha no índice 1 até 3 da matriz
      for (let b = 1; b <= 3; b++) { // b = inicia a coluna no índice 1 até 3 da matriz

            let centro = matriz[a][b]; //aqui inicia no [2][2]
            let cima = matriz[a-1][b]; //como iniciei no centro, para subir tem que ter o -1
            let baixo = matriz[a+1][b]; // e para descer +1 kkkk
            let esquerda = matriz[a][b-1];
            let direita =  matriz [a][b+1];
    
            let sum = centro + cima + baixo + esquerda + direita;
    
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

console.log(cruz(matriz))



//🧠 Desafio 2 — “Soma do X”
//Use este formato agora (formato de X):
//a   b
//  c
//d   e
//Encontre a maior soma desse "X" dentro de uma matriz 5x5.


const matrizX = [
    [5, 0, 5, 0, 5],
    [0, 8, 0, 8, 0],
    [5, 0, 9, 0, 5],
    [0, 8, 0, 8, 0],
    [5, 0, 5, 0, 5],
];

function X(matrizX){

    let maxX = -Infinity; // começa com o menor possível

    for (let l = 1; l <=3; l++){
        for (let c = 1; c <=3; c++){

            let centro = matrizX[l][c];
            let cimaL = matrizX[l-1][c-1]
            let cimaR = matrizX[l-1][c+1]
            let baixoL = matrizX[l+1][c-1]
            let baixoR = matrizX[l+1][c+1]

            let somaX = centro + cimaL + cimaR + baixoL + baixoR
            
            if ( somaX > maxX){
                maxX = somaX
            }
        }
    }
    return maxX
}

console.log(X(matrizX))