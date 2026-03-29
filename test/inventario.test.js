const InventarioService = require('../src/services/inventarioService')

describe('Inventário', () => {

  let inventario

  beforeEach(() => {
    inventario = new InventarioService(3)
  });

  test('deve adicionar item', () => {
    inventario.adicionarItem('Espada')
    expect(inventario.itens.includes('Espada')).toBeTruthy()
  });

  test('deve remover item', () => {
    inventario.adicionarItem('Escudo')
    inventario.removerItem('Escudo')
    expect(inventario.itens.includes('Escudo')).toBeFalsy()
  });

  test('não deve remover item inexistente', () => {
    expect(() => {
      inventario.removerItem('Arco')
    }).toThrow()
  })

  test('deve respeitar limite do inventário', () => {
    inventario.adicionarItem('Item1')
    inventario.adicionarItem('Item2')
    inventario.adicionarItem('Item3')

    expect(() => {
      inventario.adicionarItem('Item4')
    }).toThrow()
  });

});
