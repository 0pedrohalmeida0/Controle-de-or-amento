import { extrairValorDoTexto, formatarValor, obterMapaCategorias, obterMapaLabels, obterElemento } from './utils.js';

export class ControleOrcamento {
    constructor() {
        this.categorias = obterMapaCategorias();
        this.labels = obterMapaLabels();
    }

    calcularNovoTotal(textoAtual, valor) {
        const atual = extrairValorDoTexto(textoAtual);
        return atual + valor;
    }

    formatarTextoCategoria(categoriaKey, total) {
        return `${this.labels[categoriaKey]}: R$ ${formatarValor(total)}`;
    }

    formatarTextoTotal(total) {
        return `Total: R$ ${formatarValor(total)}`;
    }

    atualizarTotalCategoriaDOM(categoria, valor) {
        const idElemento = this.categorias[categoria];
        const elementoCategoria = obterElemento(idElemento);
        const novoTotal = this.calcularNovoTotal(elementoCategoria.textContent, valor);
        elementoCategoria.textContent = this.formatarTextoCategoria(categoria, novoTotal);
        return novoTotal;
    }

    atualizarTotalGeralDOM(valor) {
        const elementoTotal = obterElemento('Total');
        const novoTotal = this.calcularNovoTotal(elementoTotal.textContent, valor);
        elementoTotal.textContent = this.formatarTextoTotal(novoTotal);
        return novoTotal;
    }

    adicionarGasto(valor, categoria) {
        this.atualizarTotalCategoriaDOM(categoria, valor);
        this.atualizarTotalGeralDOM(valor);
    }
}

// export default new ControleOrcamento();
