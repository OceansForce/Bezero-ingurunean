function zatigarri(){
    let zenb1= prompt("Zenbaki bat jarri");

    if (zenb1%2==0){
        document.getElementById("a").innerHTML="2";
        
    }

    if (zenb1%3==0){
        if (zenb1%5==0 && zenb1%7==0 && zenb1%2==0){
            document.getElementById("a").innerHTML+=", 3";
        }else if(zenb1%2!=0){
            document.getElementById("a").innerHTML+="3";
        }else{
            document.getElementById("a").innerHTML+=" eta 3";
        }
    }

    if (zenb1%5==0){
        if (zenb1%7==0 && zenb1%3==0){
            document.getElementById("a").innerHTML+=", 5";
           
        }else if(zenb1%3!=0){
            document.getElementById("a").innerHTML+="5";
        }else{
            document.getElementById("a").innerHTML+=" eta 5";
        }
    }

    if (zenb1%7==0 && (zenb1%5==0 || zenb1%3==0 || zenb1%2==0)){
        document.getElementById("a").innerHTML+=" eta 7";
    }else{
        document.getElementById("a").innerHTML+="7";
    }

    document.getElementById("a").innerHTML+=" zenbakiekin zatigarria da.";
  
}