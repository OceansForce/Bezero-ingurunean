function pelikulak() {
    
    let xrh= new XMLHttpRequest;
    xrh.open("GET", "./index.php", true);
    
    xrh.onreadystatechange= function (){
        
        if (xrh.readyState==4 && xrh.status==200) {

            let xml= xrh.responseXML;
            let pelikulas= xml.getElementsByTagName("Peliculas")[0];
            let pelikulak= pelikulas.getElementsByTagName("Pelicula")[0];
            console.log(pelikulak.length);
            
            for (let index = 0; index < 6; index++) {
            
                let pelikulak= pelikulas.getElementsByTagName("Pelicula")[index];
                let direktorea=pelikulak.getElementsByTagName("Director")[0].firstChild.nodeValue;
                let tituloa= pelikulak.getElementsByTagName("Titulo")[0].firstChild.nodeValue;
                document.getElementById("taula").innerHTML+=`<tr><td>${direktorea}</td><td>${tituloa}</td></tr>`;
            }
        }
    }
    
    xrh.send();
}