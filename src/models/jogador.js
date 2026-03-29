function Jogador(nome, ouro) {
  if (ouro < 0) {
    throw new Error('Ouro inválido')
  }

  return {
    nome,
    ouro
  };
}

module.exports = Jogador
