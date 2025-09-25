//Escreva uma função que aceita até 3 (três) parâmetros: tipo de forma ("quadrado" ou "retangulo"), e as medidas necessárias. Retorne a área calculada: Quadrado: um lado; Retângulo: largura e altura;
function calcularArea(tipo, a, b) {
  if (tipo === "quadrado") {
    if (typeof a !== "number") return "Valor inválido";
    return a * a;
  } 
  else if (tipo === "retangulo") {
    if (typeof a !== "number" || typeof b !== "number") return "Valores inválidos";
    return a * b;
  } 
  else {
    return "Tipo inválido";
  }
}

// Exemplo:
console.log(calcularArea("quadrado", 4));     // 16
console.log(calcularArea("retangulo", 5, 10)); // 50