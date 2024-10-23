function orria(){
    document.getElementById("recurso").value= window.location.href;
}

function ajax(){
    let orria1= document.getElementById("recurso").value;
    let http = new XMLHttpRequest();
    http.onreadystatechange= function(){
        if (this.readyState==4 && this.status == 200){
            document.getElementById("contenidos").textContent= this.responseText;
            document.getElementById("codigo").innerHTML=this.status;
            document.getElementById("cabeceras").innerHTML=this.getAllResponseHeaders();
            console.log("Hola");
        }else{
            document.getElementById("contenidos").innerHTML= "ERROR";
        }
       
    };
    
    http.open("GET", orria1);
    http.send();
}