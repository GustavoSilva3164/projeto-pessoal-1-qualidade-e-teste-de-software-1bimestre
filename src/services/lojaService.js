function LojaService() {
  return {
    comprar(jogador, item, preco) {
      if (jogador.ouro < preco) {
        throw new Error('Ouro insuficiente')
      }

      jogador.ouro -= preco
      return item
    }
  }
}

module.exports = LojaService
