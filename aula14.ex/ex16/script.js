function contar(){
    var início = document.querySelector('#txti');
    var fim = document.querySelector('#txtf');
    var passo = document.querySelector('#txtp');
    var res = document.querySelector('div#res');
    
    // Verifica se algum dos campos de entrada está vazio
    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Dados incompletos!');
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(início.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if (p <=0 ){
            alert('Passo inválido! Considerando como PASSO1')
            p = 1
        }

        if (i < f) {
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
        
    }
}

