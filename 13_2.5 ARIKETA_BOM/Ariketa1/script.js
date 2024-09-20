function ariketa1(){
    document.getElementById("a").innerHTML+="<div style='background-color:"+kolore()+"'><button onclick='ariketa1()'>Botoia</button></div>";
    
}

function random(){
	return (Math.random()*255).toFixed(0);
}

function kolore(){
	let kolorea = "("+random()+"," + random() + "," + random() +")";
	return "rgb" + kolorea;
}