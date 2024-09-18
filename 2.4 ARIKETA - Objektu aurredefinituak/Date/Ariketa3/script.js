
function data(){
    let urtea = prompt("Ze urtetan");
    let hilabetea= prompt("Ze hilabetetan");
    let eguna= prompt("Ze egunetan");
    urtebetetzea = new Date(urtea, hilabetea-1, eguna);
    
    console.log(urtebetetzea);
    let bat= urtebetetzea.toISOString().split("T");
    
    document.write("<h1>"+bat[0]+"</h1>");
    document.write("<h1>"+urtebetetzea.toLocaleDateString("eus-ES", { dateStyle: "short"})+"</h1>");
    document.write("<h1>"+urtebetetzea.toLocaleDateString("eus-ES", { dateStyle: "long"})+"</h1>");
    
}
