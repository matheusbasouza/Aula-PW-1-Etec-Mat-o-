var frutas = new Array('laranja', 'manga', 'abacaxi', 'uva', 'menlancia');

function abasteceVetorOrganizado(fruta){
    frutas.sort()
    frutas.push(frutas)
    return frutas.join(" | ")
}

console.log(abasteceVetorOrganizado('limão'))
console.log(abasteceVetorOrganizado('goiaba'))
console.log(abasteceVetorOrganizado('melão'))