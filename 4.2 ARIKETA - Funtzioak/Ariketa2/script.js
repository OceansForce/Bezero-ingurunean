
function kontatu (){
    let esaldia=0;
    esaldia=  prompt("Zenbaki bat idatzi:");

    if (esaldia%2==0){
       return "Bikoitia da";
    }else{
        return "Bakoitia da";  
    }

    

}

document.getElementById("a").innerHTML=kontatu();