//Escreva uma função que aceita 3 (três) parâmetros e retorna o maior valor dentre eles. Implemente a verificação para garantir que todos os parâmetros sejam numéricos antes de fazer a comparação.

function maiorDeTres(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Erro: todos os parâmetros devem ser números.";
  }
  return Math.max(a, b, c);
}

console.log(maiorDeTres(10, 50, 30)); // 50
console.log(maiorDeTres(10, "x", 30)); // Erro