function zatigarri(){
    let zenb1= prompt("Zenbaki bat jarri");

    let zenb2= prompt("Beste bat jarri");

    const array1= [];
    const array2= [];
    let count1=0;
    let count2=0;

    for (i=1; i<=zenb1; i++){
        if (zenb1%i==0){
            array1[count1]=i;
            count1++;
        }
    }

    for (a=1; a<=zenb2; a++){
        if (zenb2%a==0){
            array2[count2]=a;
            count2++;
        }
    }

    for(c=0; c<array1.length; c++){
        for(b=0; b<array2.length; b++){
            if (array1[c]==array2[b]){
                document.getElementById("a").innerHTML+= array1[c]+"-";
            }
        }
    }
}