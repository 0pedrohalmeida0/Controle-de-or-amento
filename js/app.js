import { obterElemento, limparFormulario, validarValorPositivo, parseInputValor, extrairValorDoTexto, setCookie, getCookie } from './utils.js';
import { ControleOrcamento } from './classes.js';

const controle = new ControleOrcamento();

function salvarEstadoEmCookie() {
    const categoriaKeys = Object.keys(controle.categorias);
    const estado = {
        categorias: {},
        total: extrairValorDoTexto(obterElemento('Total').textContent)
    };

    categoriaKeys.forEach((categoria) => {
        const idElemento = controle.categorias[categoria];
        const texto = obterElemento(idElemento).textContent;
        estado.categorias[categoria] = extrairValorDoTexto(texto);
    });

    setCookie('controleOrcamento', JSON.stringify(estado), 365);
}

function carregarEstadoDoCookie() {
    const cookie = getCookie('controleOrcamento');
    if (!cookie) return;

    try {
        const estado = JSON.parse(cookie);
        if (!estado || typeof estado !== 'object' || !estado.categorias) return;

        Object.entries(estado.categorias).forEach(([categoria, valor]) => {
            const idElemento = controle.categorias[categoria];
            if (!idElemento) return;
            obterElemento(idElemento).textContent = controle.formatarTextoCategoria(categoria, valor);
        });

        if (typeof estado.total === 'number') {
            obterElemento('Total').textContent = controle.formatarTextoTotal(estado.total);
        }
    } catch (error) {
        console.warn('Falha ao carregar estado do cookie:', error);
    }
}

/**
 * Função para adicionar um novo gasto (estilo funcional)
 */
export function addGastos() {
    const raw = obterElemento('valor').value;
    const valor = parseInputValor(raw);

    if (!validarValorPositivo(valor)) return;

    const categoria = obterElemento('categoria').value;

    controle.adicionarGasto(valor, categoria);
    salvarEstadoEmCookie();

    limparFormulario();
}

document.addEventListener('DOMContentLoaded', function() {
    carregarEstadoDoCookie();
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