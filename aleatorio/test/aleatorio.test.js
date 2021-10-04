const Aleatorio = require('../source/aleatorio');

describe('Aleatorio', () => {

    test(' Deve retornar -1 quando o inicio do intervalo eh um valor negativo', () =>{
        let resp =gerarNumeroAleatorio(-5,4);
        expect(resp).toBe(-1); 
    });

    test( 'Deve reornar -1 quando o fim do intervalo eh um valor negativo', () =>{
        let resp =gerarNumeroAleatorio(2,-4);
        expect(fim).toBe(-1);
    });

    test('Deve retornar -1 quando o início do intervalo é igual ao fim do intervalo', () =>{
        let resp =gerarNumeroAleatorio(4,4);
        expect(resp).toBe(-1);
    });

    test('Deve retornar um número entre 200 e 3000 quando um intervalo válido [200, 3000] é fornecido', () => {

        let resp = gerarNumeroAleatorio(200, 3000);
        expect(resp).toBeGreaterThanOrEqual(200);
        expect(resp).toBeLessThanOrEqual(3000);
    });

});