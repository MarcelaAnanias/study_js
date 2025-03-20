function soma(n1=0, n2=0) { //Parâmetros Opcionais, caso não seja dados parâmetros na chamada
    return n1 + n2
}

console.log(soma(5))



//UTILIZANDO ARROW FUNCTION
//A arrow function é uma forma mais concisa de escrever funções em JavaScript.

const soma1 = (n1 = 0, n2 = 0) => {
    return n1 + n2;
}

console.log(soma1(5)); // Isso também vai imprimir 5 no console


{/*
    Retorno Implícito: Quando o corpo da função é uma única expressão, o resultado dessa expressão é 
    retornado automaticamente, então você não precisa usar a palavra return ou envolver a expressão em chaves {}.

    */}

    const soma2 = (n1 = 0, n2 = 0) => n1 + n2;

    console.log(soma2(5)); // Isso ainda vai imprimir 5 no console
    
    
