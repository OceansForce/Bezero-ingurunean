
function data(){
    let hilabetea= prompt("Ze hilabetetan");
    let eguna= prompt("Ze egunetan");
    gaur = new Date();
    
    for (i=gaur.getFullYear(); i<2100; i++){
        urtebetetzea = new Date(i, hilabetea-1, eguna);
        if (urtebetetzea.getDay()==0){
            console.log(urtebetetzea);
            document.getElementById("a").innerHTML+=i+"-";
        }
    }
}
