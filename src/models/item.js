function Item(nome, preco) {
  if (!nome || preco < 0) {
    return null
  }

  return {
    nome,
    preco
  }
}

module.exports = Item