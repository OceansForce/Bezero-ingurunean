function batura(){
    
    let zenb1= prompt("Sartu zenbaki bat");
    let zenb2= prompt("Sarti beste zenbaki bat");
    let zenb3=0;

    const zatitzaileak=[];
    
    for (i=0; i<zenb1;i++){
        if (zenb1%i==0){
            zatitzaileak [zenb3]= i;
            zenb3++;
        }
    }

    for(a=0; a<zenb2;a++){
        
       document.getElementById("a").innerHTML+=zatitzaileak[a]+"-";
    }
    
}