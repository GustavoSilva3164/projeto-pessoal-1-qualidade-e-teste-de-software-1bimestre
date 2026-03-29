function Item(nome, preco) {
  if (!nome) {
    throw new Error('Nome do item é obrigatório')
  }

  if (preco < 0) {
    throw new Error('Preço inválido')
  }

  return {
    nome,
    preco
  };
}

module.exports = Item
