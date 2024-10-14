const cep = document.getElementById('cep') as HTMLInputElement;
const logradouro = document.getElementById('rua') as HTMLInputElement;
const cidade = document.getElementById('cidade') as HTMLInputElement;
const estado = document.getElementById('estado') as HTMLInputElement;
const nome = document.getElementById('nome') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const nascimento = document.getElementById('nascimento') as HTMLInputElement;
const cadastro = document.querySelector('button') as HTMLButtonElement;
const numero = document.getElementById('numero') as HTMLInputElement;
const loading = document.querySelector('.loading') as HTMLDivElement;

cep.addEventListener('blur', () => {
	loading.classList.remove('disabled');
	loading.classList.add('enabled');

	if (cep.value == "" || cep.value.length < 8) {
		alert('CEP inválido');
		return;
	} else {
		const url = `https://viacep.com.br/ws/${cep.value}/json/`;
		fetch(url) 
		.then(response => response.json())
		.then(data => {
			logradouro.value = data.logradouro;
			cidade.value = data.localidade;
			estado.value = data.uf;
		}).catch(error => {
			alert(error.message);
		}).finally(() => {
			loading.classList.remove('enabled');
			loading.classList.add('disabled');
		})
	}
})

cadastro.addEventListener('click', () => { 
	if (nome.value == "" || email.value == "" || nascimento.value == "") {
		alert('Preencha todos os campos');
		return;
	} else {
		alert('Cadastrado com sucesso');
	}
	cep.value = '';
	logradouro.value = '';
	numero.value = '';
	cidade.value = '';
	estado.value = '';
	nome.value = '';
	email.value = '';
	nascimento.value = '';
})