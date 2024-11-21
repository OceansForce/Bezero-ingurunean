window.addEventListener("load",probintziak());

function probintziak() {
    
    let xhr= new XMLHttpRequest;
    xhr.open("POST", "./probintziak.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200){
           
            let json= JSON.parse(xhr.responseText);
           
            let kokapena="";
            for (let index = 1; index < 51; index++) {
                if(index<10){
                    kokapena="0"+String(index);
                    document.getElementById("municip").innerHTML+= `<option value="${kokapena}">${json[kokapena]}</option>`;
                   
                }else{
                    kokapena=String(index);
                    document.getElementById("municip").innerHTML+=`<option value="${kokapena}">${json[kokapena]}</option>`;
                }
            }
        }
    }

    xhr.send();
}


function municipios() {
    let probintzia= document.getElementById("municip").value;
    let xhr = new XMLHttpRequest;
    xhr.open("POST", "./municipios.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    xhr.onreadystatechange= function() {
        if(xhr.readyState==4 && xhr.status==200){
            let doc=xhr.responseText;
            let json= JSON.parse(doc) ;
        
            document.getElementById("datuak").innerHTML="";
            for (var key in json) {
                console.log(json[key]);
                document.getElementById("datuak").innerHTML+= `<tr><td>${json[key]}</td><td>${key}</td></tr>`;
            }
        }
    }    

    xhr.send("provincia="+probintzia);
}