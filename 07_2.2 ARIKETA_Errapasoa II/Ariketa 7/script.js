function batura(){
    
    let zenb1= prompt("Sartu zenbaki bat");
    let zenb2=0;
    for (i=1; i<zenb1;i++){
        if (zenb1%i==0){
            zenb2=zenb2+i;
        }
    }
    if (zenb1==zenb2){
        document.getElementById("a").innerHTML="Perfektua da";
    }else{
        document.getElementById("a").innerHTML="Ez da perfektua";
    }
   
    
}