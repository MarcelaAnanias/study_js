function tabuada() {
    let num = document.querySelector('#txtnum')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) { //Length verifica se o campo está vazio
    //sem o Length seria "valor igual a 0", com ele é "valor vazio".
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)// Transforma o num (texto) em número
        tab.innerHTML = ''; // Limpa as opções anteriores
        for(var c=1;c<=10;c++) {
            let item = document.createElement('option');
            //cria as opções dentro do <select> do HTML
            item.text = `${n} x ${c} = ${n*c}`;
            //define oq vai aparecer no select
            tab.appendChild(item); 
            //Adiciona uma nova opção ao elemento <select>
        }
    }
}