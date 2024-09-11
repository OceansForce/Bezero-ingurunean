function zatigarri(){
    let zenb1= prompt("Zenbaki bat jarri");

    for (i=1; i<=zenb1; i++){
        if (zenb1%i==0){
            document.getElementById("a").innerHTML+=i+"-";
        }
    }
}