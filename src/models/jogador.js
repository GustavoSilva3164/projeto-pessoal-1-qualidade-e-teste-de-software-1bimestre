class Jogador {
  constructor(nome, ouro) {
    if (ouro < 0) {
      throw new Error('Ouro inválido');
    }

    this.nome = nome;
    this.ouro = ouro;
  }
}

module.exports = Jogador;