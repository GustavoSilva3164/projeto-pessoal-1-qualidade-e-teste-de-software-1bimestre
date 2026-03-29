const Jogador = require('../src/models/jogador');

describe('Jogador', () => {

  test('deve criar jogador com ouro inicial', () => {
    const jogador = new Jogador('Gustavo', 100)
    expect(jogador.nome).toBe('Gustavo')
    expect(jogador.ouro).toBe(100)
  });

  test('não deve permitir ouro negativo', () => {
    expect(() => {
      new Jogador('Gustavo', -50)
    }).toThrow('Ouro inválido')
  });

});
