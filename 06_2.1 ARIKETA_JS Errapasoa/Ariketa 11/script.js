function zatigarri(){
    let zenb1= prompt("Zenbaki bat jarri");

    const array1= [];
    let count1=0;

    for (i=1; i<=zenb1; i++){
        if (zenb1%i==0){
            array1[count1]=i;
            count1++;
        }
    }

    if (count1==2){
        if(array1[0]==1 && array1[1]==zenb1){
            document.getElementById("a").innerHTML=zenb1+" Zenbaki lehena.";
        }
    }else{
        document.getElementById("a").innerHTML=" Ez da zenbaki lehena.";
    }

}