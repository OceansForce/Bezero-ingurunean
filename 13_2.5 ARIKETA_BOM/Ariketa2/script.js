function ariketa2(){
    document.getElementById("a").innerHTML="URL= "+ window.location.href;
    document.getElementById("b").innerHTML="Navigatzailea= "+ obtenerIdNavegador();
    document.getElementById("c").innerHTML="Izenburua= "+window.location.pathname;
    document.getElementById("d").innerHTML="Formular= "+document.forms.length;
    document.getElementById("e").innerHTML="Leihoaren tamaina= "+window.screen.width+"x"+window.screen.height;
    
    console.log(window.history.length);
    if (window.history.length>=2){
        document.getElementById("f").innerHTML="2 baino luzeagoa da";
    }
    
}
function obtenerIdNavegador() {
    var sBrowser,
    sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
    } else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
    } else if (sUsrAg.indexOf("Opera") > -1) {
        sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
    } else if (sUsrAg.indexOf("MSIE") > -1) {
        sBrowser = "Microsoft Internet Explorer";
    }

    return sBrowser;
}