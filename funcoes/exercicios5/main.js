//Escreva uma função que aceita 2 (dois) parâmetros, um valor (inteiro) e um desconto (porcentagem), retorne o valor com o desconto aplicado;
function aplicarDesconto(valor, desconto) {
  return valor - (valor * (desconto / 100));
}

console.log(aplicarDesconto(100, 20)); // 80
