const InventarioService = require('../src/services/inventarioService')

describe('Inventário', () => {

  let inventario

  beforeEach(() => {
    inventario = InventarioService(3)
  })

  test('deve adicionar item', () => {
    inventario.adicionarItem('Espada')
    expect(inventario.itens.includes('Espada')).toBeTruthy()
  })

  test('deve remover item', () => {
    inventario.adicionarItem('Escudo')
    inventario.removerItem('Escudo')
    expect(inventario.itens.includes('Escudo')).toBeFalsy()
  })

  test('não deve remover item inexistente', () => {
    const resultado = inventario.removerItem('Arco')
    expect(resultado).toBeFalsy()
  })

  test('não deve ultrapassar limite', () => {
    inventario.adicionarItem('Item1')
    inventario.adicionarItem('Item2')
    inventario.adicionarItem('Item3')

    const resultado = inventario.adicionarItem('Item4')
    expect(resultado).toBeFalsy()
  })

})