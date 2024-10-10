const inputNome = document.getElementById('inputNome') as HTMLInputElement;
const inputSobrenome = document.getElementById('inputSobrenome') as HTMLInputElement;
const inputEmail = document.getElementById('inputEmail') as HTMLInputElement;
const inputNascimento = document.getElementById('inputNascimento') as HTMLInputElement;

if(inputNome && inputSobrenome){
    inputSobrenome.onblur = function() {
      const valorDigitado =  `Olá  ${inputNome.value} ${inputSobrenome.value}, Seja bem vindo(a)`
      console.log(valorDigitado)
    }
}

if(inputEmail) {
    inputEmail.onblur = function() {
        const valorDigitado = inputEmail.value
        if(!valorDigitado.includes('@')){
            alert('E-mail incorreto!');
        }else{
            console.log(valorDigitado);
        }
    }
}
if (inputNascimento) { 
    inputNascimento.onblur = function() {
      const anoNascimento =  inputNascimento.value.split('-')[0];  
      verificarIdade(anoNascimento)
    }
}
function verificarIdade(nascimento) { 
  const hoje =  new Date();
  const idade = hoje.getFullYear() - nascimento;
  if (idade < 18) {
    alert('Menor de idade');
  }
}