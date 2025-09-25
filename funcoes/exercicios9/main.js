//Escreva uma função para formação do seu nome de programador, pedindo ao usuário seu mês de nascimento e o último número do seu ano de nascimento para compor um nome divertido de programador (Dicas: componha a geração com mais de uma função. A estrutura switch pode ser interessante)
function gerarNomeProgramador(mes, ano) {
  if (typeof mes !== "number" || typeof ano !== "number") {
    return "Valores inválidos";
  }

  let parteMes;
  switch (mes) {
    case 1: parteMes = "Byte"; break;
    case 2: parteMes = "Code"; break;
    case 3: parteMes = "Script"; break;
    case 4: parteMes = "Loop"; break;
    case 5: parteMes = "Stack"; break;
    case 6: parteMes = "Bug"; break;
    case 7: parteMes = "Cloud"; break;
    case 8: parteMes = "Kernel"; break;
    case 9: parteMes = "Function"; break;
    case 10: parteMes = "Query"; break;
    case 11: parteMes = "Server"; break;
    case 12: parteMes = "Cache"; break;
    default: parteMes = "Anon";
  }

  let ultimoDigito = ano % 10;
  let parteAno;
  switch (ultimoDigito) {
    case 0: parteAno = "Master"; break;
    case 1: parteAno = "Pro"; break;
    case 2: parteAno = "Dev"; break;
    case 3: parteAno = "Coder"; break;
    case 4: parteAno = "JS"; break;
    case 5: parteAno = "Python"; break;
    case 6: parteAno = "Ninja"; break;
    case 7: parteAno = "Guru"; break;
    case 8: parteAno = "Hacker"; break;
    case 9: parteAno = "Sensei"; break;
  }

  return parteMes + parteAno;
}

// Exemplo:
console.log(gerarNomeProgramador(5, 1997)); // StackGuru