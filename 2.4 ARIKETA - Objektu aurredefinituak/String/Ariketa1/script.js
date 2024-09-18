
function number(){

    let izena= prompt("izen eta bizenak jarri jarri:");
    const lista= izena.split(" ");

    if (lista.length>=3){
        document.getElementById("a").innerHTML=izena[0]+" "+lista[1]+" "+lista[2][0].toUpperCase()+" "+lista[0].length+" "+lista[1].length+" "+lista[2].length;
    }else{
        document.getElementById("a").innerHTML=izena[0]+" "+lista[1]+" "+lista[0].length+" "+lista[1].length;
    }
    
}
