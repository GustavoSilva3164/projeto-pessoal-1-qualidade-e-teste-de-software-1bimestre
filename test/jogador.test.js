const Jogador = require('../src/models/jogador')

describe('Jogador', () => {

  test('deve criar jogador com ouro válido', () => {
    const jogador = Jogador('Gustavo', 100)
    expect(jogador).toBeTruthy()
    expect(jogador.nome).toBe('Gustavo')
    expect(jogador.ouro).toBe(100)
  })

  test('não deve criar jogador com ouro negativo', () => {
    const jogador = Jogador('Gustavo', -50)
    expect(jogador).toBeFalsy()
  })

})