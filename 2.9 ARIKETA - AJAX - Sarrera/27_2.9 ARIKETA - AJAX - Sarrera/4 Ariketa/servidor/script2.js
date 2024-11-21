function izena() {
    let login = document.getElementById("login").value;
    let xrh= new XMLHttpRequest;
    xrh.open("POST", "./compruebaDisponibilidadXML.php" , true);
    xrh.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xrh.onreadystatechange= function(){
        if (xrh.readyState==4 && xrh.status==200) {
            let xml=xrh.responseXML;
            let erantzuna= xml.getElementsByTagName("respuesta")[0];
            let disponible= erantzuna.getElementsByTagName("disponible")[0].firstChild.nodeValue;
           
            if(disponible=="si"){
                document.getElementById("disponibilidad").innerHTML=disponible;
            }else{
                document.getElementById("disponibilidad").innerHTML=disponible;
                let alternativas= erantzuna.getElementsByTagName("alternativas")[0];
                
                for (let index = 0; index < 5; index++) {
                    let login= alternativas.getElementsByTagName("login")[index].firstChild.nodeValue;
                    document.getElementById("disponibilidad").innerHTML+="<br>"+login;
                }
                
            }

        }

    }

    xrh.send("login="+login);

}