
//Calcule quantas vezes o maior número aparece no array

candles = [4, 4, 1, 3]

function birthdayCakeCandles(candles) {
    const numMax = Math.max(...candles) //Usando 'Math.max' que pega o maior valor do array
    
    const biggerNum = candles.filter((candle) => { 
        return candle === numMax //filtra os que correspondem com numMax
    })
    
    return biggerNum.length; //Length retorna em quantidade
}

console.log(birthdayCakeCandles(candles))

//const biggerNum = candles.filter(candle => candle === numMax); poderia ser assim também, onde 
//return é automatico.



///////////////////////////////////////////////////////////////////////////////////////////////////


//Dado um array de números representando as notas de uma turma, conte quantos alunos tiraram acima da média da turma.

notas = [70, 80, 90, 100]; //

function media(notas){
    const somaNotas = notas.reduce((acumulater, valorAtual) => { //Calculando total das notas
        return acumulater + valorAtual
    }, 0)

    const mediaNotas = somaNotas / notas.length; //Calcando a média = 85

    const filterMedia = notas.filter((nota) => nota >= mediaNotas) //Filtrando

    return filterMedia.length;
}

console.log(media(notas))

