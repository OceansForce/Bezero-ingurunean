function batura(){
    let text1= prompt("Idatzi textu bat");
    const text2= [];
    let zenb=0;
    for (i=0; i<text1.length; i++){
        text2 [i]=text1.charAt(i);
    }

    for (a=0; a<text2.length; a++){
        if (text2[a]==="a" || text2[a]==="A"){
            zenb++;
        }
    }
    document.getElementById("a").innerHTML=zenb;
}