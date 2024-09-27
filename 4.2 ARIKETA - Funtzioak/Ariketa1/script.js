
function kontatu (){
    let esaldia="";
    esaldia=  prompt("Esaldi bat idatzi");

    document.getElementById("a").innerHTML="Letra cantitatea= "+esaldia.length;
    document.getElementById("b").innerHTML="Maiuskula cantitatea= "+esaldia.match(/[A-Z]/g).length;
    document.getElementById("c").innerHTML="Xehe cantitatea= "+esaldia.match(/[a-z]/g).length;

}