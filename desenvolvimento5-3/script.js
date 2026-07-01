const elementoH1 = document.createElement("h1");
elementoH1.id = "titulo";
elementoH1.innerText = "Lojinha Tech";
document.body.appendChild(elementoH1);

const containerProduto = document.createElement("div");

const nomeProduto = document.createElement("h2");
nomeProduto.innerText = "Teclado Mecânico Gamer";

const descricaoProduto = document.createElement("p");
descricaoProduto.innerText = "Teclado RGB com switches de alta durabilidade e resposta rápida para jogos.";

const precoProduto = document.createElement("p");
precoProduto.innerText = "Preço: R$ 249,90";

containerProduto.appendChild(nomeProduto);
containerProduto.appendChild(descricaoProduto);
containerProduto.appendChild(precoProduto);

document.body.appendChild(containerProduto);