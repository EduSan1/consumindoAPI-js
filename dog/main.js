"use strict";

const pesquisar = document.getElementById("pesquisar");

const pesquisarImagem = async (raca) => {
  const url = `https://dog.ceo/api/breed/${raca}/images`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const carregarImagens = async () => {
  const container = document.getElementById("imagem-container");
  const raca = document.getElementById("raca").value;
  const imagens = await pesquisarImagem(raca);

  const imagem = imagens.message.map(criarImagem);
  container.replaceChildren(...imagem);
};

const criarImagem = (imagem) => {
  const img = document.createElement("img");
  img.src = imagem;
  img.classList.add("imagem");
  return img;
};

const pesquisarRacas = async () => {
  const url = `https://dog.ceo/api/breeds/list/all`;
  const response = await fetch(url);
  const data = await response.json();
  return Object.keys(data.message)
};

const carregarRacas = async() => {
  const racas = await pesquisarRacas()
  const lista = document.getElementById("lista-racas")
  lista.innerHTML = `<option> ${racas.join("</option><option>")} </option>`;

}

carregarRacas();
pesquisar.addEventListener("click", carregarImagens);

