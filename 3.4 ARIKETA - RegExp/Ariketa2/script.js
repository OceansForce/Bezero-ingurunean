function konprobatu1(){
    let izena=new RegExp("julen");
    let data= new RegExp("2004/03/5");
    let pasahitza="abcDSAKF3213()";

    if (!pasahitza.match(izena) && !pasahitza.match(data) && pasahitza.match(/^(?=.*[A-Z])(?=.*[a-z]{3,})(?=.*[0-9])(?=.*[!@#$%^&*()]).+$/)){
        console.log("ondo");
    }
}

// ?= mira a ver si coincide con lo que hay dentro de la parentesis, sin avanzar.
// .* Verifica a ver si ahi algo despues.

//pasahitza.match(/^[A-Z]+[a-z]{3,}[0-9]+[!@#$%^&*()]+$/)