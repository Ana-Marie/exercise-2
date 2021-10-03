
 function IMCStatusCalculador(peso,altura){
     if( peso<=0 || altura <= 0){
         throw  "Argumento ilegal";
     }
     var imc= peso/(altura*altura);

     var  classificacao="";
     if(imc<18.5){
         classificacao="abaixo do peso";
     }
     else if(imc<25){
         classificacao="normal";
     }
     else if(imc<30){
         classificacao="acima do peso";
     }else{
         classificacao="obeso";
     }

     return {
         imc:imc,
         classificacao:classificacao
     }
    
 }


 
