const radioPresente = document.getElementById('presente');
const radioAusente = document.getElementById('ausente');
const bloco = document.getElementById('bloco-presenca');

const acomSim = document.getElementById('acom-sim');

function atualizarFormulario() {
    if (radioAusente.checked) {
        bloco.classList.add('recolhido');
        document.body.style.minHeight = '140vh';
        acomSim.required = false
    } else {
        bloco.classList.remove('recolhido');
        document.body.style.minHeight = '160vh';
        acomSim.required = true
    }
}

radioPresente.addEventListener('change', atualizarFormulario);
radioAusente.addEventListener('change', atualizarFormulario);
