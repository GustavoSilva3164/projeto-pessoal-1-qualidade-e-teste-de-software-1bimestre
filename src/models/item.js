class Item {
  constructor(nome, preco) {
    if (!nome) {
      throw new Error('Nome do item é obrigatório');
    }

    if (preco < 0) {
      throw new Error('Preço inválido');
    }

    this.nome = nome;
    this.preco = preco;
  }
}

module.exports = Item;