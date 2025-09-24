//Escreva uma função que aceita 1 (um) parâmetro e exiba no console: "Número positivo" se for um número maior que zero; "Número negativo" se for um número menor que zero; "Zero" se for exatamente zero; "Não é um número" se não for um valor numérico.

function verificarNumero(n) {
  if (typeof n !== "number") {
    console.log("Não é um número");
  } else if (n > 0) {
    console.log("Número positivo");
  } else if (n < 0) {
    console.log("Número negativo");
  } else {
    console.log("Zero");
  }
}

verificarNumero(5);   // Número positivo
verificarNumero(-2);  // Número negativo
verificarNumero(0);   // Zero
verificarNumero("a"); // Não é um número