document.getElementById('botaoComprar').addEventListener('click', function() {
    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');
    const data = document.getElementById('data');
    const cvv = document.getElementById('cvv');
    let formValido = true;

    if (nome.value.trim() === '') {
        alert('Por favor, preencha o nome do titular do cartão.');
        formValido = false;
    }

    if (numero.value.trim() === '' || !numero.value.match(/^\d{13,16}$/)) {
        alert('Por favor, insira um número de cartão válido.');
        formValido = false;
    }

    if (data.value.trim() === '' || !data.value.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
        alert('Por favor, insira uma data de vencimento válida (MM/YY).');
        formValido = false;
    }

    if (cvv.value.trim() === '' || !cvv.value.match(/^\d{3,4}$/)) {
        alert('Por favor, insira um CVV válido (3 ou 4 dígitos).');
        formValido = false;
    }

    if (formValido) {
        alert('Formulário válido. Enviando...');
        document.getElementById('formulario').submit();
    }
});