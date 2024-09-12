function batura(){
    let boolean=true;

    let zenb1= prompt("Sartu pisua");

    let max=zenb1;
    let min=zenb1;

    while(boolean){
        let zenb1= prompt("Sartu pisua");
       
        if(parseInt(max)<parseInt(zenb1)){
            max=zenb1;
        }

        if (parseInt(min)>parseInt(zenb1) && parseInt(zenb1)!=0 && parseInt(zenb1)>0){
            min=zenb1;
        }

        if (parseInt(zenb1)<=0){
            boolean=false;
        }
    }
    document.getElementById("a").innerHTML="Maximoa="+max;
    document.getElementById("b").innerHTML="Minimoa="+min;
}