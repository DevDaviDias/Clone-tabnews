const calculadora = require("../../models/calculadore");

test("fazendo uma soma simples valor esperador 1+1 =2" , () => {
    const resultado = calculadora.calcular(1,1);
    expect(resultado).toBe(2);
})