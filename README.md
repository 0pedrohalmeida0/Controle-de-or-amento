# Controle de Gastos

## Descrição

Aplicação web desenvolvida para controle de gastos pessoais, permitindo o registro e acompanhamento de despesas em diferentes categorias. O sistema atualiza automaticamente os valores das categorias e o total geral sem necessidade de recarregar a página.

Este projeto foi refatorado com foco em boas práticas de desenvolvimento JavaScript, aplicando Programação Orientada a Objetos (POO), organização modular do código e técnicas de Programação Funcional.

---

## Funcionalidades

* Cadastro de gastos por categoria.
* Atualização automática dos totais por categoria.
* Cálculo do total geral em tempo real.
* Validação de valores inseridos pelo usuário.
* Interface dinâmica sem recarregamento da página.
* Limpeza automática dos campos após o registro do gasto.

---

## Estrutura do Projeto

```text
📁 projeto
│
├── index.html
├── style.css
│
└── js
    ├── app.js
    ├── classes.js
    └── utils.js
```

### Responsabilidades dos Arquivos

**index.html**

* Estrutura da interface da aplicação.

**classes.js**

* Implementação da classe `ControleOrcamento`.
* Regras de negócio relacionadas ao controle dos gastos.

**utils.js**

* Funções auxiliares para manipulação do DOM.
* Formatação de valores.
* Validações.
* Mapeamento de categorias.

**app.js**

* Inicialização da aplicação.
* Configuração dos eventos.
* Comunicação entre interface e lógica de negócio.

---

## Conceitos Aplicados

### Programação Orientada a Objetos (POO)

O projeto utiliza uma classe principal responsável por encapsular as regras de negócio da aplicação:

* Organização do código em métodos específicos.
* Encapsulamento das funcionalidades.
* Reutilização de código.

### Programação Funcional

Foram aplicados conceitos de funções auxiliares independentes e reutilizáveis, buscando reduzir efeitos colaterais e melhorar a legibilidade do código.

### Modularização

O código foi dividido em arquivos com responsabilidades específicas, facilitando manutenção, escalabilidade e reutilização.

### Manipulação Moderna do DOM

Os eventos são registrados utilizando:

```javascript
addEventListener()
```

evitando a utilização de lógica diretamente no HTML.

### Validação de Dados

O sistema verifica se o valor informado é válido antes de processar o gasto, impedindo valores negativos, nulos ou inválidos.

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript ES6+

---

## Objetivo Acadêmico

Este projeto foi desenvolvido como exercício de refatoração de código, com foco em:

* Organização de aplicações JavaScript.
* Aplicação de Programação Orientada a Objetos.
* Modularização de código.
* Boas práticas de desenvolvimento Front-End.
* Manipulação dinâmica do DOM.
* Validação de dados e experiência do usuário.

```
```
