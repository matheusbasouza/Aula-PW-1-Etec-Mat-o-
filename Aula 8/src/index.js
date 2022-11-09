const numeros = new Array(15, 13, 16, 22, 35, 87, 64, 19)
const nome = new Array ("Matheus", "Etec", "Matão")
const data = new Date ("09-11-2022")

function dataComNumeros(){

    let juntos = numeros.concat(nome)
    console.log(numeros.sort(function(a, b){return a-b}))
    console.log(juntos)
    juntos.splice(3, 0, "Fatec", "Baldan")
    console.log(juntos)
    console.log(data)
    console.log(data.getFullYear())
}

let html=""

numeros.forEach(function(valor, indice, array){
    html += valor + "posição |" + indice + " | " 
})

console.log(html)