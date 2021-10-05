
 function IMCStatusCalculadora(nome,peso,altura){
     if( peso<=0 || altura <= 0){
        throw 'Argumento ilegal'
     }
     var imc= peso/(altura*altura);

     var  classificacao="";
     if(imc<18.5){
         classificacao="Abaixo do peso";
     }
     else if(imc<25){
         classificacao="Normal";
     }
     else if(imc<30){
         classificacao="Acima do peso";
     }else{
         classificacao="Obeso";
     }

     return {
         imc:imc,
         classificacao:classificacao
     };
    
 }

module.exports = IMCStatusCalculadora;
