let v = function(x) {
    return x*2
}

console.log(v(5))


//UTILIZANDO ARROW FUNCTION
//A arrow function é uma forma mais concisa de escrever funções em JavaScript.

let v1 = (x) => {
    return x * 2;
}

console.log(v1(5)); // Isso também vai imprimir 10 no console


{/*
    Retorno Implícito: Quando o corpo da função é uma única expressão, o resultado dessa expressão é 
    retornado automaticamente, então você não precisa usar a palavra return ou envolver a expressão em chaves {}.

    */}

    let v2 = x => x * 2;

console.log(v2(5)); // Isso ainda vai imprimir 10 no console
