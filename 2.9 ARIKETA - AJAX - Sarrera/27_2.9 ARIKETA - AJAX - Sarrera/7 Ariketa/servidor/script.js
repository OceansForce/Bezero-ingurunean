function probintziak() {
    let xhr= new XMLHttpRequest;
    xhr.open("GET", "./probintziak.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    let probintzia;
    let codigoa;
    let izena;

    xhr.onreadystatechange=function () {
       
        if (xhr.readyState===4 && xhr.status===200) {
           
            let doc= xhr.responseText;
            let doc_json= JSON.parse(doc);
            console.log(doc_json);
            console.log(doc_json["01"]);
            for (let index = 1; index <= 51; index++) {
                let id;
                if (index<10){
                    id = "0"+String(index);
                }else{
                    id = String(index);
                }
                document.getElementById("municip").innerHTML+=`<option value="${id}">${doc_json[id]}</option>`;
            } 
        }

    }

    xhr.send();
}

function municipios(){
    let id= document.getElementById("municip").value;

    let xhr= new XMLHttpRequest;
    xhr.open("POST", "./municipios.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status===200){
            console.log("dsad");
            let doc= xhr.responseText;
            let doc_json= JSON.parse(doc);
            console.log(doc_json);
            console.log(doc_json.length);

            document.getElementById("datuak").innerHTML="";
            for(var codigo in doc_json){
                document.getElementById("datuak").innerHTML+=`<tr><td>${doc_json[codigo]}</td><td>${codigo}</td></tr> `;
            }
 
        }
    }
   
    xhr.send("provincia="+id);
}