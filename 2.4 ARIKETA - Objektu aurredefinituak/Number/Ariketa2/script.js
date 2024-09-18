
function number(){

    let zenb1= parseInt(prompt("Zenbaki bat Bitarrean jarri:"),2);
    let zenb2= parseInt(prompt("Zenbaki bat Oktalean jarri:"),8);
    let zenb3= parseInt(prompt("Zenbaki bat Hexadecimalean jarri:"),16);
    const lista1= [zenb1,zenb2.toString(2),zenb3.toString(2)];
    let maxBI=0;
    let minBI=zenb1;
  
    for (i=0; i<3;i++){
        if (maxBI<lista1[i]){
            maxBI=lista1[i];
        }
        if (minBI>lista1[i]){
            minBI=lista1[i];
        }
        

    }

    document.getElementById("a").innerHTML="handiena: "+maxBI;
    document.getElementById("b").innerHTML="txikiena: "+minBI;

    document.getElementById("c").innerHTML="1 Bitarrean :"+zenb1.toString(2);
    document.getElementById("d").innerHTML="1 Oktaelan : "+zenb1.toString(8);
    document.getElementById("e").innerHTML="1 Hexadezimal : "+zenb1.toString(16).toUpperCase();
    
    document.getElementById("2c").innerHTML="2 Bitarrean :"+zenb2.toString(2);
    document.getElementById("2d").innerHTML="2 Oktaelan : "+zenb2.toString(8);
    document.getElementById("2e").innerHTML="2 Hexadezimal : "+zenb2.toString(16).toUpperCase();

    document.getElementById("3c").innerHTML="3 Bitarrean :"+zenb3.toString(2);
    document.getElementById("3d").innerHTML="3 Oktaelan : "+zenb3.toString(8);
    document.getElementById("3e").innerHTML="3 Hexadezimal : "+zenb3.toString(16).toUpperCase();
    
   
}
