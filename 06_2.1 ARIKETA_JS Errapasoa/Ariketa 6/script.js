function bokalak(){
    let esaldi= prompt("Esaldia idatzi");
    let esaldi2="";
    for ( i=0; i<esaldi.length; i++){
        if (esaldi.charAt(i)==="a" || esaldi.charAt(i)==="e" || esaldi.charAt(i)==="i" || esaldi.charAt(i)==="o" || esaldi.charAt(i)==="u" ||esaldi.charAt(i)==="A" || esaldi.charAt(i)==="E" || esaldi.charAt(i)==="I" || esaldi.charAt(i)==="O" || esaldi.charAt(i)==="U"){
            esaldi2= esaldi2+esaldi.charAt(i);
            console.log(esaldi.charAt(i));
        }
    }
    
    document.getElementById("a").innerHTML=esaldi2;
}