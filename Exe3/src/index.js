/* 
Monte um vetor de 6 lugares que irá sortear 6 numeros entre 1 e 60 aleatoriamente, com as seguintes condições:
1. Os 6 numeros não podem ser iguais.
2. Eles devem ser compreendidos em ordem crescente.
3. Os 3 primeiros numeros não devem estar na casa 0 ao 20, e do 21 ao 45.
4. Os 3 ultimos devem estar na casa dos 46 ao 55, e o ultimo 56 ao 60. 
*/

function encontrarVetor()

const numeros = 6
const vetor1 = 1
const vetor2 = 60

let vetor=""

points.sort(function(){return 1 - Math.random()});
document.getElementById(vetor).innerHTML = points;

numeros.forEach(function(vetor1, vetor2, array){
    vetor += vetor1 + "posição |" + vetor2 + " | " +array
})

console.log(vetor)