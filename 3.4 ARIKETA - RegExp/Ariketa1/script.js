function konprobatu1(){
    let izena="julen";
    let abizenak="garcia";

    let abizena= abizenak.split(" ");
    let abizena_1_rex= new RegExp(abizena[0]);
    let abizena_2_rex= new RegExp(abizena[1]);

    let korreoa="jgarciamata@zubirimanteo.com";
    let korreoa_rex= new RegExp(korreoa);
    
    let letra= izena.split("");

    if (izena.charAt(0).match("^"+korreoa.charAt(0))){
    

        if(korreoa.match(abizena_1_rex)){
          

            if((korreoa.match(abizena_2_rex) || abizena.length==1)){
                

                if((korreoa.match(/@ikzubirimanteo.com/i) || korreoa.match(/@zubirimanteo.com/i))){
                    console.log("ondo idatzita dago");

                }
            }
        }
    }
}