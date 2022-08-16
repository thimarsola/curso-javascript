const nome = "Rebeca";
const concatencacao = "Olá " + nome + "!";
const template = `
    Olá 
    ${nome}!`;
console.log(concatencacao, template);

// expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
