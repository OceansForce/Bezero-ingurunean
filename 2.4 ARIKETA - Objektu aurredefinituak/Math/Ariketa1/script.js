
function menua(aukera){

    switch (aukera) {
        case 0:
            let zenb1= prompt("Oinarria");
            let zenb2= prompt("Berritzailea");
            document.getElementById("a").innerHTML= Math.pow(zenb1, zenb2);
            break;

        case 1:
            let zenb3= prompt("Zenbaki bat idatzi:");
            document.getElementById("a").innerHTML= Math.sqrt(zenb3);
            break;

        case 2:
            let zenb4= parseFloat(prompt("Zenbaki bat idatzi:"));
            let zenb5= parseFloat(prompt("Zenbat hamartarretara?"));
            document.getElementById("a").innerHTML= zenb4.toFixed(zenb5);
            break;

        case 3:
            let zenb6= prompt("Agelu bat jarri:");
            let sinu= Math.sin(zenb6);
            let kosinu= Math.cos(zenb6);
            let tangente= Math.tan(zenb6);
            document.getElementById("a").innerHTML= "Sinua="+sinu+" Kosinua="+kosinu+" Tangentea="+tangente;
            break;

        default:
            break;
    }
}
