var agora = new Date()
var hora = agora.getHours() // para ver a hora atual do sistema 
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <12) {
    console.log ('Bom dia!')
} else if (hora <= 18){ // condições ALINHADAS
    console.log ('Boa Tarde!')
} else {
    console.log ('Boa noite!')
}