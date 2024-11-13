const lista=[];

function gehitu_form(){
    let index= lista.length;

    lista.push(kontaktua = {
        izena: '',
        abizena: '',
        telefonoa: [[]],
        tel_kant: 1
    });
    let formulario_kaxa=document.getElementById('forms');
    let formularioak_sorketa= document.createElement("div");
    formularioak_sorketa.innerHTML=`
    <form id="form${index}" oninput='datuak_eguneratu(${index})' >
    <label for=''>izena</label><input name='izena' type='text'><br>
    <label for=''>abizena</label><input name='abizena' type='text'><br>
    <label for=''>telefonoa</label><input name='tel' id='tel${index}0' type='tel'><input id='tel_boolean${index}0' name='tel_boolean' type='checkbox'><br>
    </form>
    <button onclick="tel_gehitu(${index})" >Tel-Gehitu</button>
    <hr>`;

    formulario_kaxa.appendChild(formularioak_sorketa);
}

function datuak_eguneratu(index){
    let tel_lista=[];
    const formulario= document.forms[index];
    let izena= formulario.izena.value;
    let abizena= formulario.abizena.value;
   
    let tel_eta_boole;

    lista[index].izena=izena;
    lista[index].abizena=abizena;
    tel_kantitatea=lista[index].tel_kant;
    console.log(tel_kantitatea);
    
    for(i=0; i<tel_kantitatea; i++){
        console.log(i);
        console.log("tel"+index+""+i);
        let telefonoa= document.getElementById("tel"+index+""+i).value;
        let boolean= document.getElementById("tel_boolean"+index+""+i).checked;
        if (boolean){
            tel_eta_boole=[telefonoa,"Mugikorra"];
        }else{
            tel_eta_boole=[telefonoa,"Fijoa"];
        }

        tel_lista[i]=tel_eta_boole;
    }
    lista[index].telefonoa=(tel_lista);

    console.log(lista);
    console.log(lista.telefonoa);
}


function ikusi_datuak(){
    
    const orria= window.open("", "Kontaktua", "width=400px, height=600px");
    orria.document.write("<h4>Kontaktuak</h4><div id='kontaktuak'></div>");
    let nun_idatzi= orria.document.getElementById("kontaktuak");
    lista.forEach(element => {
        let datuak= document.createElement("div");

        datuak.innerHTML=`<p>${element.izena}</p><br>
                                <p>${element.abizena}</p><br>
                                <p>${element.telefonoa}</p><br><hr>`;
        nun_idatzi.appendChild(datuak);
    });
}

function tel_gehitu(index){
    let nun_jarri_tel= document.getElementById("form"+index);
    if (lista[index].tel_kant<=5){
        let tel= document.createElement("div");
        tel.innerHTML="<label for=''>telefonoa</label><input id='tel"+index+""+lista[index].tel_kant+"' name='tel' type='tel'><input id='tel_boolean"+index+""+lista[index].tel_kant+"' name='tel_boolean' type='checkbox'><br>";
        lista[index].tel_kant++;
        nun_jarri_tel.appendChild(tel);
    }

}
