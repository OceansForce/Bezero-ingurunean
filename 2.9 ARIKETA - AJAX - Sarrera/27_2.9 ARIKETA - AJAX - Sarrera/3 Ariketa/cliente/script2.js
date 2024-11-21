function izena() {
    let input = document.getElementById("login").value;
    let xrh= new XMLHttpRequest;
    xrh.open("GET", "../servidor/compruebaDisponibilidad.php", true);

    xrh.onreadystatechange= function (){
        if (xrh.readyState==4 && xrh.status==200){
            xrh.responseText
            document.getElementById("disponibilidad").innerHTML=xrh.responseText;
        }
    }

    xrh.send("login="+encodeURIComponent(input));
}