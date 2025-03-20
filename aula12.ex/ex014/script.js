function carregar() {
    var msg = document.querySelector ('div#msg')
    var img = document.querySelector ('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var saudacaoTexto = '' // Variável para armazenar a saudação e faz
    //aparecer de acordo com a hora
    msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos.`
    if (hora >= 0 && hora < 12){
        saudacaoTexto = 'Bom dia!'
        img.src = 'fotodia.jpg'
        document.body.style.background ='#f2c83e'
    } else if (hora >= 12 && hora < 18) {
        saudacaoTexto = 'Boa tarde!'
        img.src = 'fototarde.jpg'
        document.body.style.background ='#fb5a83'
    } else {
        saudacaoTexto = 'Boa noite!'
        img.src = 'fotonoite.jpg'
        document.body.style.background ='#0e7071'
    }
      // Adiciona a saudação à mensagem
      saudacao.innerHTML = saudacaoTexto;
}
