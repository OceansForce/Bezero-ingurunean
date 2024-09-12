function batura(){
    let zenb1=0;
    let bikoitia=0;
    let bakoitia=0;
    let boolean= true;
    while(boolean){
        zenb1= prompt("zenbaki bat sartu");
        if (zenb1==0){
            boolean=false;
        }

        if (zenb1%2==0){
            
            bikoitia++;
        }else {
            bakoitia++;
        }
        document.getElementById("a").innerHTML="Bakoitia="+bakoitia;
        document.getElementById("b").innerHTML="Bikoitia="+bikoitia;
    }
    
}