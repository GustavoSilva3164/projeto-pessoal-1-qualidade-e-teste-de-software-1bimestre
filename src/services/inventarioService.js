function InventarioService(limite = 10) {
  return {
    itens: [],
    limite,

    adicionarItem(item) {
      if (this.itens.length >= this.limite) {
        return false
      }

      this.itens.push(item)
      return true
    },

    removerItem(item) {
      if (!this.itens.includes(item)) {
        return false
      }

      this.itens = this.itens.filter(i => i !== item)
      return true
    }
  }
}

module.exports = InventarioService