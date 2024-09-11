function handiena(){
    zenb1= prompt("Zenbaki bat jarri");
    zenb2= prompt("Beste zenbaki bat jarri");
    
    if (zenb1>=zenb2){
        document.getElementById("a").innerHTML=zenb1;
    }else if (zenb1<=zenb2){
        document.getElementById("a").innerHTML=zenb2;
    }
}