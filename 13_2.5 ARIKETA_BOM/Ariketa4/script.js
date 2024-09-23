let leihoa;
let intervalo;
function ariketa1(){
    leihoa= window.open("", "","width=200,height=200");
    
}

function hasiMugitzen() {
    if (leihoa && !intervalo) {
        intervalo = setInterval(mugitu, 100); 
    }
}

function mugitu() {
    if (!leihoa) return
  
        let x = Math.min(Math.max(leihoa.screenX + Math.floor(Math.random() * 100) - 50, 0), screen.availWidth - leihoa.outerWidth);
        let y = Math.min(Math.max(leihoa.screenY + Math.floor(Math.random() * 100) - 50, 0), screen.availHeight - leihoa.outerHeight);

         leihoa.moveTo(x, y);
    
}


function Gelditu() {
    if (leihoa) {
        clearInterval(intervalo);
        intervalo=null;
    }
}