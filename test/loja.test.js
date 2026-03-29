const LojaService = require('../src/services/lojaService')

describe('Loja', () => {

  let loja
  let jogador

  beforeEach(() => {
    loja = LojaService()
    jogador = { nome: 'Gustavo', ouro: 100 }
  })

  test('deve comprar item com ouro suficiente', () => {
    loja.comprar(jogador, 'Espada', 50)
    expect(jogador.ouro).toBe(50)
  })

  test('não deve comprar sem ouro suficiente', () => {
    const resultado = loja.comprar(jogador, 'Espada', 150)
    expect(resultado).toBeFalsy()
  })

  test('deve reduzir ouro corretamente', () => {
    loja.comprar(jogador, 'Poção', 30)
    expect(jogador.ouro).toBe(70)
  })

})