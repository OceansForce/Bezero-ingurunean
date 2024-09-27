
function idatzi(){
    document.getElementById("a").innerHTML=kontatu();
}

function kontatu(){
    let zenbakia= prompt("Dni-a idatzi");
    let letrak = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (zenbakia>0 && zenbakia<99999999 ){
        return zenbakia+""+letrak[zenbakia%23];
    }else{
        return "DNI zenbakia gaixki dago";
    }
   
}

