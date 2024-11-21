function bilatu() {
    let fitxategia= document.getElementById("fichero").value;
    console.log(fitxategia);


    let xrh= new XMLHttpRequest;
    xrh.open("GET",  "./index.php?fichero=" + encodeURIComponent(fitxategia), true);

    

    xrh.onreadystatechange= function(){
        if(xrh.readyState==4 && xrh.status==200){

            
            console.log(xrh.responseText);

        }
    }
    xrh.send("fichero="+fitxategia);
    
}