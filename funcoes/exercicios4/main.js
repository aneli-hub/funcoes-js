//screva 4 (quatro) funções que aceitam 2 (dois) parâmetros cada, cada uma delas deve realizar uma das 4 (quatro) operações matemáticas básicas (soma, subtração, divisão e adição), retorne o resultado de cada operação em cada uma delas;

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
