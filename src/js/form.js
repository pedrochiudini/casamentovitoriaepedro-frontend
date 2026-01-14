import { api } from '../api/api.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const btnSubmit = document.getElementById('btn-submit');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (btnSubmit.disabled) return;

        btnSubmit.disabled = true;
        btnSubmit.classList.add('loading');

        try {
            const dados = {
                nome: form.querySelector('input[placeholder="Nome do Convidado"]').value,
                email: form.querySelector('input[type="email"]').value,
                telefone: form.querySelector('input[type="tel"]').value || null,
                status: form.querySelector('input[id="presente"]:checked') ? 'CO' : 'CA',
                qtd_acompanhantes: document.getElementById('qtd-acompanhantes').value || 0,
                restricao_alimentar: form.querySelector('input[placeholder^="Glúten"]').value || null,
                idevento: 123
            };

            const result = await api.post('/convidados/confirmar', dados)

            if (result?.error) {
                throw new Error(result.message)
            }

            if (dados.status == 'CO') {
                alert('Presença confirmada com sucesso! 💍✨\nFoi enviado a confirmação da presença para o seu email.');
            } else {
                alert('Agradeçemos pela sua resposta!');
            }

            form.reset();
        } catch (error) {
            console.error(error);
            alert(
                error?.response?.data?.message ||
                'Erro ao enviar confirmação. Tente novamente.'
            );
        } finally {
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('loading');
        }
    });
});
