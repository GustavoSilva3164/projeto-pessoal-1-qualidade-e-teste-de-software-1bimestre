const LojaService = require('../src/services/lojaService')
const Jogador = require('../src/models/jogador')

describe('Loja', () => {

  let loja
  let jogador

  beforeEach(() => {
    loja = new LojaService()
    jogador = new Jogador('Gustavo', 100)
  });

  test('deve comprar item com ouro suficiente', () => {
    loja.comprar(jogador, 'Espada', 50);
    expect(jogador.ouro).toBe(50)
  });

  test('não deve permitir compra sem ouro suficiente', () => {
    expect(() => {
      loja.comprar(jogador, 'Espada', 150)
    }).toThrow()
  });

  test('deve reduzir o ouro corretamente', () => {
    loja.comprar(jogador, 'Poção', 30)
    expect(jogador.ouro).toBe(70)
  });

});
