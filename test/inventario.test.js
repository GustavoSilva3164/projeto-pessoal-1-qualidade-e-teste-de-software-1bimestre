const InventarioService = require('../src/services/inventarioService');

describe('Inventário', () => {

  let inventario;

  beforeEach(() => {
    inventario = new InventarioService(3);
  });

  test('deve adicionar item ao inventário', () => {
    inventario.adicionarItem('Espada');
    expect(inventario.itens).toContain('Espada');
  });

  test('deve remover item do inventário', () => {
    inventario.adicionarItem('Escudo');
    inventario.removerItem('Escudo');
    expect(inventario.itens).not.toContain('Escudo');
  });

  test('não deve remover item inexistente', () => {
    expect(() => {
      inventario.removerItem('Arco');
    }).toThrow('Item não encontrado');
  });

  test('deve respeitar limite de itens', () => {
    inventario.adicionarItem('Item1');
    inventario.adicionarItem('Item2');
    inventario.adicionarItem('Item3');

    expect(() => {
      inventario.adicionarItem('Item4');
    }).toThrow('Inventário cheio');
  });

});