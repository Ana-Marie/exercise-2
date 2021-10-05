
const IMCStatusCalculadora = require('../source/calculadoraIMC');
const name ="Maria";
describe('CalculadoraIMC',()=>{
    test('Deve lançar uma excessão quando o peso e/ou altura for menor ou igual a zero', ()=>{
        expect(()=>{
            IMCStatusCalculadora(name,-5,1.56);
        }).toThrow('Argumento ilegal');

    });
    test('Deve apresentar classificação Abaixo do peso quando peso for 30 e altura 1.50', ()=>{
        expect(IMCStatusCalculadora(name,30,1.50).classificacao).toBe('Abaixo do peso');
        expect(IMCStatusCalculadora(name,30,1.50).imc).toBe(13.333333333333334);
    });
    test('Deve apresentar classificação Normal quando peso for 55 e altura 1.55', () =>{
        let resp =IMCStatusCalculadora(name,55,1.50);
        expect(resp.classificacao).toBe('Normal');
        expect(resp.imc).toBe(24.444444444444443);
    });
    test('Deve apresentar classificação Acima do peso quando peso for 90 e altura 1.80', ()=>{
        expect(IMCStatusCalculadora(name,90,1.80).classificacao).toBe('Acima do peso');
        expect(IMCStatusCalculadora(name,90,1.80).imc).toBe(27.777777777777775);
    });
    test('Deve apresentar classificação Obeso quando peso for 150 e altura 1.60', ()=>{
        expect(IMCStatusCalculadora(name,150,1.60).classificacao).toBe('Obeso');
        expect(IMCStatusCalculadora(name,150,1.60).imc).toBe(58.593749999999986);
    });

});