/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function convertir(){
    var valor=parseFloat(document.getElementById("cantidad").value);
    var de= document.getElementById("de").value;
    var a= document.getElementById("a").value;
    var euro=87.81;
    var dollar=74.63;
    var libra=96.75;
    var real=13.92;
    

    resultado=0
    //Peso a euro
    if(de==1&&a==2){
        resultado=valor/euro;
    }
    //Peso a dolar
    else if(de==1&&a==3){
        resultado=valor/dollar;
    }
    //Peso a libra
    else if(de==1&&a==4){
        resultado=valor/libra;
    }    
    //Peso a real
    else if(de==1&&a==5){
        resultado=valor/real;
    }
    //Euro a peso
    else if(de==2&&a==1){
        resultado=valor*euro;
    }
    //Euro a dolar
    else if(de==2&&a==3){
        resultado=valor*(euro/dollar);
    }
    //Euro a libra
    else if(de==2&&a==4){
        resultado=valor*(euro/libra);
    }
    //Euro a real
    else if(de==2&&a==5){
        resultado=valor*(euro/real);
    }
    //Dolar a peso
    else if(de==3&&a==1){
        resultado=valor*dollar;
    }
    //Dolar a euro
    else if(de==3&&a==2){
        resultado=valor*(dollar/euro);
    }
    //Dolar a libra
     else if(de==3&&a==4){
        resultado=valor*(dollar/libra);
    }
    //Dolar a real
     else if(de==3&&a==5){
        resultado=valor*(dollar/real);
    }
    //Libra a peso
     else if(de==4&&a==1){
        resultado=valor*libra;
    }
    //Libra a euro
     else if(de==4&&a==2){
        resultado=valor*(libra/euro);
    }
    //Libra a dolar
     else if(de==4&&a==3){
        resultado=valor*(libra/dollar);
    }
    //Libra a real
     else if(de==4&&a==5){
        resultado=valor*(libra/real);
    }
    //Real a peso
     else if(de==5&&a==1){
        resultado=valor*real;
    }
    //Real a euro
     else if(de==5&&a==2){
        resultado=valor*(real/euro);
    }
    //Real a dolar
     else if(de==5&&a==3){
        resultado=valor*(real/dollar);
    }
    //Real a libra
     else if(de==5&&a==4){
        resultado=valor*(real/libra);
    //Peso a peso, dolar a dolar, euro a euro, libra a libra, real a real
    }else{
        resultado=valor;
    }
    
    document.getElementById("resultado").innerHTML="Resultado: $"+resultado.toFixed(2);
}
