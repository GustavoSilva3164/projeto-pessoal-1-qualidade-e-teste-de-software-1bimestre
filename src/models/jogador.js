function Jogador(nome, ouro) {
  if (ouro < 0) {
    return null
  }

  return {
    nome,
    ouro
  }
}

module.exports = Jogador