
function aktibatu(){
    document.getElementById("a").innerHTML=idatzi();
}


function idatzi(){

    let textua= prompt("Idatzi textua");
    let textua2= textua.split("");
    let text_hutsune_gabe=[];
    let text_hutsune_gabe2=[];
    let count=0;
    let count2=0;


    for (i=0; i<textua2.length; i++){
        if (textua2[i]!==" "){
           text_hutsune_gabe[count]=textua2[i];
           text_hutsune_gabe2[count]=textua2[i];
           count++;
        }
    }

    text_hutsune_gabe2.reverse();

    for (i=0; i<text_hutsune_gabe.length; i++){
        if (text_hutsune_gabe[i].toUpperCase()==text_hutsune_gabe2[i].toUpperCase()){
           count2++;
        }
    }

    if (count2==text_hutsune_gabe.length){
        return "palindromoa da" ;
    }else{
        return "Ez da palindromoa";
    }

}

