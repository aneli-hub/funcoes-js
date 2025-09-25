let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12]; // Domundo, segunda...
let diasDaSemana = ['domingo', 'segunda', 'Terça', 'Quarta', 'Quinta', 'sexta', 'sabado']


// Determinar se o uso do dia é verde, amarelo ou vermelho
const indicadorDeUso = (numeroDeHoras) => {
if ( numeroDeHoras <= 1 ) {
        return '❤️';
  } else if ( numeroDeHoras <= 3 ) {
        return '💛';
  } else {
    return '💚';
  }

}

for( let contador = 0; contador <= 6 ; contador++) {
     let forol = indicadorDeUso(usoDiasDaSemana[contador]);
     let dia = diasDaSemana[contador];
     let horas = usoDiasDaSemana[contador];
    
     let mensage = (horas > 1) ? `horas de uso` : `hora de uso`; 

    console.log(`${farol} 😒 ${dia} | ${horas} | ${mensagem}`);
 }


// console.log(typeof usoDiasDaSemana);
// console.log(typeof usoDiasDaSemana[0]);
// console.log(typeof indicadorDeUso);
// usoDiasDaSemana[0]