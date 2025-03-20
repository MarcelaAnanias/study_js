function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO] Coloque um ano valido!')
    } else {
        var msex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)//ano atual menos(-) o valor digitado para calcular a idade
        var genero = ''
        var img = document.createElement('img') //Armazena campo da imagemk direto pelo JS
        img.setAttribute('id', 'foto')// id para o IMG se torna FOTO
        // Seleciona qual botão de rádio vai ser para o gênero Homem
        if (msex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bb-m.jpg')
            }else if (idade <25) {
                //Jovem
                img.setAttribute('src', 'jovem_m.jpg')
            } else if (idade <59) {
                //Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (msex[1].checked) {
            genero ='Mulher'
            if (idade >=0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bb-f.jpg')
            }else if (idade <25) {
                //Jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade <59) {
                //Adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }

        // Adicionar estilos CSS diretamente
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)  // Adiciona a imagem criada como filho da div 'res'
    }
}
