class ControleOrcamento {
    constructor() {
        this.categorias = obterMapaCategorias();
        this.labels = obterMapaLabels();
    }

    validarValor(valor) {
        return validarValorPositivo(valor);
    }

    atualizarTotalCategoria(categoria, valor) {
        const idElemento = this.categorias[categoria];
        const elementoCategoria = obterElemento(idElemento);
        const totalAtual = extrairValorDoTexto(elementoCategoria.textContent);
        const novoTotal = totalAtual + valor;

        elementoCategoria.textContent = `${this.labels[categoria]}: R$ ${formatarValor(novoTotal)}`;
    }

    atualizarTotalGeral(valor) {
        const elementoTotal = obterElemento('Total');
        const totalAtual = extrairValorDoTexto(elementoTotal.textContent);
        const novoTotal = totalAtual + valor;

        elementoTotal.textContent = `Total: R$ ${formatarValor(novoTotal)}`;
    }

    adicionarGasto() {
        const valor = parseFloat(obterElemento('valor').value);

        if (!this.validarValor(valor)) {
            return;
        }

        const categoria = obterElemento('categoria').value;

        this.atualizarTotalCategoria(categoria, valor);
        this.atualizarTotalGeral(valor);

        // Limpar input
        limparFormulario();
    }
}

// Instância global para uso nos scripts
const controleOrcamento = new ControleOrcamento();
