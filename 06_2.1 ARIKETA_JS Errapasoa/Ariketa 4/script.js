function handiena(){
    zenb1 = prompt("Zenbaki bat jarri");
    zenb2 = prompt("Beste bat jarri");
    zenb3 = prompt("Beste bat jarri");

    if(zenb1>=zenb2 && zenb1>=zenb3){
        document.getElementById("a").innerHTML=zenb1;
    }else if(zenb2>=zenb1 && zenb2>=zenb3){
        document.getElementById("a").innerHTML=zenb2;
    }else if(zenb3>=zenb2 && zenb3>=zenb1){
        document.getElementById("a").innerHTML=zenb3;
    }
}