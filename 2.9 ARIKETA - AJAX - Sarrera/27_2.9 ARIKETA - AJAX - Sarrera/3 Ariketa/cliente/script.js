

function onartu() {
    let izena = document.getElementById("login").value;
    if (izena.trim()!=""){
        let xhr= new XMLHttpRequest;
        xhr.open("GET","../servidor/compruebaDisponibilidad.php",true);
    
        xhr.onreadystatechange= function () {
            if (xhr.readyState===4 && xhr.status===200){
                let erantzuna=xhr.responseText;
                document.getElementById("disponibilidad").innerHTML= erantzuna;
            }
        }
    
        xhr.send();
    }
}