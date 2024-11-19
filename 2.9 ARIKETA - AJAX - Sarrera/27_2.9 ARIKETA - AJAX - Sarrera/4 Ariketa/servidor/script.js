
function izena (){
    
    let xhr = new XMLHttpRequest;
    xhr.open("POST", "./compruebaDisponibilidadXML.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){

            let doc= xhr.responseText;
            let doc_json= JSON.parse(doc);
            let root= doc_json.getElementsByTagName("respuesta")[0];
            let disponibilidad= root.getElementsByTagName("disponible")[0];
            let mezua= disponibilidad.firstChild.nodeValue;

            if (mezua== "no"){
                let alternativas= root.getElementsByTagName("alternativas")[0];
                let logina= alternativas.getElementsByTagName("login");

                document.getElementById("disponibilidad").innerHTML=mezua+"<br><h1>Beste aukerak:</h1>";
                for (let index = 0; index < logina.length; index++) {
                    document.getElementById("disponibilidad").innerHTML+=logina[index].firstChild.nodeValue+"<br>";
                }
            }else{
                document.getElementById("disponibilidad").innerHTML=mezua;
            }
            
            
           
            
        }
    }
    let loginValue = document.getElementById("login").value;
    console.log(loginValue);
    xhr.send("login=" + encodeURIComponent(loginValue));
}