import produtos from "./produtos.js";

console.log("Todos os produtos: \n");
console.log(produtos.produtos);

console.log("Apenas os nomes: \n");
console.log(produtos.nomeProdutos());

console.log("Apenas produtos do ciclano");
console.log(produtos.fornecedorCiclano());

console.log("Total de estoque ocupado");
console.log(produtos.somarEstoque());