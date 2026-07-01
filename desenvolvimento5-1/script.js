const elementoH1 = document.getElementById("titulo");
const elementoUl = document.querySelector("ul");
const elementoA = document.querySelector("a");
const elementoOl = document.getElementById("lista-ordenada");

elementoH1.innerText = "Bem-vindo ao Projeto de Manipulação do DOM";
elementoA.innerText = "Acesse o site da Proz Educação";

elementoUl.innerHTML = `
    <li>Primeiro item simples</li>
    <li>Segundo item simples</li>
    <li>Terceiro item simples</li>
`;

elementoOl.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
    <li><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></li>
`;