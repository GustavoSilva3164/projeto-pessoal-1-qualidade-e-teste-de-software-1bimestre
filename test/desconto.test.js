const calcularDesconto = require('../src/utils/desconto');

describe('Desconto', () => {

  test('deve aplicar desconto para valores acima de 100', () => {
    const valorFinal = calcularDesconto(200);
    expect(valorFinal).toBe(180); // 10% de desconto
  });

  test('não deve aplicar desconto para valores baixos', () => {
    const valorFinal = calcularDesconto(50);
    expect(valorFinal).toBe(50);
  });

});