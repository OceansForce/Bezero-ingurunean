const lista=[];

function form_gehitu(){
    let index= lista.length;
    lista.push(kontaktua={
        izena:"",
        abizena:"",
        telefonoak: [[]],
        tel_kant: 1
    });
    

    let formulario_kaxa= document.getElementById("formularioak");

    let formularioa= document.createElement("div");

    formularioa.innerHTML=`<form id="forms${index}"  oninput="datuak_gehitu(${index})">
            <label >Izena</label><br>
            <input name="izena" type="text"><br>
            <label >Abizena</label><br>
            <input name="abizena" type="text"><br>
            <label >Telefonoa</label><br>
            <input id="${index}1" type="tel"><br>
            <button onclick="tel_gehitu(${index})">Telefonoa+</button>
        </form>`;
       
    formulario_kaxa.appendChild(formularioa);
    console.log(lista);
}

function datuak_gehitu(index){
    
    let formularioa1= document.forms[index];

    
    
    let izena1= formularioa1.izena.value; 
    let abizena1= formularioa1.abizena.value;
    let telefonoa1= document.getElementById(index+"1").value;

    lista[index].izena=izena1;
    lista[index].abizena=abizena1;
    lista[index].telefonoak=telefonoa1;
    console.log(lista[index]);
}