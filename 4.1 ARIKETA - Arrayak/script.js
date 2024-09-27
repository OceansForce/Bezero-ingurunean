let array1=[["Julen","Iker","Ana"],["Garcia","Mata","Osa"]];
let array2=["Anya","Bast", "Lemmy", "Dio","abcefdskfdjisbfsk", "Noam", "Chomsky", "abcefdskfdjisbfsk"];

function arrayak(){
    ariketa1();
    ariketa2();
    ariketa3();
    ariketa4();
    ariketa5();
    arriketa6();
}

function ariketa1(){
    document.write(JSON.stringify(array1)+"<br>"+JSON.stringify(array2));
    array1[0][1]="Aldaketa";
    array2[2]="Aldaketa";
    document.write("<br><br>"+JSON.stringify(array1)+"<br>"+JSON.stringify(array2));
}

function ariketa2(){
    let array3=array2.concat(array1[0],array1[1]);
    document.write("<br><br>"+JSON.stringify(array3));
}

function ariketa3(){
    array2.splice(0,2,array2[array2.length-1],array2[array2.length-2]);
    document.write("<br><br>"+JSON.stringify(array2));
}

function ariketa4(){
    document.write("<br><br>"+array2.find(izena=> izena.startsWith("A")));
}

function ariketa5(){
    array2.sort();
    document.write("<br><br>"+JSON.stringify(array2)); 
}

function arriketa6(){
    document.write("<br><br>[");   
    array2.forEach(nombres => {
        if (nombres.length>10){
            document.write(nombres.substring(0,10)+"... , ");  
        }else{
            document.write(nombres+", ");
        }
        
    });
    document.write("]");  
}
