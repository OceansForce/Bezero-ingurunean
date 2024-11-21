function ajax() {

    let xrh = new XMLHttpRequest;
    let url= window.location.href;

    xrh.onreadystatechange= function(){

        document.getElementById("estados").innerHTML+=xrh.readyState+"<br>";
      
        if (xrh.readyState===4 && xrh.status==200) {
            document.getElementById("codigo").innerHTML= xrh.status;
            document.getElementById("contenidos").textContent= xrh.responseText;
            document.getElementById("codigo").innerHTML= xrh.status;
            document.getElementById("cabeceras").innerHTML=xrh.getAllResponseHeaders();
        }
        

    }
    xrh.open("GET", url+'?nocache='+Math.random(), true);
    xrh.send();
}