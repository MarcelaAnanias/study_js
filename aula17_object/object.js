let amigo = {
    nome: 'Ana',
    sexo: 'F',
    peso: 86.0,
    
    engordar(p) {

        if(p > 0) {
            console.log('engordou')
        } else {
            console.log('não engordou')
        }
        this.peso += p //this é necessário para apontar as propriedades dentro do objeto
    }
}
amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)