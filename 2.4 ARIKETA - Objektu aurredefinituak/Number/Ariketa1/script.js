
function number(){

    let zenb1= parseInt(prompt("Zenbaki bat jarri:"));

    document.getElementById("a").innerHTML=Math.exp(zenb1);
    document.getElementById("b").innerHTML= Math.exp(zenb1).toFixed(4);
}
