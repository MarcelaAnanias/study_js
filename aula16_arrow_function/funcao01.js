function parimp(n) {
    if (n%2 == 0) { //Ação
        return 'Par!' //Possível retorno
    } else {    //Ação
    return 'Ímpar!' //Possível retorno
    }
}
console.log(parimp(9)) //Chamada || (4) Parâmetro que substitui (n)


//UTILIZANDO ARROW FUNCTION
//A arrow function é uma forma mais concisa de escrever funções em JavaScript.

const parimp1 = (n) => {
    return n % 2 === 0 ? 'Par!' : 'Ímpar!';
}

{/* 
        (n): Representa os parâmetros da função. 
        =>: Substitui a palavra-chave function. 

        condição ? expressão_se_verdadeiro : expressão_se_falso;
        Estrutura do Operador Ternário 

 */}