"use strict";

const pesquisarCep = async (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/#`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.logradouro);
};

const cep = "06321660";
pesquisarCep(cep);
