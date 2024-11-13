function probintziak() {
    let xhr= new XMLHttpRequest;
    xhr.open("GET", "./probintziak.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    let probintzia;
    let codigoa;
    let izena;

    xhr.onreadystatechange=function () {
       
        if (xhr.readyState===4 && xhr.status===200) {
           
            let doc_xml= xhr.responseXML;
            let probintziak=doc_xml.getElementsByTagName("provincias")[0];
            for (let index = 0; index <= 51; index++) {
                probintzia= probintziak.getElementsByTagName("provincia")[index];
                codigoa= probintzia.getElementsByTagName("codigo")[0].firstChild.nodeValue;
                izena= probintzia.getElementsByTagName("nombre")[0].firstChild.nodeValue;
                document.getElementById("municip").innerHTML+=`<option value="${codigoa}">${codigoa} ${izena}</option>`;
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
            let doc_xml= xhr.responseXML;
            let municipios= doc_xml.getElementsByTagName("municipios")[0];
            let municipio= municipios.getElementsByTagName("municipio");
            

            for (let index = 0; index < municipio.length; index++) {
               let izena= municipio.getElementsByTagName("nombre")[index].firstChild.nodeValue; 
               let id_2= municipio.getElementsByTagName("codigo")[index].firstChild.nodeValue;
               document.getElementById("datuak").innerHTML+=`<tr><td>${izena}</td><td>${id_2}</td></tr> `;
            }
            
           
            
        }
    }
   
    xhr.send("provincia="+id);
}