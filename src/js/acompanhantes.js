const radioSim = document.getElementById('acom-sim');
const radioNao = document.getElementById('acom-nao');
const qtdInput = document.getElementById('qtd-acompanhantes');

function atualizarQtd() {
    if (radioSim.checked) {
        qtdInput.disabled = false;
        qtdInput.required = true;
        qtdInput.focus();
    } else {
        qtdInput.disabled = true;
        qtdInput.required = false;
        qtdInput.value = '';
    }
}

radioSim.addEventListener('change', atualizarQtd);
radioNao.addEventListener('change', atualizarQtd);