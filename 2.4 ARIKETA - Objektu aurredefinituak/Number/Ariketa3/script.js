
function number(){

    let zenb1= prompt("Pasaitza jarri:");

    if (zenb1.length>16 || zenb1.length<8){
        document.getElementById("a").innerHTML+="Karaktere katea 8 eta 16-ren artean egon behar da - ";
    }
    if (!(/[A-Z]/.test(zenb1))){
         document.getElementById("a").innerHTML+="Letra larria falta da - ";
    }
    if (!(/[a-z]/.test(zenb1))){
        document.getElementById("a").innerHTML+="Letra txikia falta da - ";
    } 
    if (!(/[0-9]/.test(zenb1))){
         document.getElementById("a").innerHTML+="Zenbakia falta da - ";
    }
    if (!(/[-_@#$%&]/.test(zenb1))){
            document.getElementById("a").innerHTML+="Karaktere berezia falta da - ";
    }

}
