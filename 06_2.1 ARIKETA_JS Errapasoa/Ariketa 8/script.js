function zatigarri(){
    let zenb1= prompt("Zenbaki bat jarri");

    let zenb2= prompt("Zatigarria");

    if(zenb1%zenb2==0){
        document.getElementById("a").innerHTML= zenb2+" zenbakiarekin zatigarria da.";
    }else{
        document.getElementById("a").innerHTML= "Ez da zenbakiarekin zatigarria";
    }
    
  
}