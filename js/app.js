import { obterElemento, limparFormulario, validarValorPositivo, parseInputValor } from './utils.js';
import { ControleOrcamento } from './classes.js';

const controle = new ControleOrcamento();

/**
 * Função para adicionar um novo gasto (estilo funcional)
 */
export function addGastos() {
    const raw = obterElemento('valor').value;
    const valor = parseInputValor(raw);

    if (!validarValorPositivo(valor)) return;

    const categoria = obterElemento('categoria').value;

    controle.adicionarGasto(valor, categoria);

    limparFormulario();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicação de Controle de Orçamento iniciada');

    // Adicionar evento ao botão de adicionar gasto
    const botaoAdicionar = document.querySelector('button[type="button"]');
    if (botaoAdicionar) {
        botaoAdicionar.addEventListener('click', addGastos);
    }

    // Permitir adicionar gasto ao pressionar Enter
    const inputValor = obterElemento('valor');
    if (inputValor) {
        inputValor.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addGastos();
            }
        });
    }
});

console.log('Aplicação com fins educaionais, desenvolvida por Pedro Henrqiue de Almeida, para o curso de Full Stack da EBAC.');