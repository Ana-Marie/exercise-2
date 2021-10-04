class Aleatorio{
    gerarNumeroAleatorio(inicio, fim){
        if(inicio<0 || fim<0){
            return -1;
        }
        if (inicio>=fim){
            return -1;
        }
        var diff = (fim-inicio) + 1;
        var tInt=Math.floor(Math.random() * diff);
        return inicio+tInt;
    
    } 

}
module.exports = Aleatorio;



 