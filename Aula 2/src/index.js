function calculaNumeros(n1, n2,){
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

console.log(calculaNumeros(2, 2, "raiz"));