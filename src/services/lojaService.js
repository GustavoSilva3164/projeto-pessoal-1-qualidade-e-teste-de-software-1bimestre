function LojaService() {
  return {
    comprar(jogador, item, preco) {
      if (jogador.ouro < preco) {
        return false
      }

      jogador.ouro -= preco
      return true
    }
  }
}

module.exports = LojaService