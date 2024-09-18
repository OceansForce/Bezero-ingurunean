
function data(){
    let zenb1= parseInt(prompt("Radioa jarri:"));
    let dia=zenb1+zenb1;
    let zirku=2*Math.PI*zenb1;
    let azal=Math.PI*Math.pow(zenb1,2);
    let bolu=(3/4)*Math.PI*Math.pow(zenb1,3);
    document.getElementById("a").innerHTML="Diametroa: "+dia;
    document.getElementById("b").innerHTML="Zirkunferentzia: "+zirku;
    document.getElementById("c").innerHTML="Azalera: "+azal;
    document.getElementById("d").innerHTML="Bolumena: "+bolu;
}
