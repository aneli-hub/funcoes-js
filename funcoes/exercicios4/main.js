function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function divisao(a, b) {
  return b !== 0 ? a / b : "Erro: divisão por zero";
}

function multiplicacao(a, b) {
  return a * b;
}

console.log(soma(5, 3)); // 8
console.log(subtracao(10, 4)); // 6
console.log(divisao(20, 5)); // 4
console.log(multiplicacao(6, 7)); // 42
