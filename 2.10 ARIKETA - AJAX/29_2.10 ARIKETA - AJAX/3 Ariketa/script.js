
window.addEventListener("load", hasiera);

function hasiera() {
    console.log("dsad");
    let xhr= new XMLHttpRequest;
    xhr.open("GET", "./index.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    xhr.onreadystatechange= function () {
        if (xhr.readyState==4 && xhr.status==200) {
            let xml= xhr.responseXML;
            let pelikulak= xml.getElementsByTagName("Peliculas")[0];
            
            for (let index = 0; index < 6; index++) {
                let pelikula= pelikulak.getElementsByTagName("Pelicula")[index];
                let direktorea= pelikula.getElementsByTagName("Director")[0].firstChild.nodeValue;   
                let tituloa= pelikula.getElementsByTagName("Titulo")[0].firstChild.nodeValue; 
                let irudia= pelikula.getElementsByTagName("imagen")[0].firstChild.nodeValue;
                let sinopsis= pelikula.getElementsByTagName("sinopsis")[0].firstChild.nodeValue;

                document.getElementById("taula").innerHTML+=`<tr id="${sinopsis}"><td>${direktorea}</td><td>${tituloa}</td><td><img src="./imagenes/${irudia}" onclick="sinopsia('${sinopsis}')" clalt=""></td></tr>`;
            }
        }
    }

    xhr.send();
}


function sinopsia(text) {
    
    let xhr= new XMLHttpRequest;
    xhr.open("GET", "./sinopsis.php?fichero="+encodeURIComponent(text), true);

    xhr.onreadystatechange= function (){
        if (xhr.readyState==4 && xhr.status==200) {
            
            document.getElementById(text).innerHTML+=`<td>${xhr.responseText}</td>`;
        }
    }

    xhr.send("fichero="+text);
}