//Escreva uma função que aceita 2 (dois) parâmetros e retorna o menor valor dentre eles;

function menorValor(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Os parâmetros devem ser números.";
  }
  return a < b ? a : b;
}

console.log(menorValor(10, 5)); // 5
