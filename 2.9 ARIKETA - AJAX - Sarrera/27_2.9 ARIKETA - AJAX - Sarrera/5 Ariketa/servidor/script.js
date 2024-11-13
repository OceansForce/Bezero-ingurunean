
function izena (){
    
    let xhr = new XMLHttpRequest;
    xhr.open("POST", "./compruebaDisponibilidadJSON.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){

            let doc= xhr.responseText;
            let doc_json= JSON.parse(doc);
            let mezua= doc_json.disponible;

            if (mezua== "no"){
                let alternativas= doc_json.alternativas;

                document.getElementById("disponibilidad").innerHTML=mezua+"<br><h1>Beste aukerak:</h1>";
                for (let index = 0; index < alternativas.length; index++) {
                    document.getElementById("disponibilidad").innerHTML+=alternativas[index]+"<br>";
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