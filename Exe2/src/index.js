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



function calculaNumeros(n1, n2, op){
    if(op == "+"){
        return (n1 + n2);
    } 
    else if (op == "-") {
        return (n1 - n2);
    }
    else if (op == "/"){
        return (n1 / n2);
    }
    else if (op == "*"){
        return (n1 * n2);
    }
    else if (op == "raiz"){
        return Math.sqrt(n1 + n2);
    }
    else if (op == "potencia"){
        return Math.pow(n1,n2);
    }
    else {
        return ("Erro!!");
    }
}



function calculaAvancado(opcao, p1, p2, p3, p4){
    switch (opcao){
        case "pitagoras":
            return calculaPitagoras(p1, p2, p3);
            break;
        case "regra":
            return calculaRegra(p1, p2, p3, p4);
            break;
        case "calculadora":
            return calculaNumeros(p1, p2, p3);
            break;
        default:
            return "Este comando não existe !";
    }
}

console.log(calculaAvancado("pitagoras", 0 ,20, 21, null ));
console.log(calculaAvancado("regra", 100 ,320, 40, 0 ));
console.log(calculaAvancado("calculadora", 20 , 20 , "+", null ));