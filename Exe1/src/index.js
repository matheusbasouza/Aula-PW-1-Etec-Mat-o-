
function calculoA(b,c,d){
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
console.log();