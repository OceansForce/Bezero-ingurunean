
function aktibatu(){
    document.getElementById("a").innerHTML="Letra kantitatea= "+idatzi();
}


function idatzi(){

    let textua= prompt("Idatzi textua");
    let textua2= textua.split("");
    let count=0;
    textua2.forEach(element => {
        if (element!==" "){
            count++;
        }
    });

    return count;
}

