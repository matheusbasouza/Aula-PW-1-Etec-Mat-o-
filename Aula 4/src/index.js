function executarTraducao(){
    let texto = document.getElementById("ing").ariaValueMax;
    switch(texto){
        case "good morning":
            return "Bom dia";
            break;
        case "good afternoon":
            return "Boa tarde";
            break;
        case "good night":
            return "Boa noite";
            break;
        default:
            return "Fora da tradução";
    }
}
function fazTraducao(){
    document.getElementById("port").innerHTML=executarTraducao();
}