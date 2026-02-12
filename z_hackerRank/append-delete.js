
//🟢 1️⃣ Nível Inicial – Prefixo Comum
//📌 Problema
//Dadas duas strings s e t, retorne o tamanho do maior prefixo comum entre elas.

s = "hacker"
t = "hackathon"

function appendAndDelete(s, t) {
    let commonLength = 0;

    for (let i = 0; i < Math.min(s.length, t.length); i++) { //Math.min para garantir que o loop não ultrapasse o comprimento de s
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }
    return commonLength;
}

console.log(appendAndDelete(s, t))

///////////////////////////////////////////////////////////////////////////////////////////////////

//🟢 2️⃣ Nível Intermediário – Transformação Mínima
//Dadas duas strings s e t, calcule o número mínimo de operações necessárias para transformar s em t, onde você pode

a = "abcd"
b = "abcdert"

function appendAndDelete2(a, b) {
    let commonLength2 = 0;

    for (let i = 0; i < Math.min(a.length, b.length); i++){
        if (a[i] === b[i]) {
            commonLength2++;
        }
        else {
            break;
        }
    }
    return a.length + b.length - 2 * commonLength2;
}

console.log(appendAndDelete2(a, b))


