/**
 * Utilitários gerais para o controle de orçamento
 */

/**
 * Obtém um elemento do DOM pelo ID
 * @param {string} id - ID do elemento
 * @returns {HTMLElement} - Elemento encontrado
 */
export function obterElemento(id) {
    return document.getElementById(id);
}

/**
 * Extrai valor numérico de um texto formatado
 * @param {string} texto - Texto com formato "R$ 1.234,56"
 * @returns {number} - Valor numérico
 */
export function extrairValorDoTexto(texto) {
    const valor = texto.split('R$ ')[1];
    if (!valor) return 0;
    // Normaliza considerando diferentes formatos:
    // - se contém '.' e ',' -> pontos são milhares, vírgula é decimal (remover pontos, trocar vírgula por ponto)
    // - se contém apenas '.' -> se houver mais de um ponto, são milhares (remover todos); se houver um, é decimal (manter)
    // - se contém apenas ',' -> vírgula é decimal (trocar por ponto)
    let s = String(valor).trim();
    if (s.includes('.') && s.includes(',')) {
        s = s.replace(/\./g, '').replace(',', '.');
    } else if (s.includes('.') && !s.includes(',')) {
        const dots = (s.match(/\./g) || []).length;
        if (dots > 1) {
            s = s.replace(/\./g, '');
        }
        // se dots === 1, assume ponto decimal e mantém
    } else if (s.includes(',') && !s.includes('.')) {
        s = s.replace(',', '.');
    }
    // remove espaços restantes
    s = s.replace(/\s/g, '');
    return parseFloat(s) || 0;
}

/**
 * Faz parsing do valor vindo do input, aceitando vírgulas e separadores de milhar
 * @param {string|number} inputValue
 * @returns {number} - número ou NaN
 */
export function parseInputValor(inputValue) {
    if (typeof inputValue === 'number') return inputValue;
    const str = String(inputValue).trim();
    if (str === '') return NaN;
    let s = str.replace(/\s/g, '');
    if (s.includes('.') && s.includes(',')) {
        s = s.replace(/\./g, '').replace(',', '.');
    } else if (s.includes('.') && !s.includes(',')) {
        const dots = (s.match(/\./g) || []).length;
        if (dots > 1) {
            s = s.replace(/\./g, '');
        }
        // caso dots === 1, assume ponto decimal e mantém
    } else if (s.includes(',') && !s.includes('.')) {
        s = s.replace(',', '.');
    }
    return parseFloat(s);
}

/**
 * Formata um número para o padrão brasileiro (com vírgula)
 * @param {number} valor - Valor a formatar
 * @returns {string} - Valor formatado "1.234,56"
 */
export function formatarValor(valor) {
    return valor.toFixed(2).replace('.', ',');
}

/**
 * Limpa todos os inputs do formulário
 */
export function limparFormulario() {
    obterElemento('valor').value = '';
    obterElemento('categoria').value = 'alimentacao';
}

/**
 * Valida se um valor é válido (positivo)
 * @param {number} valor - Valor a validar
 * @returns {boolean} - true se válido, false caso contrário
 */
export function validarValorPositivo(valor) {
    // aceita strings ou números
    const num = (typeof valor === 'number') ? valor : parseInputValor(valor);
    if (!isFinite(num) || isNaN(num)) {
        alert('Por favor, insira um valor numérico válido.');
        return false;
    }
    if (num <= 0) {
        alert('O valor do gasto deve ser maior que zero.');
        return false;
    }
    const LIMITE_MAX = 1e9; // limite razoável
    if (Math.abs(num) > LIMITE_MAX) {
        alert('O valor informado é muito grande.');
        return false;
    }
    return true;
}

/**
 * Obtém o mapa de categorias com seus IDs
 * @returns {Object} - Objeto com categorias e seus IDs
 */
export function obterMapaCategorias() {
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
export function obterMapaLabels() {
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
