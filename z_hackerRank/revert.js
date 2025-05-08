//revertendo array 

let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // Saída: [3, 2, 1]


//Criar uma cópia reversa (sem modificar o original)


let arr2 = [1, 2, 3];
let reversed = [...arr2].reverse(); // ou arr.slice().reverse()
console.log(reversed); // Saída: [3, 2, 1]
console.log(arr2);      // Original permanece: [1, 2, 3]