const produtos = [
    {"cod": 1, "nome": "manteiga", "setor": "alimentos", "fornecedor": "fulano", "qtd_estoque": 50},
    {"cod": 2, "nome": "leite", "setor": "alimentos", "fornecedor": "beltrano", "qtd_estoque": 120},
    {"cod": 3, "nome": "arroz", "setor": "alimentos", "fornecedor": "ciclano", "qtd_estoque": 80},
    {"cod": 4, "nome": "feijão", "setor": "alimentos", "fornecedor": "fulano", "qtd_estoque": 90},
    {"cod": 5, "nome": "macarrão", "setor": "alimentos", "fornecedor": "ciclano", "qtd_estoque": 150},
    {"cod": 6, "nome": "tomate", "setor": "hortifruti", "fornecedor": "horta verde", "qtd_estoque": 200},
    {"cod": 7, "nome": "alface", "setor": "hortifruti", "fornecedor": "horta verde", "qtd_estoque": 100},
    {"cod": 8, "nome": "frango congelado", "setor": "carnes", "fornecedor": "carnes do sul", "qtd_estoque": 70},
    {"cod": 9, "nome": "carne bovina", "setor": "carnes", "fornecedor": "carnes do sul", "qtd_estoque": 60},
    {"cod": 10, "nome": "queijo", "setor": "laticínios", "fornecedor": "laticínios santos", "qtd_estoque": 150},
    {"cod": 11, "nome": "iogurte", "setor": "laticínios", "fornecedor": "laticínios santos", "qtd_estoque": 200},
    {"cod": 12, "nome": "pão", "setor": "panificadora", "fornecedor": "ciclano", "qtd_estoque": 300},
    {"cod": 13, "nome": "suco de laranja", "setor": "bebidas", "fornecedor": "bebidas tropical", "qtd_estoque": 180},
    {"cod": 14, "nome": "refrigerante", "setor": "bebidas", "fornecedor": "bebidas tropical", "qtd_estoque": 150},
    {"cod": 15, "nome": "cereal", "setor": "alimentos", "fornecedor": "cerealistas do norte", "qtd_estoque": 100}
]

function nomeProdutos() {
    return produtos.map(produto => produto.nome);
}

function fornecedorCiclano() {
    return produtos.filter(produto => produto.fornecedor === "ciclano");
}

export default {
    produtos,
    nomeProdutos,
    fornecedorCiclano
};