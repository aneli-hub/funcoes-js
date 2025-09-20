
function aplicarDesconto(valor, desconto) {
  return valor - (valor * (desconto / 100));
}

console.log(aplicarDesconto(100, 20)); // 80
