function batura(){
    let boolean=true;
    let batura=0;
    while(boolean){
        let zenb1= prompt("Sartu pisua");
        batura= batura+zenb1;
        if(batura>200){
            boolean=false;
        }
        document.getElementById("a").innerHTML=batura;
    }
}