let num = document.querySelector("#txtnum")
let tab = document.querySelector("#tabadi")
let res = document.querySelector("#res")
let numArray = []

function isNumero(n) {
    if(Number(n) >= 1 && num.value <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) { //!= Não. Ou seja se o "num" já estiver na lista retorna false, se não true
        return true; 
    } else {
        return false; 
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, numArray)) {
        numArray.push(Number(num.value))
        numArray.sort((a,b) => a - b)

        tab.innerHTML = ''

        for (let num of numArray) {
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado`
        item.value = num 
        tab.appendChild(item)
            }    
        } else {
            alert('Por favor, digite um número valido!')
        }
}


function finalizar() {
    res.innerHTML = `Ao todo, temos ${numArray.length} números cadastrados <br>`
    res.innerHTML += `O menor valor informado foi ${numArray[0]} <br>`
    res.innerHTML += `O maior valor informado foi ${numArray[numArray.length - 1]} <br>`
}