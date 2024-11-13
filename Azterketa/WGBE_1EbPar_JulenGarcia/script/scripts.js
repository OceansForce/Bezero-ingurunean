class Galderak{

    id;
    galdera_text;
    mota;
    erantzunak;
    erantzun_kant;

    constructor(index) {
        this.id=index;
        this.galdera_text="";
        this.mota="";
        this.erantzunak=[[]];
        this.erantzun_kant=1;
    }
}

const lista=[];
//Galdera bat gehitzeko botoia sakatzean
//exekutatu beharreko kodea
function galderaGehitu()
{
    let izenburua= document.getElementById("galdetegi-izenburua").value;
    if (izenburua!==""){
        let index=lista.length;

        lista.push(new Galderak(index));
        sekzioaGehitu(index);
        
    }
    
}

/*  Gorde degun azken galdera ondo beteta dagon balidatuko du */
function azkenGalderaBalidatu() 
{
}

//Galdera bakoitzaren HTMLa gehituko du
function sekzioaGehitu(index) 
{
    let kokapena= document.getElementById("galdera");
        let galdera= document.createElement("div");
        galdera.innerHTML= `<div class="galdera-container" id="galdera${index}">
            <h3>G${index+1}</h3>
            <div class="galdera">
                <label>Galdera:</label>
                <input type="text" id="galdera_izena${index}">
            </div>
            <div class="galdera">
                <label>Mota:</label>
                <select id="mota${index}" onclick="motaAldatu(${index})" name="">
                    <option value="">Aukeratu mota</option>
                    <option value="0">Testua</option>
                    <option value="1">Erantzun posible bakarrekoa</option>
                    <option value="2">Erantzun posible anitzekoak</option>
                </select>
            </div>
            <div class="galdera" id="erantzu_text${index}" >
                
            </div>
            <div class="galdera" id="erantzun_kaxa${index}">
                
            </div>
            <button type="button" onclick="objetuaArrayeanGehitu(${index})">Galdera Gorde</button>
            <button type="button" onclick="galderaEzabatu(${index})">Galdera Ezabatu</button>
        </div>`;
    
        kokapena.appendChild(galdera);
}

//Galdera gordetzean inprimakiaren informazioa 
//gure "Galdera" objektuan gordeko du
function objetuaArrayeanGehitu(index)
{
    let galdera= document.getElementById("galdera"+index);

    lista[index].galdera_text= document.getElementById("galdera_izena"+index).value;
    lista[index].mota= document.getElementById("mota"+index).value;
    
    let eratzun_lista=[];

    let erantzun_kantitatea= lista[index].erantzun_kant;
    lista[index].erantzunak=eratzun_lista;

    let zuzena;

    if (erantzun_kantitatea==1){
        eratzun_lista.push(document.getElementById("era"+index+"1").value);
    }else{
        console.log("else egiten");
        eratzun_lista.push(document.getElementById("era"+index+"1").value);
        for(i=2; i<erantzun_kantitatea; i++){
            zuzena= document.getElementById("zuzen"+index+""+i).checked;
            console.log(zuzena+"sadsa");
            eratzun_lista.push([document.getElementById("era"+index+""+i).value, zuzena]);
        }
    }

    lista[index].erantzunak=eratzun_lista;
    console.log(lista)
    
}

//Galdera mota aldatzean, HTMLan egin beharreko 
//aldaketak kudeatzen ditu
function motaAldatu(index) 
{
    lista[index].erantzun_kant=1;
    let mota= document.getElementById("mota"+index).value;
    let erantzun_kokapena= document.getElementById("erantzun_kaxa"+index);
    let erantzun_text_kokap= document.getElementById("erantzu_text"+index);

    if (mota==0 && mota!==""){
        erantzun_kokapena.innerHTML="";
        erantzun_text_kokap.innerHTML=`<label>Erantzuna:</label>
                <input type="text" id="era${index}1" name="" required>`
    }else if (mota==1){
        erantzun_text_kokap.innerHTML="";
        erantzun_kokapena.innerHTML=`
                <label>Erantzunak:</label>
                <div id="erantzun_kaxa12${index}"></div>
                <button type="button" onclick="erantzunaGehitu(${index}, 1)" >Erantzun Berria Gehitu</button>`;
    }else if (mota==2){
        erantzun_text_kokap.innerHTML="";
        erantzun_kokapena.innerHTML=`
                <label>Erantzunak:</label>
                <div id="erantzun_kaxa12${index}"></div>
                <button type="button" onclick="erantzunaGehitu(${index}, 2)">Erantzun Berria Gehitu</button>`;
    }
}

//Galderaren erantzunak ezabatzen ditu
function erantzunakEzabatu() 
{

}

//Erantzunak gehitzen ditu HTMLan
function erantzunaGehitu(index, mota) 
{
    let erantzun_kaxa= document.getElementById("erantzun_kaxa12"+index);
    let erantzun_berria= document.createElement("div");
    let erantzun_kantitatea= lista[index].erantzun_kant;
    if (mota==1){
        if (erantzun_kantitatea<=6){
            erantzun_berria.innerHTML=`<input type="text" id="era${index}${erantzun_kantitatea}" name="" required>
            <input id="zuzen${index}${erantzun_kantitatea}" type="checkbox" required></br>`;
            erantzun_kaxa.appendChild(erantzun_berria);
            lista[index].erantzun_kant++;
        }
    }else if(mota==2){
        if (erantzun_kantitatea<=8){
            erantzun_berria.innerHTML=`<input type="text" id="era${index}${erantzun_kantitatea}" name="" required>
            <input id="zuzen${index}${erantzun_kantitatea}" type="checkbox" required></br>`;
            erantzun_kaxa.appendChild(erantzun_berria);
            lista[index].erantzun_kant++;
        }
    }
    
    
}
//Galdera ezabatzen du, bai HTMLan eta bai Array-ean
function galderaEzabatu(index) 
{
    document.getElementById("galdera"+index).innerHTML="";
    console.log(lista);
}

//Inprimakiko galderaren balioak objektuan gordetzen ditu, 
//eta objektu hori array-ean
function galderaGorde(id) 
{
}

function lehioa_itxi(){
    window.close();
}

function inprimatu(){
    console.log(lista);
}