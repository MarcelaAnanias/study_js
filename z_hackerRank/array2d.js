//O que queremos fazer?
//Percorrer todas as possíveis posições de hourglass dentro da matriz.
//Para cada uma, calcular a soma dos 7 elementos.
//Guardar a maior soma de todas.


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