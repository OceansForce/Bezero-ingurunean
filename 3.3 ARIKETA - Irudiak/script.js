function idatzi(){
    const text= document.getElementById("input");
    let  textu_osoa= text.value;

    let textu_osoa_array= textu_osoa.split("");

    

    for (i=0; i<textu_osoa_array.length; i++){
        if(textu_osoa_array[i]==" "){
            document.getElementById("irudiak").innerHTML+="<img src='./Letrak/Hutsik.gif'>";
        }else if (textu_osoa_array[i].match(/[A-Za-z]/)){
            console.log(textu_osoa_array[i]);
            document.getElementById("irudiak").innerHTML+="<img src='./Letrak/"+textu_osoa_array[i].toUpperCase()+".gif'>";
        }else{
            document.getElementById("irudiak").innerHTML+="<img src='./Letrak/Txuria.gif'>";
        }
    }
}

