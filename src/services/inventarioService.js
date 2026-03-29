class InventarioService {
  constructor(limite = 10) {
    this.itens = [];
    this.limite = limite;
  }

  adicionarItem(item) {
    if (this.itens.length >= this.limite) {
      throw new Error('Inventário cheio');
    }

    this.itens.push(item);
  }

  removerItem(item) {
    const index = this.itens.indexOf(item);

    if (index === -1) {
      throw new Error('Item não encontrado');
    }

    this.itens.splice(index, 1);
  }
}

module.exports = InventarioService; 