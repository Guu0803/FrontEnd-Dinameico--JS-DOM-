const img = document.querySelector('img') as HTMLImageElement;
const buttonInterruptor = document.getElementById('interruptor') as HTMLButtonElement;
const buttonConcertar = document.getElementById('concertar') as HTMLButtonElement;

let count = 0;
let interruptor = false;

buttonConcertar.disabled = true;

buttonInterruptor.addEventListener('click', () => { 
  if (interruptor) { 
    img.src = '/src/lampada_apagada.jpg';
    interruptor = false;
  } else { 
    img.src = '/src/lampada_acesa.jpg';
    interruptor = true;
    count++
  }
  if (count >= 5) {
    img.src = '/src/lampada_quebrada.jpg';
    interruptor = false;
    count = 0;
    buttonInterruptor.disabled = true;
    buttonConcertar.disabled = false;
  }
});
buttonConcertar.addEventListener('click', () => {
  img.src = 'atividades/atividade_2/src/lampada_apagada.jpg';
  interruptor = false;
  count = 0;
  buttonInterruptor.disabled = false;
  buttonConcertar.disabled = true;
});
  