function batura(){
    zenb1= prompt("Zenbaki bat jarri");
    zenb2= prompt("Beste zenbaki bat jarri");
    zenb3=parseInt(zenb1)+parseInt(zenb2);
    document.getElementById("batura").innerHTML=zenb1+"+"+zenb2+"="+zenb3;
}