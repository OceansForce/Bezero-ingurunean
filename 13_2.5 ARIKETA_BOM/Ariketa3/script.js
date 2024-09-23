let leihoa;

function ariketa1(){
    leihoa= window.open("", "","width=200,height=200");
    
}

function gorantz(){
    if (leihoa){
        leihoa.moveBy(0,-10);
    }
}

function beherantz(){
    if (leihoa){
        leihoa.moveBy(0,10);
    }
}

function eskuinerantz(){
    if (leihoa){
        leihoa.moveBy(-10,0);
    }
}

function ezkerrerantz(){
    if (leihoa){
        leihoa.moveBy(10,0);
    }
}

function bikoiztu(){
    if (leihoa){
        let width1 = Math.min(leihoa.outerWidth*2, screen.availWidth);
        let height1 = Math.min(leihoa.outerHeight*2, screen.availHeight);

        leihoa.resizeTo(width1, height1);
    }
}

function murriztu(){
    if (leihoa){
        let width2 = Math.max(leihoa.outerWidth/2, 100);
        let height2 = Math.max(leihoa.outerHeight/2, 100);

        leihoa.resizeTo(width2, height2);
    }
}
