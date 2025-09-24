//Escreva uma função que aceita 3 (três) parâmetros numéricos e retorne uma string informando qual é o relacionamento entre eles: "Todos iguais" se a = b = c; "Dois iguais" se apenas dois forem iguais "Todos diferentes" se todos forem diferentes "Valores inválidos" se algum não for número

function compararTres(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Valores inválidos";
  }

  if (a === b && b === c) {
    return "Todos iguais";
  } else if (a === b || a === c || b === c) {
    return "Dois iguais";
  } else {
    return "Todos diferentes";
  }
}

console.log(compararTres(5, 5, 5)); // Todos iguais
console.log(compararTres(5, 5, 3)); // Dois iguais
console.log(compararTres(1, 2, 3)); // Todos diferentes
console.log(compararTres(1, "a", 3)); // Valores inválidos