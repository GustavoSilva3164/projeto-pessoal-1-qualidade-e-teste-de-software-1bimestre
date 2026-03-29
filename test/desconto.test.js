const calcularDesconto = require('../src/utils/desconto')

describe('Desconto', () => {

  test('deve aplicar desconto', () => {
    const valor = calcularDesconto(200)
    expect(valor).toBe(180)
  })

  test('não deve aplicar desconto', () => {
    const valor = calcularDesconto(50)
    expect(valor).toBe(50)
  })

})