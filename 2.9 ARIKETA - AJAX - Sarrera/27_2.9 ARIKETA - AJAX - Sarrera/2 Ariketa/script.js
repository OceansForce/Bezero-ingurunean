
var aktibatu= true; 
const arraya=[];
var luzera;

function aldiro(){
    let xhr= new XMLHttpRequest();
    xhr.open("GET", "../servidor/generaContenidos.php", true);

    xhr.onreadystatechange= function(){
        if (xhr.readyState===4 && this.status===200){
            let textua=xhr.responseText;
            document.getElementById("ticker").innerHTML=textua;
            arraya.push(textua);
            luzera= arraya.length-1;
            console.log(arraya);
        }
    }
    
    xhr.send();
    
}

function gelditu(){
   clearInterval(interval);
}

function urrengoa(){
    if (arraya.length>=luzera+1){
        document.getElementById("ticker").innerHTML= arraya[luzera+1];
        luzera++;
    }
}

function aurrekoa(){
    if(luzera>0){
        document.getElementById("ticker").innerHTML= arraya[luzera-1];
        luzera--;
    }
}

var interval= setInterval(aldiro,1000);

