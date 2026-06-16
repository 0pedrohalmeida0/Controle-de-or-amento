/**
 * Inicialização da aplicação de Controle de Orçamento
 */

/**
 * Função para adicionar um novo gasto
 * Delega para a classe ControleOrcamento
 */
function addGastos() {
    controleOrcamento.adicionarGasto();
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
