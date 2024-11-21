const array= [];
let kokapena= 0;

function datua_jarri(){

    let xhr= new XMLHttpRequest();
    xhr.open("GET", "../servidor/generaContenidos.php", true);

    xhr.onreadystatechange= function () {
        if(xhr.readyState==4 && xhr.status==200){
            
            let textua=xhr.responseText;
            array.push(textua);
            kokapena=array.length-1;
            document.getElementById("ticker").innerHTML=textua;
        }
    }

    xhr.send();
}

function atzera() {
    kokapena--;
    document.getElementById("ticker").innerHTML= array[kokapena];
}

function aurrera(){
    kokapena++;
    document.getElementById("ticker").innerHTML= array[kokapena];
}

function gelditu(){
    clearInterval(interval);
    console.log(array);
}

let interval =setInterval(datua_jarri,1000);