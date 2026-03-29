function InventarioService(limite = 10) {
  return {
    itens: [],
    limite,

    adicionarItem(item) {
      if (this.itens.length >= this.limite) {
        throw new Error('Inventário cheio')
      }

      this.itens.push(item)
    },

    removerItem(item) {
      if (!this.itens.includes(item)) {
        throw new Error('Item não encontrado')
      }

      this.itens = this.itens.filter(i => i !== item)
    }
  }
}

module.exports = InventarioService
