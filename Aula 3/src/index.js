/* function calculoA(b,c,d){
    return (b*c)/d;
}
function calculoB(a,c,d){
    return (a*d)/c;
}
function calculoC(b,a,d){
    return (a*d)/b;
}
function calculoD(b,c,a){
    return (b*c)/a;
}
function calculaRegra(a,b,c,d){
    if (a==0){
        return calculoA(b,c,d);
    }
    else if (b==0){
        return calculoB(a,c,d);
    }
    else if (c==0){
        return calculoC(b,a,d);
    }
    else{
        return calculoD(b,c,a);
    }
}
console.log(calculaRegra(100,320,40,0));
*/




function calculaH(co, ca){
    return (Math.sqrt((ca*ca)+(co*co)));
}
function calculaCa(co, h){
    return (Math.sqrt((co*co)-(h*h)));
}
function calculaCo(h, ca){
    return (Math.sqrt((Math.pow(ca, 2)-Math.pow(h, 2))));
}
function calculaPitagoras(h, ca,co){
    if (h==0){
        return calculaH (ca,co);
    }
    else if (ca==0) {
        return calculaCa(h,co);
    }
    else if (co==0) {
        return calculaCo(ca,h);
    }
}

function abastecePitagoras(){
    let h = document.getElementById("h").value;
    let ca = document.getElementById("ca").value;
    let co = document.getElementById("co").value;

    console.log(calculaPitagoras(h, ca, co));
    document.getElementById("resultado").innerHTML=calculaPitagoras(h, ca, co);
}
