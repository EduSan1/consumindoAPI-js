"use strict";

const cep = document.getElementById("cep");

const procurarCep = async (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/#`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const preencherCep = async () => {
  const endereco = await procurarCep(cep.value);
  console.log(endereco);
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

cep.addEventListener("focusout", preencherCep);
