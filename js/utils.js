/**
 * Utilitários gerais para o controle de orçamento
 */

/**
 * Obtém um elemento do DOM pelo ID
 * @param {string} id - ID do elemento
 * @returns {HTMLElement} - Elemento encontrado
 */
function obterElemento(id) {
    return document.getElementById(id);
}

/**
 * Extrai valor numérico de um texto formatado
 * @param {string} texto - Texto com formato "R$ 1.234,56"
 * @returns {number} - Valor numérico
 */
function extrairValorDoTexto(texto) {
    const valor = texto.split('R$ ')[1];
    // Converte vírgula brasileira em ponto para o parseFloat funcionar
    return parseFloat(valor.replace(',', '.')) || 0;
}

/**
 * Formata um número para o padrão brasileiro (com vírgula)
 * @param {number} valor - Valor a formatar
 * @returns {string} - Valor formatado "1.234,56"
 */
function formatarValor(valor) {
    return valor.toFixed(2).replace('.', ',');
}

/**
 * Limpa todos os inputs do formulário
 */
function limparFormulario() {
    obterElemento('valor').value = '';
    obterElemento('categoria').value = 'Alimentacao';
}

/**
 * Valida se um valor é válido (positivo)
 * @param {number} valor - Valor a validar
 * @returns {boolean} - true se válido, false caso contrário
 */
function validarValorPositivo(valor) {
    if (valor < 0) {
        alert('O valor do gasto não pode ser negativo. Por favor, insira um valor válido.');
        return false;
    }
    if (valor === 0) {
        alert('O valor do gasto deve ser maior que zero.');
        return false;
    }
    return true;
}

/**
 * Obtém o mapa de categorias com seus IDs
 * @returns {Object} - Objeto com categorias e seus IDs
 */
function obterMapaCategorias() {
    return {
        'alimentacao': 'Alimentacao',
        'moradia': 'Moradia',
        'transporte': 'Transporte',
        'lazer': 'Lazer',
        'educacao': 'Educacao',
        'saude': 'Saude',
        'outros': 'Outros'
    };
}

/**
 * Obtém o mapa de labels (nomes) das categorias
 * @returns {Object} - Objeto com nomes formatados
 */
function obterMapaLabels() {
    return {
        'alimentacao': 'Alimentação',
        'moradia': 'Moradia',
        'transporte': 'Transporte',
        'lazer': 'Lazer',
        'educacao': 'Educação',
        'saude': 'Saúde',
        'outros': 'Outros'
    };
}
